import { Card } from "./Components/Card";

function App() {
  return (
    <>
      <div className="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="app">
        <h1>
          რომელი გირჩევნია?
          <p className="votes">ხმების რაოდენობა:5</p>
        </h1>
        <div className="card-page-wrapper">
          <Card question="აკონტროლო ორი ციყვი" />
          <Card question="გაიგო ყველაფრის მასა რასაც შეხედავ" />
        </div>
      </div>
    </>
  );
}

export default App;
