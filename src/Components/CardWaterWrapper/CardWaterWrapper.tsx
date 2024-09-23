import { useState, useEffect } from "react";
import { Water } from "../Water";
import { io } from "socket.io-client";
import { removeDuplicates } from "../../utils/removeDuplicates";
import useGetIpAddress from "../../Hooks/useGetIpAddress";
import { useIpAddress } from "../../Hooks/useIpAddress";

import Card from "../Card/Card";

export function CardWaterWrapper() {
  const [showWater, setShowWater] = useState<boolean>(false);
  const [voteCount, setVoteCount] = useState<number>(0);

  useIpAddress();

  const { ip } = useGetIpAddress();

  const socket = io("http://localhost:4500");

  useEffect(() => {
    socket.on("sendVote", (currentVote) => {
      setVoteCount(currentVote);
    });
  }, [ip]);

  // useEffect(() => {
  //   if()
  // }, []);

  const handleCardClick = () => {
    if (removeDuplicates(ip).includes(ip[ip.length - 1].ipAddress.toString())) {
      setShowWater(true);
      socket.emit("updateVote");
    }
  };

  console.log(removeDuplicates(ip)[removeDuplicates(ip).length - 1]);

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
