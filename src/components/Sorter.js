import React from "react";

const Sorter = ({sortChange}) => {

  

  return(
    <div>
      <label>
        Sort By:
        <select name="category" onChange={sortChange}>
          <option>Name</option>
          <option>Weight</option>
        </select>
      </label>
    </div>
  )
}

export default Sorter;