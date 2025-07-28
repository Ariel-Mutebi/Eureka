import { Router } from "npm:express";
import renderIndex from "../handlers/renderIndex.ts";
import addItem from "../handlers/addItem.ts";
import renderInternalServerError from "../handlers/renderInternalServerError.ts";
import validateItem from "../handlers/validateItem.ts";
import handleValidationErrors from "../handlers/handleValidationErrors.ts";
import asyncHandler from "npm:express-async-handler";
import updateItemRouter from "./updateItemRouter.ts";
import renderCreatePost from "../handlers/renderCreatePost.ts";

const indexRouter = Router();

indexRouter.get("/", asyncHandler(renderIndex), renderInternalServerError);
indexRouter.get("/createPost", renderCreatePost, renderInternalServerError);
indexRouter.post("/createPost", validateItem, handleValidationErrors, asyncHandler(addItem), renderInternalServerError);
indexRouter.use("/updateItem", updateItemRouter);

export default indexRouter;