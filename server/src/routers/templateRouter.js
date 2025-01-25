"use strict";

//packages
import express from "express";

import {
  CreateTemplateController,
  GetAllTemplate,
  GetSingleTemplateBySlug,
  DeleteTemplateBySlug,
  updateTemplateBySlug,
 } from "../controllers/TemplateController.js";

//validation
import { validateProduct } from "../validation/templateValidation.js";
import RunValidation from "../validation/index.js";

//authentication
import { IsLoggedIn, IsAdmin } from "../middlewares/authMiddleware.js";

import { uploadProductImg } from "../middlewares/uploadFile.js";

//make an express router
const productRouter = express.Router();

productRouter.post("/create-template",IsLoggedIn,IsAdmin,
uploadProductImg.array("images"),validateProduct,RunValidation,CreateTemplateController);

productRouter.get("/all-template", GetAllTemplate);

productRouter.get("/:slug", GetSingleTemplateBySlug);

productRouter.put("/update-template/:slug",uploadProductImg.single("image"),
IsLoggedIn,IsAdmin,updateTemplateBySlug);

productRouter.delete(
  "/delete-template/:slug",
  IsLoggedIn,
  IsAdmin,
  DeleteTemplateBySlug
);

export default productRouter;
