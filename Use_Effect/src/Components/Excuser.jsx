import React, { useState, useEffect } from "react";
const categories = ["Family", "Office", "Children", "College", "Party", "Funny", "Unbelievable", "Developers", "Gaming"]
function Excuser() {
	const [excuse, setExcuse] = useState("");
	const getExcuses = () => {
		fetch("https://excuser-three.vercel.app/v1/excuse")
			.then((response) => response.json())
			.then((data) => setExcuse(data[0].excuse))
			.catch((error) => console.error("Error fetching data:", error));
	};
	useEffect(getExcuses, []);
	return (
		<div>
			<h1>Random Excuse</h1>
			{excuse && <p>Excusa random: {excuse}</p>}
			<div>
				<button onClick={getExcuses}>Get Excuse</button>
				<select onChange={(e)=>getExcuses(e.target.value)}>
					{categories.map((category)=>{
						return <option key={category} value={category}>{category}</option>
					})}
				</select>
			</div>
		</div>
	);
}
export default Excuser;
