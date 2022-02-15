import axios from "axios";
import { useState, useEffect } from "react";
import Snack from "./Snack";

function Snacks() {
  const API = process.env.REACT_APP_API_URL;
  const [snacks, setSnacks] = useState([]);

  useEffect(async () => {
    await axios
      .get(`${API}/snacks`)
      .then((response) => setSnacks(response.data.payload))
      .catch((error) => console.warn(error));
  }, [API]);

  return (
    <section className="Snacks">
      <article className="Snacks">
        {/* <table> */}
        {/* <thead>
            <tr>
              <th>SNACK</th>
              <th>FIBER</th>
              <th>PROTEIN</th>
              <th>ADDED SUGAR</th>
              <th>HEALTHY</th>
            </tr>
          </thead> */}
        {/* <tbody> */}
        {snacks.map((snack) => {
          return <Snack key={snack.id} snack={snack} />;
        })}
        {/* </tbody> */}
        {/* </table> */}
      </article>
    </section>
  );
}

export default Snacks;
