import { Router } from "express";
import { createCategoryController } from "../controllers/CategoryController.js";

export const categoryRouter = Router();

categoryRouter.get("/create", (req, res) => res.render("categories/create"));
categoryRouter.post("/create", createCategoryController);