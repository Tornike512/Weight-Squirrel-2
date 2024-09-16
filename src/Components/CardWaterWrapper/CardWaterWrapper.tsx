import Card from "../Card/Card";
import { Water } from "../Water";

export function CardWaterWrapper() {
  return (
    <div className="app">
      <h1>
        რომელი გირჩევნია?
        <p className="votes">ხმების რაოდენობა:5</p>
      </h1>
      <div className="card-page-wrapper">
        {/* <Card question="აკონტროლო ორი ციყვი" /> */}
        <Water question="აკონტროლო ორი ციყვი" />
        {/* <Card question="გაიგო ყველაფრის მასა რასაც შეხედავ" /> */}
        <Water question="გაიგო ყველაფრის მასა რასაც შეხედავ" />
      </div>
    </div>
  );
}

export default CardWaterWrapper;
