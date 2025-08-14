import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import QuestionnairesPage from "./pages/QuestionnairesPage";
import About from "./pages/About";
import Credits from "./pages/Credits";
import Alternatives from "./pages/Alternatives";

const App: React.FC = () => {
  return (
    <Router basename="/HMI-Questionnaires">
      <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
        <Navigation />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<QuestionnairesPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/alternatives" element={<Alternatives />} />
            <Route path="/credits" element={<Credits />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
