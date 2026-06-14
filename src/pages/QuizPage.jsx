import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import animals from "../data/animals";
import "./QuizPage.css";

// /quiz경로 페이지

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function QuizPage() {
  const navigate = useNavigate();

  const [questions] = useState(() => shuffle(animals).slice(0, 15));
  const [current, setCurrent] = useState(0);
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  const animal = questions[current];

  function handleSubmit() {
    const isCorrect = input.trim() === animal.name;
    const newResults = [...results, { animal, userAnswer: input, isCorrect }];
    setResults(newResults);
    setInput("");

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      navigate("/quiz/result", { state: { results: newResults } });
    }
  }

  function handleExit() {
    const ok = window.confirm("퀴즈를 종료할까요?");
    if (ok) navigate("/");
  }

  return (
    <div>
      <div className="quiz-top-bar">
        <Header />
        <button className="quiz-exit-btn" onClick={handleExit}>
          ✕
        </button>
      </div>

      <div className="quiz-content">
        <p className="quiz-progress">
          {current + 1} / {questions.length}
        </p>

        <img className="quiz-image" src={animal.image} alt="?" />

        <div className="quiz-input-row">
          <input
            className="quiz-input"
            type="text"
            placeholder="동물 이름을 입력하세요"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          />
          <button className="quiz-submit-btn" onClick={handleSubmit}>
            완료
          </button>
        </div>

        <button
          className="quiz-reset-btn"
          onClick={() => {
            setCurrent(0);
            setResults([]);
            setInput("");
          }}
        >
          ⟲처음부터 풀기
        </button>
      </div>
    </div>
  );
}

export default QuizPage;
