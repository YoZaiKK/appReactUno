import { Gi3DHammer } from "react-icons/gi";

export const Posts = () => {
	return (
		<>
			<button
				onClick={() => {
					fetch("https://rickandmortyapi.com/api/character")
						.then((response) => response.json())
						.then((data) => {
              // data.results.map(chraracter =>{
              //   return <>
              //     <h1>{chraracter.name}</h1>
              //   </>
              // })
              console.log(data)
            })
						.catch((err) => console.log(err));
				}}
			>
				<Gi3DHammer />
				Traer Datos
			</button>
		</>
	);
};
