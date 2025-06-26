import { getAllCategories } from "../models/Category.js";
import { createGame, deleteGame, findGameById, getAllGames, updateGame } from "../models/Game.js";

export const getAllGamesController = async (req, res) => {
    const { rows } = await getAllGames();
    const categories = await loadCategories();


    res.render("games/index", { games: rows, categories: categories, isEditing: false });
};

export const createGameController = async (req, res) => {
    const { title, description, categories } = req.body;

    await createGame(title, description, "nincs", categories);

    res.redirect("/games/");
};

export const editGameControlller = async (req, res) => {
    const { id } = req.params;
    const { rows } = await findGameById(id);

    const allGames = await getAllGames();
    const categories = await loadCategories();


    res.render("games/index", { games: allGames.rows, categories: categories, isEditing: true, game: rows[0] });
};

export const updateGameControlller = async (req, res) => {
    const { title, description, categories } = req.body;
    const { id } = req.params;

    await updateGame(Number(id), title, description, "none", Number(categories));

    res.redirect("/games/");
};

export const deleteGameController = async (req, res) => {
    const { id } = req.params;

    await deleteGame(id);

    res.redirect("/games/");
};

export const showGameController = async (req, res) => {
    const { id } = req.params;
    const { rows } = await findGameById(id);

    res.render("games/show", { game: rows[0] });
};

const loadCategories = async () => {
    const { rows } = await getAllCategories();

    return rows;
};