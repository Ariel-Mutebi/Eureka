async function geocode(locationName: string) {
  const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(locationName)}&format=json&limit=1`);
  const location = await response.json();
  const { lat, lon } = location[0];
  return { x: lat, y: lon };
};

export default geocode;