import express from "express";
import client from "./db/db"; // this is the database connection
import middleware from "./middleware/middleware";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(middleware);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/users", (req, res) => {
    // this is the database query
    client.query("SELECT * FROM users").then((result) => {
        res.send(result.rows);
    });
});

app.post("/users",(req,res)=>{
    const {fullName,gender}=req.body;
    client.query("INSERT INTO users (fullName,gender) VALUES ($1,$2)",[fullName,gender]).then((result)=>{
        res.send(result.rows);
    });
})

app.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`);
});