// @ts-types='npm:@types/express';
import { Router } from "npm:express";
import renderIndex from "../handlers/renderIndex.ts";

const indexRouter = Router();

indexRouter.get("/", renderIndex);

export default indexRouter;