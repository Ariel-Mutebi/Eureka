import type { Request, Response } from "npm:express";
import selectAllItems from "../db/queries/selectAllItems.ts";
import addLocationNamesToItems from "../helperFunctions/addLocationNameToItem.ts";

// Can't use RequestHandler type because will be wrapped in asyncHandler,
// which needs to know that the handler returns a promise.
const renderIndex = async(req: Request, res: Response) => {
  const itemsAsFromDatabase = await selectAllItems();
  const itemsWithLocationNames = await addLocationNamesToItems(itemsAsFromDatabase);
  if(!Array.isArray(req.query.errors)) {
    res.render("index", { items: itemsWithLocationNames });
  } else {
    res.render("index", { items: itemsWithLocationNames, errors: req.query.errors });
  }
};

export default renderIndex;