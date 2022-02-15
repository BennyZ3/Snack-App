import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";

function HeartHealth(snackHealth) {
  return (
    <>
      <img
        className="Heart"
        src={snackHealth ? heartSolid : heartOutline}
        alt={snackHealth ? "healthy food" : "unhealthy food"}
      />
    </>
  );
}

export default HeartHealth;
