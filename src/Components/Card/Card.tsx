import "./Card.scss";

export function Card({ question }: { question: string }) {
  return (
    <div className="back-pulse">
      <p className="card-text">{question}</p>
    </div>
  );
}

export default Card;
