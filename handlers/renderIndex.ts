import type { Request, Response } from "npm:express";
import addLocationNameToItem from "../helperFunctions/addLocationNameToItem.ts";
import selectItem from "../db/queries/selectItem.ts";
import selectAnyOldItem from "../db/queries/selectAnyOldItem.ts";

const renderIndex = async(req: Request, res: Response) => {
  const itemPrimaryKey: string | undefined = req.params.itemPrimaryKey;
  const item = await addLocationNameToItem(itemPrimaryKey ? await selectItem(itemPrimaryKey) : await selectAnyOldItem());
  res.render("index", { item });
};

export default renderIndex;