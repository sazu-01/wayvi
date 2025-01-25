"use strict";

import { Schema, model } from "mongoose";

const templateSchema = new Schema(
  {
    title: {
      type: String,
      minLength: [10, "title is too short"],
      maxLength: [100, "title is too long"],
    },
    slug: {
      type: String,
      lowercase: true,
      required: [true, "slug must be provided"],
    },

    version : {
      type  : String,
      enum : ["Free", "Standard", "Premium", "Enterprise"]
    },

    images: [
      {
        type: String,
      },
    ],

    description: {
      type: String,
      minLength: [10, "title is too short"],
    },

    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: [true, "category must be provided"],
    },
    
    price: {
      type: Number,
      required: [true, "price must be provided"],
    },
  },
  { timestamps: true }
);

const Template = model("Template", templateSchema);

export default Template;
