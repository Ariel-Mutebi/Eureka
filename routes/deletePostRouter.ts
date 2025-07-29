import { Router } from "npm:express";
import expressAsyncHandler from "express-async-handler";
import renderDeletePost from "../handlers/renderDeletePost.ts";
import deletePost from "../handlers/deletePost.ts";

const deletePostRouter = Router();

deletePostRouter.get("/:itemPrimaryKey", expressAsyncHandler(renderDeletePost));
deletePostRouter.post("/:itemPrimaryKey", expressAsyncHandler(deletePost));

export default deletePostRouter;