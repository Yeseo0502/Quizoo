import { useNavigate } from "react-router-dom";
import "./Header.css";
//로고 누르면 HOME 경로로 이동.
function Header() {
  const navigate = useNavigate();

  return (
    <div className="header" onClick={() => navigate("/")}>
      <h1 className="header-logo">Quizoo</h1>
    </div>
  );
}

export default Header;