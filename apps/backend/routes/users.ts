import express from "express";
import {
  getUsers,
  createUser,
  deleteUserById,
} from "../controllers/usersController";

const router = express.Router();

router.get("/", getUsers);
router.post("/", createUser);
router.delete("/:id", deleteUserById);

export default router;
