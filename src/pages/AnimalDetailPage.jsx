import { useParams, useNavigate } from "react-router-dom";
import animals from "../data/animals";
import "./AnimalDetailPage.css";

function AnimalDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const animal = animals.find((a) => a.id === Number(id));

  if (!animal) return <p>동물을 찾을 수 없어요.</p>;
  const getZooLink = (zooName) => {
    return `https://map.naver.com/p/search/${encodeURIComponent(zooName)}`;
  };
  return (
    <div className="detail-container">
      <button className="detail-back-btn" onClick={() => navigate("/dogam")}>
        ← 뒤로
      </button>

      <div className="detail-content">
        {/* 왼쪽 사진 */}
        <img className="detail-img" src={animal.image} alt={animal.name} />

        {/* 오른쪽 설명 */}
        <div className="detail-info">
          <h2 className="detail-name">{animal.name}</h2>
          <p className="detail-desc1">{animal.description1}</p>
          <p className="detail-desc2">{animal.description2}</p>
          <p className="detail-zoo">
            🏛️ 동물원 :
            <br />
            {animal.zoo.map((zoo, index) => (
              <a key={index} href={getZooLink(zoo)} target="_blank" rel="noopener noreferrer">
                {zoo}
              </a>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AnimalDetailPage;
