import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
	const [dogImage, setDogImage] = useState("");
	const getDogImage = () => {
		fetch("https://dog.ceo/api/breeds/image/random")
			.then((response) => response.json())
			.then((data) => setDogImage(data.message))
			.catch((error) => console.error("Error fetching data:", error));
	};
	useEffect(getDogImage, []);
	return (
		<div>
			<h1>Random Dog Image</h1>
			{dogImage && <img src={dogImage} alt="Random Dog" />}
		</div>
	);
}
export default App;
