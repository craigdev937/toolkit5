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

    GetOne = async (req, res, next) => {
        try {
            await Contacts.findById(req.params.id)
            .then((contact) => res.status(200).json(contact));
        } catch (error) {
            res.status(500).json({msg: error.message});
            next(error);
        }
    };

    Update = async (req, res, next) => {
        try {
            await Contacts.findByIdAndUpdate(req.params.id)
                .then((contact) => {
                    contact.name = req.body.name,
                    contact.email = req.body.email,
                    contact.phone = req.body.phone,
                    contact.save()
                    .then(() => res.json(contact));
                })
        } catch (error) {
            res.status(500).json({msg: error.message});
            next(error);
        }
    };

    Delete = async (req, res, next) => {
        try {
            await Contacts.findByIdAndDelete(req.params.id)
            .then(() => res.status(200)
            .json("The Contact was Deleted!"));
        } catch (error) {
            res.status(500).json({msg: error.message});
            next(error);
        }
    };
};

export const CONTACT = new Contact;





