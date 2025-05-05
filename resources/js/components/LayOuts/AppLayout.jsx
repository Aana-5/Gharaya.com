import React from "react";
import {Header} from "./Header";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {

    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    );
}