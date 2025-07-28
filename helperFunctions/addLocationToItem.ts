import ItemInClient from "../interfaces/ItemInClient.ts";
import geocode from "./geocode.ts";

async function addLocationToItem(item: ItemInClient) {
  item.location = await geocode(item.locationName);
  return item;
}

export default addLocationToItem;