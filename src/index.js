import React from "react";
import ReactDOM from "react-dom/client";
import {Greeting, UserCard} from './Greeting'
import Producto, {NavBar} from "./Product";

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <>
    <NavBar/>
    <Greeting />
    <Greeting />
    <UserCard/>
    <Producto/>
  </>
);
