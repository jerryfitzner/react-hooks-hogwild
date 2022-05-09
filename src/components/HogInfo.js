import React from "react";

const HogInfo = ({hog}) => {
  return(
    <div>
        <table border="1">
          <thead>
            <tr>
              <th>Specialty</th>
              <th>Weight</th>
              <th>Greased</th>
              <th>Medal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{hog.specialty}</td>
              <td>{hog.weight} lbs</td>
              <td>{hog.greased ? "Yes" : "No"}</td>
              <td>{hog["highest medal achieved"]}</td>
            </tr>
          </tbody>
        </table>
      </div>
  )
}

export default HogInfo;