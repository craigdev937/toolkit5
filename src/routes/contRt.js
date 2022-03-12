import express from "express";
import { CONTACT } from "../controllers/contCon.js";

export const contRt = express.Router();
    contRt.post("/", CONTACT.Create);
    contRt.get("/", CONTACT.FetchAll);
    contRt.get("/:id", CONTACT.GetOne);
    contRt.put("/:id", CONTACT.Update);
    contRt.delete("/:id", CONTACT.Delete);



