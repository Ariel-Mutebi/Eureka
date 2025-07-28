import type { Response } from "npm:express";
import selectAllItems from "../db/queries/selectAllItems.ts";
import addLocationNamesToItems from "../helperFunctions/addLocationNameToItem.ts";

// Can't use RequestHandler type because will be wrapped in asyncHandler,
// which needs to know that the handler returns a promise.
const renderIndex = async(_req: object, res: Response) => {
  const itemsAsFromDatabase = await selectAllItems();
  const itemsWithLocationNames = await addLocationNamesToItems(itemsAsFromDatabase);
  res.render("index", { items: itemsWithLocationNames });
};

export default renderIndex;