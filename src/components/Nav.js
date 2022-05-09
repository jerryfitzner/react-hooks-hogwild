import React, { useState } from "react";
import piggy from "../assets/porco.png";
import Sorter from "./Sorter";

const Nav = ({sortChange, greased, isGreased}) => {
	



	return (
		<div className="navWrapper">
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
			<br></br>
			<Sorter sortChange={sortChange}/>
			<br></br>
			<button onClick={greased}>
				{isGreased ? "Show Greased Hogs Only" : "Show Ungreased & Greased Hogs"}
			</button>
		</div>
	);
};

export default Nav;
