import argparse
import io
import os
import difflib  # For fuzzy matching
from google.cloud import vision

# Authenticate using your Google Cloud service account
os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "/Users/carlotanavarro/Desktop/GrizzHacks/duck-tracker-key.json"

# List of possible duck species
DUCK_SPECIES = [
    "Mallard", "Wood Duck", "American Black Duck", "Blue-winged Teal", "Northern Shoveler",
    "Gadwall", "Green-winged Teal", "Canvasback", "Redhead", "Ring-necked Duck", "Greater Scaup",
    "Lesser Scaup", "Common Eider", "King Eider", "Harlequin Duck", "Surf Scoter",
    "White-winged Scoter", "Black Scoter", "Long-tailed Duck", "Bufflehead",
    "Common Goldeneye", "Barrow’s Goldeneye", "Hooded Merganser", "Common Merganser",
    "Red-breasted Merganser", "Rubber Duck"
]

def get_closest_match(label):
    """Finds the closest match for a detected label from the predefined duck species list."""
    label_lower = label.lower()
    species_dict = {species.lower(): species for species in DUCK_SPECIES}

    # Check for an exact match (case-insensitive)
    if label_lower in species_dict:
        return species_dict[label_lower]

    # Use fuzzy matching to find the closest species
    closest_match = difflib.get_close_matches(label_lower, species_dict.keys(), n=1, cutoff=0.7)
    if closest_match:
        return species_dict[closest_match[0]]

    return None  # No close match found

def identify_duck_species(image_path):
    """Identifies the duck species in an image using Google Cloud Vision API."""
    client = vision.ImageAnnotatorClient()

    # Read the image file
    with io.open(image_path, 'rb') as image_file:
        content = image_file.read()

    image = vision.Image(content=content)

    # Send image to Vision API for label detection
    response = client.label_detection(image=image)
    
    if response.error.message:
        raise Exception(f"Google Vision API error: {response.error.message}")

    labels = response.label_annotations

    detected_labels = [label.description for label in labels]
    # print(f"Labels detected: {detected_labels}") label print for debug
    # Check each label for a match
    for label in detected_labels:
        species = get_closest_match(label)
        if species:
            return f"{species}"

    return "Mallard"  # Call everything we don't recognize a mallard like most people do

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Identify a duck species from an image.")
    parser.add_argument("image_path", help="Path to the image file")

    args = parser.parse_args()
    
    result = identify_duck_species(args.image_path)
    with open("duckType.txt", "w") as f:
        f.write(result)
