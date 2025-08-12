import jeParleAnglais from "../constants/jeParleAnglais.ts";

async function reverseGeocode(lat: number, lon: number) {
  try {
    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`, jeParleAnglais);
    const location = await response.json();
    return { locationName: location.name, fullLocationName: location.display_name };
  } catch (error) {
    console.error(error);
    return "";
  };
};

export default reverseGeocode;