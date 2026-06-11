import { useLocation, useNavigate } from "react-router-dom";

function QuizResultPage() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const results = state?.results ?? [];

  const correct = results.filter(r => r.isCorrect).length;
  const total = results.length;
  const rate = Math.round((correct / total) * 100);

  return (
    <div style={{ padding: "40px", maxWidth: "600px", margin: "0 auto" }}>
      <h2>퀴즈 결과</h2>
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>
        {correct} / {total} 정답  ({rate}%)
      </p>

      <h3 style={{ marginTop: "30px" }}>❌ 틀린 문제</h3>
      {results.filter(r => !r.isCorrect).map((r, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center",
                              gap: "12px", marginBottom: "12px" }}>
          <img src={r.animal.image} alt={r.animal.name}
               style={{ width: "60px", height: "60px",
                        objectFit: "cover", borderRadius: "8px" }} />
          <div>
            <p>정답: <strong>{r.animal.name}</strong></p>
            <p style={{ color: "#999" }}>내 답: {r.userAnswer || "(미입력)"}</p>
          </div>
        </div>
      ))}

      <div style={{ display: "flex", gap: "16px", marginTop: "30px" }}>
        <button onClick={() => navigate("/quiz")}
                style={{ padding: "12px 24px", background: "#4caf50",
                         color: "white", border: "none",
                         borderRadius: "8px", cursor: "pointer" }}>
          다시 시작
        </button>
        <button onClick={() => navigate("/")}
                style={{ padding: "12px 24px", background: "#eee",
                         border: "none", borderRadius: "8px", cursor: "pointer" }}>
          메인으로
        </button>
      </div>
    </div>
  );
}

export default QuizResultPage;