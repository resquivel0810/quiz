import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import QuizContainer from './pages/QuizContainer'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/quiz" element={<QuizContainer />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
