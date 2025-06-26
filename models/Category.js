import { pool } from "../db/pool.js";

export const createCategory = async (name) => {
    await pool.query("INSERT INTO categories (name, banner_url) VALUES ($1, $2)", [name, "nincs"]);
};

export const getAllCategories = async () => {
    return await pool.query("SELECT * FROM categories");
};  

export const getAllGamesByCategory = async (id) => {
    return await pool.query("SELECT categories.id, categories.name, games.id, games.name, games.description FROM categories LEFT JOIN games ON categories.id = games.category_id WHERE categories.id = ($1)", [id]);
};

export const deleteCategoryById = async (id) => {
    await pool.query("DELETE FROM categories WHERE id = ($1)", [id]);
};