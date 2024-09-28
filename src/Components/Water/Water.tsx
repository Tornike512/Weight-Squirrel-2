import { Loader } from "../Loader";

import "./Water.scss";

export function Water({
  question,
  percentage,
  loader,
}: {
  question: string;
  percentage: number;
  loader: boolean;
}) {
  return (
    <>
      <div className="area">
        <p className="percentage">
          {loader ? <Loader /> : `${percentage.toFixed()}%`}
        </p>

        <ul className="circles">
          <p className="question"> {question}</p>
        </ul>
      </div>
    </>
  );
}

export default Water;
