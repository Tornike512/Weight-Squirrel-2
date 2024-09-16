import "./Water.scss";

export function Water({ question }: { question: string }) {
  return (
    <>
      <div className="area">
        {question}
        <p className="percentage">5%</p>
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
}

export default Water;
