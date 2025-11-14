import express from "express";
import client from "./db/db"; // this is the database connection

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/notes", (req, res) => {
    // this is the database query
    client.query("SELECT * FROM users").then((result) => {
        res.send(result.rows);
    });
});

app.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`);
});