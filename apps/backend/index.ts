import express from "express";
import cors from "cors";
import middleware from "./middleware/middleware";
import usersRouter from "./routes/users";
import notesRouter from "./routes/notes";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(middleware);

app.use("/users", usersRouter);
app.use("/notes", notesRouter);

app.get("/", (req, res) => {
  res.send("Hello Worlds!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
