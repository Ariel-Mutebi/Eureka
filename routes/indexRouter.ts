import { Router } from "npm:express";
import renderIndex from "../handlers/renderIndex.ts";
import addItem from "../handlers/addItem.ts";
import renderInternalServerError from "../handlers/renderInternalServerError.ts";
import validateItem from "../handlers/validateItem.ts";
import handleValidationErrors from "../handlers/handleValidationErrors.ts";
import asyncHandler from "npm:express-async-handler";

const indexRouter = Router();

indexRouter.get("/", asyncHandler(renderIndex), renderInternalServerError);
indexRouter.post("/addItem", validateItem, handleValidationErrors, asyncHandler(addItem), renderInternalServerError);

export default indexRouter;