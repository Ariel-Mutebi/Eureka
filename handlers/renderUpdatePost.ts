import type { Request, Response } from "npm:express";
import selectItem from "../db/queries/selectItem.ts";
import addLocationNameToItem from "../helperFunctions/addLocationNameToItem.ts";

const renderUpdatePost = async(req: Request, res: Response) => {
  const itemAsFromDatabase = await selectItem(req.params.itemPrimaryKey);
  const itemWithLocationName = await addLocationNameToItem(itemAsFromDatabase);
  res.render("updatePost", { item: itemWithLocationName });
};

export default renderUpdatePost;