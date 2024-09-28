import { useState, useEffect } from "react";
import { Water } from "../Water";
import { io } from "socket.io-client";
import { removeDuplicates } from "../../utils/removeDuplicates";
import useGetIpAddress from "../../Hooks/useGetIpAddress";
import { useIpAddress } from "../../Hooks/useIpAddress";
import Card from "../Card/Card";
import { Loader } from "../Loader";

export function CardWaterWrapper() {
  const [showWater, setShowWater] = useState<boolean>(false);
  const [voteCount, setVoteCount] = useState<number>(0);
  const [redCount, setRedCount] = useState<number>(0);
  const [greenCount, setGreenCount] = useState<number>(0);
  const [loader, setLoader] = useState<boolean>(false);

  const { ip, apiLoaded } = useGetIpAddress();

  const socket = io("http://localhost:4500");

  const newUser: any = removeDuplicates(ip)[removeDuplicates(ip).length - 1];

  useEffect(() => {
    if (apiLoaded && removeDuplicates(ip).toString() === newUser) {
      setShowWater(true);
    }
  }, [showWater, newUser]);

  useEffect(() => {
    setLoader(true);
    socket.on("sendVote", (currentVote) => {
      setVoteCount(currentVote);
      setLoader(false);
    });
  }, [ip]);

  console.log(loader);

  useEffect(() => {
    socket.on("sendRed", (reds) => {
      setRedCount(reds);
    });
    socket.on("sendGreen", (greens) => {
      setGreenCount(greens);
    });
  }, []);

  const handleRedCardClick = () => {
    setShowWater(true);
    socket.emit("updateRed");
    socket.emit("updateVote");
    useIpAddress();
  };

  const handleGreenCardClick = () => {
    setShowWater(true);
    socket.emit("updateGreen");
    socket.emit("updateVote");
    useIpAddress();
  };

  const redPercent = (redCount * 100) / (redCount + greenCount);
  const greenPercent = (greenCount * 100) / (redCount + greenCount);

  return (
    <div className="app">
      <h1>
        <div className="votes">
          ხმების რაოდენობა:{loader ? <Loader /> : `${voteCount}`}
        </div>
        {showWater ? "შენ უკვე მიეცი ხმა" : "რომელი გირჩევნია?"}
      </h1>
      <div className="card-page-wrapper">
        {!showWater && (
          <Card onClick={handleRedCardClick} question="აკონტროლო ორი ციყვი" />
        )}
        {showWater && (
          <Water
            percentage={redPercent}
            loader={loader}
            question="აკონტროლო ორი ციყვი"
          />
        )}
        {!showWater && (
          <Card
            onClick={handleGreenCardClick}
            question="გაიგო ყველაფრის მასა რასაც შეხედავ"
          />
        )}
        {showWater && (
          <Water
            percentage={greenPercent}
            loader={loader}
            question="გაიგო ყველაფრის მასა რასაც შეხედავ"
          />
        )}
      </div>
    </div>
  );
}

export default CardWaterWrapper;
