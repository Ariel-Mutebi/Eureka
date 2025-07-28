import { Router } from "npm:express";
import expressAsyncHandler from "express-async-handler";
import addItem from "../handlers/addItem.ts";
import handleValidationErrors from "../handlers/handleValidationErrors.ts";
import renderCreatePost from "../handlers/renderCreatePost.ts";
import renderInternalServerError from "../handlers/renderInternalServerError.ts";
import validateItem from "../handlers/validateItem.ts";

const createPostRouter = Router();

createPostRouter.get("/", renderCreatePost, renderInternalServerError);
createPostRouter.post("/", validateItem, handleValidationErrors, expressAsyncHandler(addItem), renderInternalServerError);

export default createPostRouter;