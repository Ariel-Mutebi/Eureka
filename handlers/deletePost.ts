import type { Request, Response } from "npm:express";
import selectItemPassword from "../db/queries/selectItemPassword.ts";
import deleteItem from "../db/queries/deleteItem.ts";

async function deletePost(req: Request, res: Response) {
  const { itemPrimaryKey } = req.params;
  const userSubmittedPassword = req.body.password;
  const correctPassword = await selectItemPassword(itemPrimaryKey);

  if(userSubmittedPassword !== correctPassword) {
    res.status(401);
    res.render("deletePost", { itemName: req.body.itemName, issue: "Wrong password" });
    return;
  };

  await deleteItem(itemPrimaryKey);
  res.redirect("/");
}

export default deletePost;
