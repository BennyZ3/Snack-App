import { Link } from "react-router-dom";

function Snack({ snack }) {
  return (
    <tr>
      <td>
        <Link to={`/snacks/${snack.id}`}>{snack.name}</Link>
      </td>
      <td>{snack.fiber}</td>
      <td>{snack.protein}</td>
      <td>{snack.added_sugar}</td>
    </tr>
  );
}

export default Snack;
