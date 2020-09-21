import React, { useState } from "react";
import Housemate from "./Housemate";

//The Housemates
const staticHousemates = [
  {
    name: "Dorathy",
    picture: "https://dailypost.ng/wp-content/uploads/2020/08/Dorathy-1.jpg",
    votes: 0,
    id: 1
  },
  {
    id: 2,
    name: "Ozo",
    votes: 0,
    picture:
      "https://scontent.fabv2-1.fna.fbcdn.net/v/t1.0-9/110161165_1150928051973512_5031557519512403774_o.jpg?_nc_cat=111&_nc_sid=dd9801&_nc_ohc=4FXuo0DJ2AEAX8avFNS&_nc_ht=scontent.fabv2-1.fna&oh=fdc7bc48961cf7042368df6738f6318d&oe=5F8A6493"
  },
  {
    id: 3,
    name: "Kiddwaya",
    votes: 0,
    picture:
      "https://i1.wp.com/media.premiumtimesng.com/wp-content/files/2020/08/Screenshot-270-e1597078639510.png?fit=566%2C561&ssl=1"
  },
  {
    id: 4,
    name: "Laycon",
    votes: 0,
    picture:
      "https://ichef.bbci.co.uk/news/1024/branded_pidgin/8C52/production/_113522953_oda11.jpg"
  }
];

export default function Voting() {
  //Total No of Available Votes
  const maximumVotes = 10;

  //Setting State for the Total no of votes
  const [vote, setVote] = useState(maximumVotes);

  //Function for mapping the Housemate details
  const HouseMate = staticHousemates.map((mates) => (
    <div key={mates.id} className="col-md-6">
      <Housemate
        housemate={mates} // props passed down to the Housemate component
        onVote={() => upVote(mates)}
        downVote={() => downVote(mates)}
      />
    </div>
  ));

  //Votes remaining - Available no of votes remaining
  const percentageOfVoteRemaining = () => {
    const percentage = (vote / maximumVotes) * 100;
    return Math.floor(percentage);
  };

  //Function for the add '+' button
  const upVote = (mates) => {
    if (vote > 0) {
      setVote(vote - 1);
      mates.votes = mates.votes + 1;
    }
  };
  //Function for the subtract button '-'
  const downVote = (mates) => {
    if (vote < 10) {
      setVote(vote + 1);
    }
  };

  return (
    <div className="voting">
      <section className="voting__box">
        <h1 className="voting__box__title">My Available Votes</h1>
        <h2 className="voting__box__numbers"> {vote} </h2>
        <div className="voting__box__progressBar ">
          <div
            className={`progress length-${percentageOfVoteRemaining()}`}
          ></div>
        </div>
      </section>

      <section className="home__votes">
        <div className="row">{HouseMate}</div>

        <div className="mt-5 d-flex-column flex-justify-center text-center">
          <button>View Leaderboard</button>
          <h4 className="mt-4 text-red">*Finish the votes</h4>
        </div>
      </section>
    </div>
  );
}
