import { Router } from "express";
import { createCategoryController, deleteCategoryController, getAllCategoriesController, showCategoryGamesController } from "../controllers/CategoryController.js";

export const categoryRouter = Router();

categoryRouter.get("/", getAllCategoriesController);
categoryRouter.get("/:id", showCategoryGamesController);

categoryRouter.get("/create", (req, res) => res.render("categories/create"));
categoryRouter.post("/create", createCategoryController);

categoryRouter.post("/delete/:id", deleteCategoryController);