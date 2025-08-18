import seePeripheryOfItem from "../db/queries/seePeripheryOfItem.ts";
import selectFirstItem from "../db/queries/selectFirstItem.ts";
import selectItem from "../db/queries/selectItem.ts";
import addLocationNameToItem from "../helperFunctions/addLocationNameToItem.ts";

const cookUpItemObject = async(itemPrimaryKey: string | undefined) => {
  // JUST LET HIM COOK!
  const itemAsFromDatabase = itemPrimaryKey ? await selectItem(itemPrimaryKey) : await selectFirstItem();
  const itemWithLocationName = await addLocationNameToItem(itemAsFromDatabase);
  const itemWithPeripheralVision = Object.assign({}, itemWithLocationName, { periphery: await seePeripheryOfItem(itemAsFromDatabase.pk) })
  return itemWithPeripheralVision;
}

export default cookUpItemObject;