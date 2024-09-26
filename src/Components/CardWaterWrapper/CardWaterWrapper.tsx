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

  const { ip, apiLoaded } = useGetIpAddress();

  const socket = io("http://localhost:4500");

  const newUser: any = removeDuplicates(ip)[removeDuplicates(ip).length - 1];

  useEffect(() => {
    if (apiLoaded && removeDuplicates(ip).toString() === newUser) {
      setShowWater(true);
    }
  }, [showWater, newUser]);

  useEffect(() => {
    socket.on("sendVote", (currentVote) => {
      setVoteCount(currentVote);
    });
  }, [ip]);

  const handleCardClick = () => {
    setShowWater(true);
    socket.emit("updateVote");
    useIpAddress();
  };

  return (
    <div className="app">
      <h1>
        <div className="votes">ხმების რაოდენობა:{`${voteCount}`}</div>
        {showWater ? "შენ უკვე მიეცი ხმა" : "რომელი გირჩევნია?"}
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
