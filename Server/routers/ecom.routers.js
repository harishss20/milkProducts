import express from "express";
import { getAllProduct } from "../controller/ecom.controller.js";

const eRouter = express.Router();

eRouter.get("/", getAllProduct);

export default eRouter;
