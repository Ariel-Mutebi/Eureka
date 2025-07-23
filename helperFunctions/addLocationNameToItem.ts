import ItemInDatabase from "../interfaces/ItemInDatabase.ts";
import reverseGeocode from "./reverseGeocode.ts";

function addLocationNamesToItems(itemsAsFromDatabase: ItemInDatabase[]) {
  return Promise.all(
    itemsAsFromDatabase.map(async(item) =>{
      item.locationName = await reverseGeocode(item.location.x, item.location.y);
      return item;
    })
  )
}

export default addLocationNamesToItems;