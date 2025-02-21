
"use strict";

//import package
import { Schema , model } from "mongoose";

const paymentSchema = new Schema({
   email: {
     type: String,
     trim: true,
   },

   method: {
    type: String,
    required: [true, "payment method is required"],
   }

},{timestamps:true});


const Payment = model("Payment",paymentSchema);

export default Payment
