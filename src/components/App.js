import React from "react";
import Nav from "./Nav";
import { useState } from "react";

import hogs from "../porkers_data";


function App() {

const [porkers, setPorkers] = useState(hogs);
const [weight, setWeight] = useState(hogs);

function handleClick(e) {
	e.preventDefault();
	setPorkers(hogs);
}


function filterPorkers(porkers, search) {
	if (search === "") {
		return porkers;
	}
	const filteredPorkers = porkers.filter((porker) => {
		return porker.name.toLowerCase().includes(search.toLowerCase());
	});
	return filteredPorkers;
}

const filterPorkersByWeight = (porkers, weight) => {
	if (weight === "") {
		return porkers;
	}
	const filteredPorkers = porkers.filter((porker) => {
		return porker.weight.toLowerCase().includes(weight.toLowerCase());
	});
	return filteredPorkers;
};

	function handleSearch(e) {
		e.preventDefault();
		const search = e.target.value;
		setPorkers(filterPorkers(porkers, search));

	}

	function handleWeightSearch(e) {
		e.preventDefault();
		const weight = e.target.value;
		setPorkers(filterPorkersByWeight(porkers, weight));

	}

	return (
		<div className="App">
			<Nav />
			<div className="search-wrapper">
				<input type="text" onChange={handleSearch} placeholder="Search..." />
				<input type="text" onChange={handleWeightSearch} placeholder="Weight..." />
			</div>
			<div className="porkers" >
				{porkers.map((hog, index) => (
					<div key={index} className="porker">
							<img className="porker-image" onClick={handleClick} src={hog.image} alt={hog.name} />
							<div className="porker-info">
								<p>{hog.name}</p>
								<p>{hog.specialty}</p>
								<p>Weight: {hog.weight}</p>
							</div>
						<div className="porker-image">
					  </div>
					</div>
				))}
			</div>
			{porkers.length === 0 && <div className="no-porkers">No Porkers Found</div>}
		</div>
	);
}

export default App;
