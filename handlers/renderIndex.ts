import type { Response } from "npm:express";
import selectAllItems from "../db/queries/selectAllItems.ts";
import addLocationNamesToItems from "../helperFunctions/addLocationNamesToItems.ts";

const renderIndex = async(_req: object, res: Response) => {
  const itemsAsFromDatabase = await selectAllItems();
  const itemsWithLocationNames = await addLocationNamesToItems(itemsAsFromDatabase);
  res.render("index", { items: itemsWithLocationNames });
};

export default renderIndex;