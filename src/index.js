import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from "./Button";
import {Greeting, UserCard} from './Greeting'
import Producto, {NavBar} from "./Product";
import { TaskCard } from "./Task";

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <>
    <NavBar/>
    <Greeting />
    <Greeting />
    <UserCard/>
    <Producto/>
    <Button text="Hello"/>
    <TaskCard/>
  </>
);
