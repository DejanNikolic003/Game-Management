import { createCategory, deleteCategoryById, getAllCategories, getAllGamesByCategory } from "../models/Category.js";


export const createCategoryController = async (req, res) => {
    const { categoryName } = req.body;

    await createCategory(categoryName);

    res.redirect("/categories/");
};

export const getAllCategoriesController = async (req, res) => {
    const { rows } = await getAllCategories();

    res.render("categories/index", { categories: rows });
};

export const showCategoryGamesController = async (req, res) => {
    const { id } = req.params;
    const { rows } = await getAllGamesByCategory(Number(id));

    res.render("categories/show", { games: rows });
};

export const deleteCategoryController = async (req, res) => {
    const { id } = req.params;

    await deleteCategoryById(Number(id));

    res.redirect("/categories/");
};