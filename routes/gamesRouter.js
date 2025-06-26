import { Router } from "express";
import { getAllGamesController, createGameController, deleteGameController, editGameControlller, updateGameControlller, showGameController } from "../controllers/GamesController.js";

export const gameRouter = Router();

gameRouter.get("/", getAllGamesController);
gameRouter.post("/create", createGameController);

gameRouter.get("/:id", showGameController);

gameRouter.get("/edit/:id", editGameControlller)
gameRouter.post("/edit/:id", updateGameControlller)

gameRouter.post("/delete/:id", deleteGameController);