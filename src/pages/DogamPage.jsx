import { useState } from "react";
import Header from "../components/Header";
import AnimalCard from "../components/AnimalCard";
import animals from "../data/animals";
import "./DogamPage.css";

//동물 도감페이지 /dogam

function DogamPage() {
  const [search, setSearch] = useState("");

  const filtered = animals.filter(animal =>
    animal.name.includes(search)
  );

  return (
    <div>
      <div className="dogam-header">
        <Header />
        <input
          className="dogam-search"
          type="text"
          placeholder="동물 검색..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <div className="dogam-grid">
        {filtered.map(animal => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
}

export default DogamPage;