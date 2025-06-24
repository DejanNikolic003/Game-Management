import { pool } from "../db/pool.js";

export const createCategory = async (name) => {
    await pool.query("INSERT INTO categories (name, banner_url) VALUES ($1, $2)", [name, "nincs"]);
};