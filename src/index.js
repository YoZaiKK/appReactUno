import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Greeting() {
  const condicional = false;
  return <h1>{condicional ? "Hello my people :D" : "Negativo pareja"}</h1>;
}
root.render(
  <div>
    <Greeting />
    <Greeting />
  </div>
);
