import type { Request, Response } from "npm:express";
import addLocationNameToItem from "../helperFunctions/addLocationNameToItem.ts";
import selectItem from "../db/queries/selectItem.ts";
import selectFirstItem from "../db/queries/selectFirstItem.ts";
import seePeripheryOfItem from "../db/queries/seePeripheryOfItem.ts";

const renderIndex = async(req: Request, res: Response) => {
  const itemPrimaryKey: string | undefined = req.params.itemPrimaryKey;
  const item = await addLocationNameToItem(itemPrimaryKey ? await selectItem(itemPrimaryKey) : await selectFirstItem());
  const periphery = await seePeripheryOfItem(item.pk);
  res.render("index", { item, periphery });
};

export default renderIndex;