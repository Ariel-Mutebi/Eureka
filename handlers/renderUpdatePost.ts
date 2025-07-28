import type { Request, Response } from "npm:express";
import selectItem from "../db/queries/selectItem.ts";

const renderUpdatePost = async(req: Request, res: Response) => {
  const item = await selectItem(req.params.itemPrimaryKey);
  res.render("updatePost", { item });
};

export default renderUpdatePost;