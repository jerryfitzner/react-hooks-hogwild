import react, { useState } from "react";
import HogInfo from "./HogInfo"

const HogCards = ({hogs}) => {
  const [isInfo, setInfo] = useState(true);

  // const displayInfo = () => <HogInfo hog={hog}/>;

  const hogCards = hogs.map((hog) => (
    <div 
    key={hog.weight} 
    className="ui eight wide column" 
    style={{border: "2px solid black"}} 
    onClick={(e) => isInfo ? setInfo(false) : setInfo(true) }>
      <div>
        <img src={hog.image} alt="Pig" width="300" />
        <h3>{hog.name}</h3>
      </div>
      {isInfo ? <HogInfo hog={hog}/> : null}
		</div>
  ));

  return (
    hogCards
  )
}

export default HogCards;