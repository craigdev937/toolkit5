import { Contacts } from "../models/Contacts.js";

class Contact {
    Create = async (req, res, next) => {
        try {
            const contact = new Contacts({
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone
            });
            await contact.save()
            .then((contact) => res.status(201).json(contact));
        } catch (error) {
            res.status(500).json({msg: error.message});
            next(error);
        }
    };

    FetchAll = async (req, res, next) => {
        try {
            await Contacts.find()
            .then((contacts) => res.json(contacts));
        } catch (error) {
            res.status(500).json({msg: error.message});
            next(error);
        }
    };
};

export const CONTACT = new Contact;





