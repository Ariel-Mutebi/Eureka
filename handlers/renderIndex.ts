// @ts-types='npm:@types/express';
import type { Response } from "express";
import selectAll from "../db/queries/selectAll.ts";

async function renderIndex(_req: object, res: Response) {
  res.render("index", { items: await selectAll() });
};

export default renderIndex;