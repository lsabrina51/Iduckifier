let map;

function initMap() {
  // Initialize the map with a default center and zoom
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 44.182205, lng: -84.506836 },
    zoom: 7.5,
    mapId: 'a0f564d360319952'
  });

  // Get the address and date from the URL parameters
  const params = new URLSearchParams(window.location.search);
  const address = params.get('address');
  const date = params.get('date');  // You can use this later if needed

  if (address) {
    // Fetch duck type (this can be stored or fetched from a server if needed)
    fetch('duckType.txt')  // Adjust this based on where you're getting the duck type
      .then(response => response.text())
      .then(duckType => {
        placeAdvancedDuckMarker(duckType.trim(), address);
      })
      .catch(error => {
        console.error('Failed to load duck type:', error);
      });
  }
}

function placeAdvancedDuckMarker(duckType, address) {
  const geocoder = new google.maps.Geocoder();

  geocoder.geocode({ address: address }, (results, status) => {
    if (status === 'OK') {
      const location = results[0].geometry.location;
      map.setCenter(location);
      map.setZoom(13);

      // Create an advanced marker for the duck
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
  // Create different markers based on the duck type
  if (duckType === 'Rubber Duck') {
    const img = document.createElement('img');
    img.src = "duck.svg";  // Use your actual rubber duck image
    img.style.width = "35px";
    img.style.height = "35px";
    return img;
  } else {
    // Define the appearance for other duck types
    const duckPinMap = {
      "Mallard": { background: "rgba(230,25,75,1)", borderColor: "rgba(255,255,255,1)", glyph: "", glyphColor: "white" },
      "Wood Duck": { background: "rgba(60,180,75,1)", borderColor: "rgba(255,255,255,1)", glyph: "", glyphColor: "white" },
      // Add other duck types as needed
    };

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
