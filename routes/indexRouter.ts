import { Router } from "npm:express";
import renderIndex from "../handlers/renderIndex.ts";
import renderInternalServerError from "../handlers/renderInternalServerError.ts";
import expressAsyncHandler from "npm:express-async-handler";
import updatePostRouter from "./updateItemRouter.ts";
import createPostRouter from "./createPostRouter.ts";

const indexRouter = Router();

indexRouter.get("/", expressAsyncHandler(renderIndex), renderInternalServerError);
indexRouter.use("/createPost", createPostRouter);
indexRouter.use("/updatePost", updatePostRouter);

export default indexRouter;