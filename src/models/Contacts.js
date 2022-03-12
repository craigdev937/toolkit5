import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    phone: { type: String },
});

export const Contacts = mongoose.model("Contacts", ContactSchema);


