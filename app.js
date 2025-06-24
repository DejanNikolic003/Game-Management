import express from "express";
import path from "node:path";
import "dotenv/config";
import { categoryRouter } from "./routes/categoryRouter.js";

const app = express();
const PORT = process.env.PORT || 3030;

const __dirname = path.resolve();

const assetsPath = path.join(__dirname, "public");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(assetsPath));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => res.render("index"));

app.use("/categories", categoryRouter);

app.listen(PORT, () => {
    console.log(`Application is running on http://localhost:${PORT}`);
});