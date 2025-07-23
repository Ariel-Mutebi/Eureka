import { Router } from "npm:express";
import renderIndex from "../handlers/renderIndex.ts";
import addItem from "../handlers/addItem.ts";
import renderInternalServerError from "../handlers/renderInternalServerError.ts";

const indexRouter = Router();

indexRouter.get("/", renderIndex, renderInternalServerError);
indexRouter.post("/addItem", addItem, renderInternalServerError);

export default indexRouter;