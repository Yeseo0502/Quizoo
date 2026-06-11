import { useNavigate } from "react-router-dom";
import "./AnimalCard.css";

function AnimalCard({ animal }) {
  const navigate = useNavigate();

  return (
    <div className="animal-card" onClick={()=>navigate(`/dogam/${animal.id}`)}>
      <img className="animal-card-img" src={animal.image} alt={animal.name} />
      <div className="animal-card-info">
        <p className="animal-card-name">{animal.name}</p>
      </div>
    </div>
  );
}

export default AnimalCard;