import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import HeartHealth from "../Components/HeartHealth";

const Details = () => {
  console.log("details");
  const API = process.env.REACT_APP_API_URL;
  const [snacks, setSnacks] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/snacks/${params.id}`)
      .then((response) => setSnacks(response.data.payload))
      .catch((error) => console.warn(error));
  }, [API, params.id]);

  const handleDelete = () => {
    axios.delete(`${API}/snacks/${params.id}`).then(
      () => {
        console.log("deleted");
        navigate("/snacks");
      },
      (error) => console.warn(error)
    );
  };
  return (
    <article className="details">
      <aside>{HeartHealth(snacks.is_healthy)}</aside>
      <h2>Nutritional Facts</h2>
      <div>Protein: {snacks.protein}</div>
      <div>Fiber: {snacks.fiber}</div>
      <div>Added Sugar: {snacks.added_sugar}</div>
      {/* <p>Is it Healthy: {snacks.is_healthy}</p> */}
      <div>
        <img src={`${snacks.image}`} alt={snacks.name} />
      </div>

      <Link to={`/snacks/${params.id}/edit`}>
        <button>Edit</button>
      </Link>
      <Link to={`/snacks`}>
        <button>Back</button>
      </Link>
      <button onClick={handleDelete}>Delete</button>
    </article>
  );
};

export default Details;
