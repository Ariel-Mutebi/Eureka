import type { Request, Response } from "npm:express";
import selectItemName from "../db/queries/selectItemName.ts";

const renderDeletePost = async(req: Request, res: Response) => {
  const itemName = await selectItemName(req.params.itemPrimaryKey);
  res.render("deletePost", { itemName });
};

export default renderDeletePost;