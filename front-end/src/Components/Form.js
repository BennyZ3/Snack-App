import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Form = (isEdit = false) => {
  let navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;
  let params = useParams();
  const id = params.id ? params.id : null;
  const [snack, setSnack] = useState({
    name: "",
    fiber: "",
    protein: "",
    added_sugar: "",
    is_healthy: false,
    image: "",
  });
  useEffect(() => {
    if (isEdit.isEdit) {
      axios.get(`${API}/snacks/${id}`).then((response) => {
        setSnack(response.data.payload);
      });
    } else {
      setSnack({ ...snack });
    }
  }, [API, id, isEdit]);

  const handleChange = (event) => {
    if (event.target.id === "is_healthy") {
      setSnack({ ...snack, is_healthy: !snack.is_healthy });
    } else {
      setSnack({ ...snack, [event.target.id]: event.target.value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isEdit.isEdit) {
      //put request function
      axios
        .put(`${API}/snacks/${id}`, snack)
        .then(() => {
          navigate(`/snacks`);
        })
        .catch((error) => console.warn(error));
    } else {
      //post request
      axios
        .post(`${API}/snacks`, snack)
        .then(() => {
          navigate("/snacks");
        })
        .catch((error) => console.warn(error));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label for="name">Name:</label>
      <input
        required
        id="name"
        name="name"
        type="text"
        value={snack.name}
        onChange={handleChange}
        placeholder="name"
      />
      <label for="fiber">Fiber:</label>
      <input
        id="fiber"
        name="fiber"
        type="number"
        value={snack.fiber}
        onChange={handleChange}
        placeholder="fiber"
      />
      <label for="protein">Protein:</label>
      <input
        id="protein"
        name="protein"
        type="number"
        value={snack.protein}
        onChange={handleChange}
        placeholder="protein"
      />
      <label for="added_sugar">Added Sugars:</label>
      <input
        id="added_sugar"
        name="added_sugar"
        type="number"
        value={snack.added_sugar}
        onChange={handleChange}
        placeholder="added_sugar"
      />
      <label for="is_healthy">Is it Healthy:</label>
      <input
        id="is_healthy"
        name="is_healthy"
        type="checkbox"
        checked={snack.is_healthy}
        onChange={handleChange}
        placeholder="is_healthy"
      />
      <label for="image">Image:</label>
      <input
        id="image"
        name="image"
        type="text"
        value={snack.image}
        onChange={handleChange}
        placeholder="image"
      />
      <button handleSubmit={handleSubmit}>Submit</button>
    </form>
  );
};

export default Form;
