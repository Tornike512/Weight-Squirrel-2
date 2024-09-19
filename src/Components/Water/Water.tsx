import "./Water.scss";

export function Water({ question }: { question: string }) {
  return (
    <>
      <div className="area">
        <p className="percentage">5%</p>
        <ul className="circles">
          <p className="question"> {question}</p>
        </ul>
      </div>
    </>
  );
}

export default Water;
