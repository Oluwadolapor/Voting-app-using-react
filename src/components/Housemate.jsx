import React, { useState } from "react";

export default function Housemate({ housemate, onVote, downVote }) {
  //State for each housemate vote
  const [votes, setVotes] = useState(housemate.votes);

  return (
    <div className="housemate">
      <div className="row">
        <div className="col-3">
          <img src={housemate.picture} alt={housemate.name} />
        </div>
        <div className="col-9">
          <h5 className="housemate__name"> {housemate.name} </h5>
          <div className="housemate__vote">
            <button
              onClick={() => downVote()}
              className="housemate__vote__control"
            >
              -
            </button>
            <div className="housemate__vote__divider" />
            <input
              type="text"
              className="housemate__vote__count"
              value={votes}
              onChange={(e) => setVotes(e.target.value)}
            />

            <div className="housemate__vote__divider" />
            <button
              onClick={() => onVote()}
              className="housemate__vote__control"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
