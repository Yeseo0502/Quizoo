import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import QuizPage from "./pages/QuizPage";
import QuizResultPage from "./pages/QuizResultPage";
import DogamPage from "./pages/DogamPage";
import AnimalDetailPage from "./pages/AnimalDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"            element={<MainPage />} />
        <Route path="/quiz"        element={<QuizPage />} />
        <Route path="/quiz/result" element={<QuizResultPage />} />
        <Route path="/dogam"       element={<DogamPage />} />
        <Route path="/dogam/:id"   element={<AnimalDetailPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;