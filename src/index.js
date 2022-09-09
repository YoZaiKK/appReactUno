import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Posts } from "./Posts";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Contador() {
	const [mensaje, setMensaje] = useState("");
	const [texto, setTexto] = useState("");

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
		</>
	);
}

root.render(
	<>
		<Contador />
		<Posts />
	</>
);
