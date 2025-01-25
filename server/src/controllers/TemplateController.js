"use strict";

//packages
import slugify from "slugify";

//helpers
import { SuccessResponse } from "../helpers/responseCode.js";

//services
import {
  CreateTemplateService,
  DeleteTemplateService,
  GetAllTemplateService,
  GetTemplateService,
  UpdateTemplateService,
} from "../services/templateServices.js";

const CreateTemplateController = async (req, res, next) => {
  try {
    const { title, version, description, category, price } =
      req.body;

    //checking if images are uploaded with the request
    const images = req.files?.map((file)=> file.path);

    //creating an object with product data
    const productData = {
      title,
      slug: slugify(title),
      version,
      images,
      description,
      category,
      price,
    };

    
    //call the createproduct service with product data
    const product = await CreateTemplateService(productData);

    return SuccessResponse(res, {
      statusCode: 200,
      message: "product created successfully",
      payload: { product },
    });
  } catch (error) {
    next(error);
  }
};

const GetAllTemplate = async (req, res, next) => {
  try {
    //extracting page, limit, and search query parameters from the request
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const search = req.query.search || "";

    //creating a regular expression for case-insensitive search
    const searchRegExp = new RegExp(".*" + search + ".*", "i");

    const filter = {
      $or: [{ title: { $regex: searchRegExp } }],
    };
    //calling the get all products service with pagination and filter
    const { products, pagination } = await GetAllTemplateService(
      page,
      limit,
      filter
    );

    //return all the products
    return SuccessResponse(res, {
      statusCode: 200,
      message: "return all the products",
      payload: {
        products,
        pagination,
      },
    });
  } catch (error) {
    next(error);
  }
};

const GetSingleTemplateBySlug = async (req, res, next) => {
  try {
    const { slug } = req.params;

    //call the get product service with the slug
    const singleProduct = await GetTemplateService(slug);

    return SuccessResponse(res, {
      statusCode: 200,
      message: "return product by slug",
      payload: { singleProduct },
    });
  } catch (error) {
    next(error);
  }
};

const updateTemplateBySlug = async (req, res, next) => {
  try {
    const { title, description, category, quantity, brand, price, summary } =
      req.body;

    const { slug } = req.params;

    //checking if an image is uploaded with the request
    const image = req.file?.path;

    //creating an object with updated product data
    const updateObj = {
      title,
      description,
      category,
      quantity,
      brand,
      price,
      summary,
      slug,
      image,
    };

    //calling the update product service with the updated product data
    const updatedProduct = await UpdateTemplateService(updateObj);

    return SuccessResponse(res, {
      statusCode: 200,
      message: "update product successfully",
      payload: {
        updatedProduct,
      },
    });
  } catch (error) {
    next(error);
  }
};

const DeleteTemplateBySlug = async (req, res, next) => {
  try {
    const { slug } = req.params;

    //calling the update product service with the slug
    const deletedProduct = await DeleteTemplateService(slug);

    return SuccessResponse(res, {
      statusCode: 200,
      message: "delete product successfully",
      payload: { deletedProduct },
    });
  } catch (error) {}
};

export {
  CreateTemplateController,
  GetAllTemplate,
  GetSingleTemplateBySlug,
  DeleteTemplateBySlug,
  updateTemplateBySlug,
};
