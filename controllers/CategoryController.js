import { createCategory, deleteCategoryById, getAllCategories } from "../models/Category.js";


export const createCategoryController = async (req, res) => {
    const { categoryName } = req.body;

    await createCategory(categoryName);

    res.redirect("/categories/");
};

export const getAllCategoriesController = async (req, res) => {
    const { rows } = await getAllCategories();

    res.render("categories/index", { categories: rows });
};

export const deleteCategoryController = async (req, res) => {
    const { id } = req.params;

    await deleteCategoryById(Number(id));

    res.redirect("/categories/");
}