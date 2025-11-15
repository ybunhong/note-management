import client from "../db/db";
import { toCamelCase } from "../utils/format";
import { Request, Response } from "express";

//get all notes
export const getNotes = async (req: Request, res: Response) => {
  try {
    const result = await client.query("SELECT * FROM notes");
    res.json(result.rows);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

//create note
export const createNote = async (req: Request, res: Response) => {
  const { title, description } = req.body;
  try {
    const result = await client.query(
      "INSERT INTO notes (title,description) VALUES ($1,$2) RETURNING *",
      [title, description]
    );
    console.log(result);
    res.json(result.rows[0]);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

// delete note
export const deleteNote = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await client.query("DELETE FROM notes WHERE ($1)", [id]);
    console.log(result);
    res.json(result.rows[0]);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
