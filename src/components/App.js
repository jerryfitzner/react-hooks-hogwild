import React, { useState } from "react";
import Nav from "./Nav";
import HogCards from "./HogCards";

import hogs from "../porkers_data";

function App() {
	const [sort, setSort] = useState("Name");
	const [hogsOrder, setHogOrder] = useState(hogs);
	const [isGreased, setGreased] = useState(true);
	
	const sortChange = (e) => {
    e.preventDefault();
    setSort(e.target.value);
  };

	

	const greased = () => {
		isGreased ? setGreased(false) : setGreased(true);
	};



	const hogOrder = hogsOrder
	.filter(hog => isGreased ? hog.greased : true)
	.sort((a, b) => {
		if(sort === "Weight") {
			return a.weight - b.weight
		}else{
			return a.name.localeCompare(b.name);
		}});

	
	

	return (
		<>
			<div className="App">
				<Nav sortChange={sortChange} greased={greased} isGreased={isGreased}/>
				<br></br>
			</div>
			<div className="ui grid container">
				<HogCards hogs={hogOrder} />
			</div>
		</>
	);
}

export default App;
