import spinner from "../assets/loading.gif";

function Spinner() {
  return (
    <div className="loading">
      <img
        width={160}
        className="loading__image"
        src={spinner}
        alt="Loading..."
      />
    </div>
  );
}

export default Spinner;
