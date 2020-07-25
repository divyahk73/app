import React from "react";

function ListDateAvailable(props) {
  return (
    <div className="mx-auto py-2" style={{ width: "300px" }}>
      <ul className="list-group">
        <li className="list-group-item">start time: {props.item.start_time}</li>
        <li className="list-group-item">end time: {props.item.end_time}</li>
      </ul>
    </div>
  );
}
export default ListDateAvailable;
