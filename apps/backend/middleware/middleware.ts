import express from "express";

const middleware = express();

middleware.use(express.json());

export default middleware;
