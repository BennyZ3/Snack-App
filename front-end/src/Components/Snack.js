import { Link } from "react-router-dom";
import HeartHealth from "./HeartHealth";

function Snack({ snack }) {
  return (
    <div className="Snack">
      <Link to={`/snacks/${snack.id}`}>
        <div>
          <img src={snack.image} />
        </div>
        <h4>
          {HeartHealth(snack.is_healthy)}
          {snack.name}
        </h4>
        {/* <h4>{HeartHealth(snack.is_healthy)}</h4> */}
      </Link>
      {/* <div>{snack.fiber}</div>
      <div>{snack.protein}</div>
      <div>{snack.added_sugar}</div> */}
      {/* <div>
        <Link to={`/snacks/${snack.id}`}>
          <h4>
            <img
              src={HeartHealth(snack.is_healthy)}
              alt={snack.is_healthy ? "healthy food" : "unhealthy food"}
            />
          </h4>
        </Link>
      </div> */}
    </div>
  );
}

export default Snack;
