import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import animals from "../data/animals";

// 배열을 섞는 함수
function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function QuizPage() {
  const navigate = useNavigate();

  // 15문제 랜덤 추출
  const [questions] = useState(() => shuffle(animals).slice(0, 15));
  const [current, setCurrent] = useState(0);   // 현재 문제 번호
  const [input, setInput] = useState("");        // 입력값
  const [results, setResults] = useState([]);    // 결과 저장

  const animal = questions[current];

  function handleSubmit() {
    const isCorrect = input.trim() === animal.name;
    const newResults = [...results, { animal, userAnswer: input, isCorrect }];
    setResults(newResults);
    setInput("");

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      // 퀴즈 끝 → 결과 페이지로
      navigate("/quiz/result", { state: { results: newResults } });
    }
  }

  function handleExit() {
    const ok = window.confirm("퀴즈를 종료할까요?");
    if (ok) navigate("/");
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Header />
        <button onClick={handleExit}
                style={{ marginRight: "24px", background: "none",
                         border: "none", fontSize: "24px", cursor: "pointer" }}>✕</button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center",
                    gap: "20px", marginTop: "20px" }}>
        {/* 진행도 */}
        <p style={{ fontSize: "20px", fontWeight: "bold" }}>
          {current + 1} / {questions.length}
        </p>

        {/* 동물 사진 */}
        <img src={animal.image} alt="?" 
             style={{ width: "360px", height: "260px",
                      objectFit: "cover", borderRadius: "12px" }} />

        {/* 입력창 + 완료 버튼 */}
        <div style={{ display: "flex", gap: "12px" }}>
          <input
            type="text"
            placeholder="동물 이름을 입력하세요"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleSubmit()}
            style={{ padding: "10px 16px", borderRadius: "8px",
                     border: "1px solid #ccc", width: "240px", fontSize: "16px" }}
          />
          <button onClick={handleSubmit}
                  style={{ padding: "10px 20px", background: "#4caf50",
                           color: "white", border: "none",
                           borderRadius: "8px", cursor: "pointer", fontSize: "16px" }}>
            완료
          </button>
        </div>

        {/* 한 번 처음으로 되돌리기 */}
        <button onClick={() => { setCurrent(0); setResults([]); setInput(""); }}
                style={{ background: "none", border: "none",
                         color: "#999", cursor: "pointer", fontSize: "13px" }}>
          한 번 처음으로 되돌리기
        </button>
      </div>
    </div>
  );
}

export default QuizPage;