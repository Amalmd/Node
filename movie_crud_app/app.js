import express from "express";
import { MoviesRouter } from "./routes/movies.route.js";

const app = express();
const PORT = 6000;

app.use(express.json());
app.use("/api", MoviesRouter);
app.listen(PORT, console.log("Server is on " + PORT));
