import { Router } from "npm:express";
import renderUpdatePost from "../handlers/renderUpdatePost.ts";
import renderInternalServerError from "../handlers/renderInternalServerError.ts";
import expressAsyncHandler from "express-async-handler";

const updatePostRouter = Router();
updatePostRouter.get("/:itemPrimaryKey", expressAsyncHandler(renderUpdatePost), renderInternalServerError);

export default updatePostRouter;