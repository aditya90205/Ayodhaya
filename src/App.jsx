import "./App.css";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
       <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Other routes */}
      </Routes>
    </Router>
    </>
  );
}

export default App;
