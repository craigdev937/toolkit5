import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
    _id: { type: String },
    name: { type: String },
    email: { type: String },
    phone: { type: String },
});

export const Contacts = mongoose.model("Contacts", ContactSchema);


