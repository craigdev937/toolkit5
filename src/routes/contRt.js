import express from "express";
import { HomeIndex } from "../controllers/contCon.js";

export const contRt = express.Router();
    contRt.get("/", HomeIndex);



