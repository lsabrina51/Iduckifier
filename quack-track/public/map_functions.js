// global variable so that it can be used in geocoding callbacks.
let map;

function initMap() {
  // create a new map in the "map" div.
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 44.182205, lng: -84.506836 },
    zoom: 7.5,
    mapId: 'a0f564d360319952'
  });

  // example values
  const duckType = "Mallard"; // or any other duck type
  const address = "1600 Amphitheatre Parkway, Mountain View, CA";

  placeAdvancedDuckMarker(duckType, address);
}

function placeAdvancedDuckMarker(duckType, address) {
  const geocoder = new google.maps.Geocoder();

  geocoder.geocode({ address: address }, (results, status) => {
    if (status === 'OK') {
      const location = results[0].geometry.location;
      map.setCenter(location);

      // Create an advanced marker for the duck.
      const marker = new google.maps.marker.AdvancedMarkerElement({
        map: map,
        position: location,
        title: duckType,
        content: getDuckMarkerContent(duckType)
      });
    } else {
      console.error('Geocode was not successful for the following reason: ' + status);
    }
  });
}

function getDuckMarkerContent(duckType) {
  // rubber duck: use the existing SVG image.
  if (duckType === 'Rubber Duck') {
    const img = document.createElement('img');
    img.src = "duck.svg";  
    img.style.width = "35px";
    img.style.height = "35px";
    return img;
  } else {
    // define RGBA colors for each duck type.
    const duckPinMap = {
      "Mallard": { background: "rgba(230,25,75,1)", borderColor: "rgba(255,255,255,1)", glyph: "", glyphColor: "white" },
      "Wood Duck": { background: "rgba(60,180,75,1)", borderColor: "rgba(255,255,255,1)", glyph: "", glyphColor: "white" },
      "American Black Duck": { background: "rgba(255,225,25,1)", borderColor: "rgba(255,255,255,1)", glyph: "", glyphColor: "white" },
      "Blue-winged Teal": { background: "rgba(0,130,200,1)", borderColor: "rgba(255,255,255,1)", glyph: "", glyphColor: "white" },
      "Northern Shoveler": { background: "rgba(245,130,48,1)", borderColor: "rgba(255,255,255,1)", glyph: "", glyphColor: "white" },
      "Gadwall": { background: "rgba(145,30,180,1)", borderColor: "rgba(255,255,255,1)", glyph: "", glyphColor: "white" },
      "Green-winged Teal": { background: "rgba(70,240,240,1)", borderColor: "rgba(255,255,255,1)", glyph: "", glyphColor: "white" },
      "Canvasback": { background: "rgba(240,50,230,1)", borderColor: "rgba(255,255,255,1)", glyph: "", glyphColor: "white" },
      "Redhead": { background: "rgba(210,245,60,1)", borderColor: "rgba(255,255,255,1)", glyph: "", glyphColor: "white" },
      "Ring-necked Duck": { background: "rgba(250,190,190,1)", borderColor: "rgba(255,255,255,1)", glyph: "", glyphColor: "white" },
      "Greater Scaup": { background: "rgba(0,128,128,1)", borderColor: "rgba(255,255,255,1)", glyph: "", glyphColor: "white" },
      "Lesser Scaup": { background: "rgba(230,190,255,1)", borderColor: "rgba(255,255,255,1)", glyph: "", glyphColor: "white" },
      "Common Eider": { background: "rgba(170,110,40,1)", borderColor: "rgba(255,255,255,1)", glyph: "", glyphColor: "white" },
      "King Eider": { background: "rgba(255,250,200,1)", borderColor: "rgba(255,255,255,1)", glyph: "", glyphColor: "white" },
      "Harlequin Duck": { background: "rgba(128,0,0,1)", borderColor: "rgba(255,255,255,1)", glyph: "", glyphColor: "white" },
      "Surf Scoter": { background: "rgba(170,255,195,1)", borderColor: "rgba(255,255,255,1)", glyph: "", glyphColor: "white" },
      "White-winged Scoter": { background: "rgba(128,128,0,1)", borderColor: "rgba(255,255,255,1)", glyph: "", glyphColor: "white" },
      "Black Scoter": { background: "rgba(255,216,177,1)", borderColor: "rgba(255,255,255,1)", glyph: "", glyphColor: "white" },
      "Long-tailed Duck": { background: "rgba(0,0,128,1)", borderColor: "rgba(255,255,255,1)", glyph: "", glyphColor: "white" },
      "Bufflehead": { background: "rgba(128,128,128,1)", borderColor: "rgba(255,255,255,1)", glyph: "", glyphColor: "white" },
      "Common Goldeneye": { background: "rgba(255,105,180,1)", borderColor: "rgba(255,255,255,1)", glyph: "", glyphColor: "white" },
      "Barrow’s Goldeneye": { background: "rgba(0,0,0,1)", borderColor: "rgba(255,255,255,1)", glyph: "", glyphColor: "white" },
      "Hooded Merganser": { background: "rgba(255,127,0,1)", borderColor: "rgba(255,255,255,1)", glyph: "", glyphColor: "white" },
      "Common Merganser": { background: "rgba(106,61,154,1)", borderColor: "rgba(255,255,255,1)", glyph: "", glyphColor: "white" },
      "Red-breasted Merganser": { background: "rgba(177,89,40,1)", borderColor: "rgba(255,255,255,1)", glyph: "", glyphColor: "white" }
    };

    // retrieve configuration for the current duck type (or use a default).
    const config = duckPinMap[duckType] || {
      background: "rgba(230,25,75,1)",
      borderColor: "rgba(255,255,255,1)",
      glyph: "",
      glyphColor: "white"
    };

    const pin = new google.maps.marker.PinElement({
      scale: 1.0, 
      background: config.background,
      borderColor: "black",
      glyph: config.glyph,
      glyphColor: config.glyphColor
    });
    return pin.element;
  }
}

window.initMap = initMap;
window.placeAdvancedDuckMarker = placeAdvancedDuckMarker;