import "./Water.scss";

export function Water({
  question,
  percentage,
}: {
  question: string;
  percentage: number;
}) {
  return (
    <>
      <div className="area">
        <p className="percentage">{percentage.toFixed()}%</p>
        <ul className="circles">
          <p className="question"> {question}</p>
        </ul>
      </div>
    </>
  );
}

export default Water;
