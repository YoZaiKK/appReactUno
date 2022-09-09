import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Posts } from "./Posts";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Contador() {
	const [mensaje, setMensaje] = useState("");
	const [texto, setTexto] = useState("");
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		console.log("render");
	}, [texto]);

	return (
		<>
			<p>Hola{mensaje !== "" ? " " + mensaje : "!"}</p>
			<input onChange={(e) => setMensaje(e.target.value)} />
			<button
				onClick={() => {
					setTexto(mensaje);
				}}
			>
				Save
			</button>
			<p>{texto !== "" ? " " + texto : ""}</p>
			<hr />
      <h1>Counter: {counter}</h1>
			<button onClick={ () => {
        setCounter(counter+1)
      }}>Incremtentar</button>
		</>
	);
}

root.render(
	<>
		<Contador />
		<Posts />
	</>
);
