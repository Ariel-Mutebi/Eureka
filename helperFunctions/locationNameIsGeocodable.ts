async function locationNameIsGeocodable(locationName: string) {
  const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(locationName)}&format=json&limit=1`);
  const results = await response.json();
  if(results.length < 1) {
    throw new Error("That location is not recognized.");
  };
}

export default locationNameIsGeocodable;