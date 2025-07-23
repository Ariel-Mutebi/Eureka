async function reverseGeocode(lat: number, lon: number) {
  try {
    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`);
    const location = await response.json();
    return location.name as string;
  } catch (error) {
    throw new Error(String(error));
  };
};

export default reverseGeocode;