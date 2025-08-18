import type { Request, Response } from "npm:express";
import cookUpItemObject from "./cookUpItemObject.ts";

const getItemJson = async(req: Request, res: Response) => {
  res.json(await cookUpItemObject(req.params.itemPrimaryKey));
}

export default getItemJson;