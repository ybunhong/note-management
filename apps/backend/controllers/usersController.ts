import client from "../db/db";
import { Request, Response } from "express";
import { toCamelCase } from "../utils/format";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await client.query("SELECT * FROM users");
    res.json(result.rows.map(toCamelCase));
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

export const createUser = async (req: Request, res: Response) => {
  const { fullName, gender } = req.body;
  try {
    const result = await client.query(
      "INSERT INTO users (full_name, gender) VALUES ($1, $2) RETURNING *",
      [fullName, gender]
    );
    res.json(result.rows.map(toCamelCase)[0]);
  } catch (err) {
    res.status(500).json({ error: "Failed to create user" });
  }
};
