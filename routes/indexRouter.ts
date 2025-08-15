import { Router } from "npm:express";
import expressAsyncHandler from "express-async-handler";
import renderIndex from "../handlers/renderIndex.ts";
import generateSearchSuggestions from "../handlers/generateSearchSuggestions.ts";

const indexRouter = Router();

indexRouter.get("/searchSuggestions", expressAsyncHandler(generateSearchSuggestions));
indexRouter.get("/:itemPrimaryKey?", expressAsyncHandler(renderIndex));

export default indexRouter;