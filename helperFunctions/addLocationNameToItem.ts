import ItemInDatabase from "../interfaces/ItemInDatabase.ts";
import reverseGeocode from "./reverseGeocode.ts";

async function addLocationNameToItem(item: ItemInDatabase) {
  item.locationName = await reverseGeocode(item.location.x, item.location.y);
  return item;
};

export default addLocationNameToItem;