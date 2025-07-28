import type { Request, Response } from "npm:express";
import selectItemPassword from "../db/queries/selectItemPassword.ts";
import keysToTokens from "../objects/keysToTokens.ts";

const getAuthToken = async(req: Request, res: Response) => {
  const userInputtedPassword = req.body.password;
  const correctPassword = await selectItemPassword(req.params.itemPrimaryKey);
  
  if(userInputtedPassword !== correctPassword) {
    res.status(403);
    res.end();
    return;
  };

  const token = crypto.randomUUID();
  keysToTokens[req.params.itemPrimaryKey] = token;
  res.send(token);
};

export default getAuthToken;