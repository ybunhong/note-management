import express from "express";
import client from "./db/db"; // this is the database connection
import middleware from "./middleware/middleware";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(middleware);

//format collumn to camelCase because in database it use snake_case
function toCamelCase(row: any) {
  return {
    fullName: row.full_name,
    gender: row.gender,
  };
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app
  .get("/users", (req, res) => {
    // this is the database query
    client.query("SELECT * FROM users").then((result) => {
      res.send(result.rows.map(toCamelCase));
    });
  })
  .post("/users", (req, res) => {
    const { fullName, gender } = req.body;
    client
      .query("INSERT INTO users (full_name,gender) VALUES ($1,$2)", [
        fullName,
        gender,
      ])
      .then((result) => {
        res.send(result.rows.map(toCamelCase));
      });
  });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
