import React from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";

function App() {

	return (
		<div className="App">
			<Nav />
			<div className="porkers">
				{hogs.map((hog, index) => (
					<div key={index} className="porker">
						<div className="porker-name">{hog.name}</div>
						<div className="porker-hogs">{hog.hogs}</div>
						<div className="porker-price">{hog.price}</div>
						<div className="porker-image">
							<img className="porker-image-img" src={hog.image} alt={hog.name} />
						</div>
					</div>
				))}
			</div>	
		</div>
	);
}

export default App;
