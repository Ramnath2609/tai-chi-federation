import React from "react"
import { BrowserRouter } from "react-router-dom";
import Appbar from "../components/AppBar/Appbar";

export default function Routes() {
    return (
        <BrowserRouter>
            <Appbar />
        </BrowserRouter>
    )
}