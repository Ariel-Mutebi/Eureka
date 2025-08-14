import { Router } from "npm:express";
import renderUpdatePost from "../handlers/renderUpdatePost.ts";
import expressAsyncHandler from "express-async-handler";
import getAuthToken from "../handlers/getAuthToken.ts";
import updatePost from "../handlers/updatePost.ts";
import validateItem from "../handlers/validateItem.ts";
import handleValidationErrors from "../handlers/handleValidationErrors.ts";

const updatePostRouter = Router();
updatePostRouter.get("/:itemPrimaryKey", expressAsyncHandler(renderUpdatePost));
updatePostRouter.post("/:itemPrimaryKey/getAuthToken", expressAsyncHandler(getAuthToken));
updatePostRouter.post("/:itemPrimaryKey/:authToken", validateItem, handleValidationErrors("updatePost"), expressAsyncHandler(updatePost));

export default updatePostRouter;