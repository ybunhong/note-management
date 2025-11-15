import express from "express";
import {
  deleteNote,
  getNotes,
  createNote,
} from "../controllers/notesController";

const router = express.Router();

router.get("/", getNotes);
router.post("/", createNote);
router.delete("/:id", deleteNote);

export default router;
