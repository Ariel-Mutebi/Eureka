import { Router } from "npm:express";
import renderIndex from "../handlers/renderIndex.ts";
import addItem from "../handlers/addItem.ts";
import renderInternalServerError from "../handlers/renderInternalServerError.ts";
import validateItem from "../handlers/validateItem.ts";
import handleValidationErrors from "../handlers/handleValidationErrors.ts";

const indexRouter = Router();

indexRouter.get("/", renderIndex, renderInternalServerError);
indexRouter.post("/addItem", validateItem, handleValidationErrors, addItem, renderInternalServerError);

export default indexRouter;