import { useState, useEffect } from "react";
import { Water } from "../Water";
import { io } from "socket.io-client";
import Card from "../Card/Card";

export function CardWaterWrapper() {
  const [showWater, setShowWater] = useState<boolean>(false);
  const [voteCount, setVoteCount] = useState<number>(0);

  const socket = io("http://localhost:4500");

  useEffect(() => {
    socket.on("sendVote", (currentVote) => {
      setVoteCount(currentVote);
    });
  }, []);

  const handleCardClick = () => {
    setShowWater(true);
    socket.emit("updateVote");
  };

  return (
    <div className="app">
      <h1>
        <div className="votes">ხმების რაოდენობა:{`${voteCount}`}</div>
        რომელი გირჩევნია?
      </h1>
      <div className="card-page-wrapper">
        {!showWater && (
          <Card onClick={handleCardClick} question="აკონტროლო ორი ციყვი" />
        )}
        {showWater && <Water question="აკონტროლო ორი ციყვი" />}
        {!showWater && (
          <Card
            onClick={handleCardClick}
            question="გაიგო ყველაფრის მასა რასაც შეხედავ"
          />
        )}
        {showWater && <Water question="გაიგო ყველაფრის მასა რასაც შეხედავ" />}
      </div>
    </div>
  );
}

export default CardWaterWrapper;
