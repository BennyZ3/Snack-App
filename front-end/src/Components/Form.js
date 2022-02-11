import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { request } from "express";

const Form = (isEdit = false) => {
  let navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;
  const id = request.params.id ? request.params.id : null;
  const [snack, setSnack] = useState({
    name: "",
    fiber: "",
    protein: "",
    added_sugar: "",
    is_healthy: false,
    image: "",
  });
  if (isEdit) {
    useEffect(() => {
      axios.get(`${API}/snacks/${id}`).then((response) => {
        setSnack(response.data);
      });
    }, [API, id]);
  }

  const handleChange = (event) => {
    if (event.target.id === "is_healthy") {
      setSnack({ ...snack, is_healthy: !snacks.is_healthy });
    } else {
      setSnack({ ...snack, [event.target.id]: event.target.value });
    }
  };

  const handleSubmit = (event) => {
    if (isEdit) {
      //put request function
      axios
        .put(`${API}/snacks/${id}`, snack)
        .then(() => {
          navigate(`/${id}`);
        })
        .catch((error) => console.warn(error));
    } else {
      //post request
      axios
        .post(`${API}/snacks/`, snack)
        .then(() => {
          navigate("/");
        })
        .catch((error) => console.warn(error));
    }
  };

  return <form></form>;
};
