import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "16px 24px", cursor: "pointer" }}
         onClick={() => navigate("/")}>
      <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>Quizoo</h1>
    </div>
  );
}

export default Header;