import { useNavigate } from "react-router-dom";
import "./MainPage.css";

function MainPage() {
  const navigate = useNavigate();

  return (
    <div className="main-container">
      <h1 className="main-title">Quizoo</h1>

      <div className="main-buttons">
        {/* 퀴즈 버튼 */}
        <div className="main-card" onClick={() => navigate("/quiz")}>
          <div className="main-card-image">
            <p>시험지</p>
          </div>
          <p className="main-card-label">퀴즈</p>
        </div>

        {/* 동물도감 버튼 */}
        <div className="main-card" onClick={() => navigate("/dogam")}>
          <div className="main-card-image">
            <p>동물원 일러스트</p>
          </div>
          <p className="main-card-label">동물 도감</p>
        </div>
      </div>
    </div>
  );
}

export default MainPage;