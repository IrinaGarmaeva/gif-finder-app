import spinner from "../assets/loading.gif";

function Spinner() {
  return (
    <div className="loading">
      <img
        width={180}
        className="loading__img"
        src={spinner}
        alt="Loading..."
      />
    </div>
  );
}

export default Spinner;
