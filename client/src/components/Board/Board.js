import React from "react";

import CustomCard from "../CustomCard/CustomCard";
import "./Board.css";

const Board = ({ details, setUpdate }) => {
  return (
    <div className="content">
      {details.map((detail) => {
        return (
          <div className="details" key={detail._id}>
            <CustomCard
              id={detail._id}
              title={detail.title}
              info={detail.info}
              status={detail.status}
              setUpdate={setUpdate}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Board;
