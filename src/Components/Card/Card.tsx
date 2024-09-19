import { useEffect } from "react";
import { useIpAddress } from "../../Hooks/useIpAddress";

import "./Card.scss";

export function Card({
  question,
  onClick,
}: {
  question: string;
  onClick: () => void;
}) {
  useEffect(() => {
    useIpAddress();
  }, []);

  return (
    <button onClick={onClick} className="back-pulse">
      <p className="card-text">{question}</p>
    </button>
  );
}

export default Card;
