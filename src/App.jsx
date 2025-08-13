// src/App.jsx
import Landing from "./components/Landing";
import PoemSection from "./components/PoemSection";
import AboutHer from "./components/AboutHer";
import FinalMessage from "./components/FinalMessage";
import LovePoemSection from "./components/LovePoemSection";
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans bg-white text-gray-800 scroll-smooth">
      <Landing />
      <PoemSection />
      <AboutHer />
      <FinalMessage />
      <LovePoemSection />
      <Footer />
    </div>
  );
}

export default App;
