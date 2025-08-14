import { Router } from "npm:express";
import expressAsyncHandler from "npm:express-async-handler";
import renderContact from "../handlers/renderContact.ts";

const contactRouter = Router();

contactRouter.get("/:itemPrimaryKey", expressAsyncHandler(renderContact));

export default contactRouter;