import React from "react";

export default function Leaderboard({ housemate }) {
  return (
    <div className="col-3">
      <img src={housemate.picture} alt={housemate.name} />
    </div>
  );
}
