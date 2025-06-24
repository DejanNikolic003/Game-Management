import { pool } from "../db/pool.js";

export const createCategory = async (name) => {
    await pool.query("INSERT INTO categories (name, banner_url) VALUES ($1, $2)", [name, "nincs"]);
};

export const getAllCategories = async () => {
    const rows = await pool.query("SELECT * FROM categories");

    return rows;
};  

export const deleteCategoryById = async (id) => {
    await pool.query("DELETE FROM categories WHERE id = ($1)", [id]);
}