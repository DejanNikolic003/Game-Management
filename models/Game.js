import { pool } from "../db/pool.js";

export const createGame = async (name, description, banner_url, category_id) => {
    await pool.query("INSERT INTO games (name, description, banner_url, category_id) VALUES ($1, $2, $3, $4)", [name, description, banner_url, category_id]);
};

export const getAllGames = async () => {
    return await pool.query("SELECT games.*, categories.id AS categoryId, categories.name AS categoryName FROM games INNER JOIN categories ON games.category_id = categories.id ORDER BY games.id ASC");
};

export const updateGame = async (id, name, description, banner_url, category_id) => {
    await pool.query("UPDATE games SET name = ($1), description = ($2), banner_url = ($3), category_id = ($4) WHERE id = ($5)", [name, description, banner_url, category_id, id]);
};

export const deleteGame = async (id) => {
    await pool.query("DELETE FROM games WHERE id = ($1)", [id]);
};

export const findGameById = async (id) => {
    return await pool.query("SELECT games.*, categories.id AS categoryId, categories.name AS categoryName FROM games INNER JOIN categories ON games.category_id = categories.id WHERE games.id = ($1)", [id]);
};