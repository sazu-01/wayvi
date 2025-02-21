

"use strict";
//import packages
import express from "express";

import { CreatePayment, GetAllPayment } from "../controllers/paymentController.js";

//make an express router
const paymentRouter = express.Router();


paymentRouter.post("/create-payment", CreatePayment);

paymentRouter.get("/all-payment", GetAllPayment)


export default paymentRouter;