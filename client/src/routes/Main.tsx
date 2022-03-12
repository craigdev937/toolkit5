import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../components/Home";
import { Info } from "../components/Info";
import { AddEdit } from "../containers/AddEdit";
import { ToastContainer } from "react-toastify";

export const Main = (): JSX.Element => (
    <BrowserRouter>
        <React.Fragment>
            <ToastContainer />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add" element={<AddEdit />} />
                <Route path="/edit/:_id" element={<AddEdit />} />
                <Route path="/info/:_id" element={<Info />} />
            </Routes>
        </React.Fragment>
    </BrowserRouter>
);


