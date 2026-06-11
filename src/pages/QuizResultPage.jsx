import { useLocation, useNavigate } from "react-router-dom";
import "./QuizResultPage.css";

//게임 결과 페이지 /quiz/result
function QuizResultPage() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const results = state?.results ?? [];

  const correct = results.filter(r => r.isCorrect).length;
  const total = results.length;
  const rate = Math.round((correct / total) * 100);

  return (
    <div className="result-container">
      <h2>퀴즈 결과</h2>
      <p className="result-score">{correct} / {total} 정답 ({rate}%)</p>

      <h3 className="result-wrong-title">❌ 틀린 문제</h3>
      {results.filter(r => !r.isCorrect).map((r, i) => (
        <div key={i} className="result-wrong-item">
          <img className="result-wrong-img" src={r.animal.image} alt={r.animal.name} />
          <div>
            <p>정답: <strong>{r.animal.name}</strong></p>
            <p className="result-user-answer">내 답: {r.userAnswer || "(미입력)"}</p>
          </div>
        </div>
      ))}

      <div className="result-buttons">
        <button className="result-btn-retry" onClick={() => navigate("/quiz")}>다시 시작</button>
        <button className="result-btn-home" onClick={() => navigate("/")}>메인으로</button>
      </div>
    </div>
  );
}

export default QuizResultPage;