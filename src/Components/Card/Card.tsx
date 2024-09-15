import { Water } from "../Water";

import "./Card.scss";

export function Card({ question }: { question: string }) {
  return (
    <div className="back-pulse">
      <p className="card-text">{question}</p>
      <Water />
    </div>
  );
}

export default Card;
