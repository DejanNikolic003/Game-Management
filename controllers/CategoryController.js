import { createCategory } from "../models/Category.js";


export const createCategoryController = async (req, res) => {
    const { categoryName } = req.body;

    await createCategory(categoryName);

    res.redirect("/categories/create");
};