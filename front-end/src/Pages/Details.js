import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Snack from "../Components/Snack";

const Details = () => {
  console.log("details");
  const API = process.env.REACT_APP_API_URL;
  const [snacks, setSnacks] = useState([]);
  const params = useParams();

  useEffect(() => {
    axios
      .get(`${API}/snacks/${params.id}`)
      .then((response) => setSnacks(response.data.payload))
      .catch((error) => console.warn(error));
  }, [API, params.id]);
  return (
    <div className="details">
      <h2>Nutritional Facts</h2>
      <Snack key={snacks.id} snack={snacks} />
      <p>Is it Healthy: {snacks.is_healthy}</p>
      <img src={`${snacks.image}`} />
      <Link to={`/${params.id}/edit`}>
        <button>Edit</button>
      </Link>
    </div>
  );
};

export default Details;
