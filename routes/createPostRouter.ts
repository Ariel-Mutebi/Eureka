import { Router } from "npm:express";
import expressAsyncHandler from "express-async-handler";
import createPost from "../handlers/createPost.ts";
import handleValidationErrors from "../handlers/handleValidationErrors.ts";
import renderCreatePost from "../handlers/renderCreatePost.ts";
import validateItem from "../handlers/validateItem.ts";

const createPostRouter = Router();

createPostRouter.get("/", renderCreatePost);
createPostRouter.post("/", validateItem, handleValidationErrors("createPost"), expressAsyncHandler(createPost));

export default createPostRouter;