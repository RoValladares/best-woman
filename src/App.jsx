// src/App.jsx
import Landing from "./components/Landing";
import PoemSection from "./components/PoemSection";
import AboutHer from "./components/AboutHer";
import FinalMessage from "./components/FinalMessage";

function App() {
  return (
    <div className="font-sans bg-white text-gray-800 scroll-smooth">
      <Landing />
      <PoemSection />
      <AboutHer />
      <FinalMessage />
    </div>
  );
}

export default App;
