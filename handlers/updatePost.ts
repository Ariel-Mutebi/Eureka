import type { Request, Response } from "npm:express";
import keysToTokens from "../objects/keysToTokens.ts";
import UnauthorizedError from "../objects/UnauthorizedError.ts";
import addLocationToItem from "../helperFunctions/addLocationToItem.ts";
import updateItem from "../db/queries/updateItem.ts";

const updatePost = async(req: Request, res: Response) => {
  const key = req.params.itemPrimaryKey;

  if(req.params.authToken !== keysToTokens[key]) {
    throw new UnauthorizedError("Given authentication token doesn't correspond with current authentication token.");
  };

  delete keysToTokens[key];
  
  const item = await addLocationToItem(req.body);
  await updateItem(item);
  res.redirect("/")
};

export default updatePost;