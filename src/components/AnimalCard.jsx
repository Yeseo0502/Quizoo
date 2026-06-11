import "./AnimalCard.css";

function AnimalCard({ animal }) {
  return (
    <div className="animal-card">
      <img className="animal-card-img" src={animal.image} alt={animal.name} />
      <div className="animal-card-info">
        <p className="animal-card-name">{animal.name}</p>
      </div>
    </div>
  );
}

export default AnimalCard;