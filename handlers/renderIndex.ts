import type { Request, Response } from "npm:express";
import cookUpItemObject from "./cookUpItemObject.ts";

const renderIndex = async(req: Request, res: Response) => {
  const item = await cookUpItemObject(req.params.itemPrimaryKey);
  res.render("index", { item });
};

export default renderIndex;