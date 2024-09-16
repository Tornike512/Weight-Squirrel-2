import { useState } from "react";
import { Water } from "../Water";
import Card from "../Card/Card";

export function CardWaterWrapper() {
  const [showWater, setShowWater] = useState<boolean>(false);

  const handleCardClick = () => {
    setShowWater(true);
  };

  return (
    <div className="app">
      <h1>
        რომელი გირჩევნია?
        <p className="votes">ხმების რაოდენობა:5</p>
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
