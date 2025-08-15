import Item from "../interfaces/Item.ts";
import geocode from "./geocode.ts";

async function addLocationToItem(item: Item) {
  item.location = await geocode(item.locationName!);
  return item;
}

export default addLocationToItem;