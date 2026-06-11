function AnimalCard({ animal }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "12px",
      overflow: "hidden",
      width: "160px",
      textAlign: "center",
      cursor: "pointer"
    }}>
      <img src={animal.image} alt={animal.name}
           style={{ width: "100%", height: "130px", objectFit: "cover" }} />
      <div style={{ padding: "8px" }}>
        <p style={{ fontWeight: "bold" }}>{animal.name}</p>
      </div>
    </div>
  );
}

export default AnimalCard;