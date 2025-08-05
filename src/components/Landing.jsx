// src/components/Landing.jsx
import { useRef } from 'react';
import clickSound from '../assets/click.mp3';

export default function Landing() {
  const audioRef = useRef(null);

  const handleClick = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
    document
      .getElementById('poem-section')
      .scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6 bg-pink-50 relative overflow-hidden">
      {/* Corazones flotantes para móvil */}
      <div className="absolute w-full h-full pointer-events-none z-0">
        <span className="absolute text-2xl left-[15%] bottom-0 animate-floatHeart">🖤</span>
        <span className="absolute text-xl left-[35%] bottom-0 animate-floatHeartSlow">🖤</span>
        <span className="absolute text-lg left-[55%] bottom-0 animate-floatHeartFast">🖤</span>
        <span className="absolute text-xl left-[75%] bottom-0 animate-floatHeart">🖤</span>
        <span className="absolute text-lg left-[85%] bottom-0 animate-floatHeartSlow">🖤</span>
      </div>

      <h1 className="text-3xl font-bold text-black mb-6 z-10">
        This is for the most beautiful woman I know.
      </h1>

      <button
        onClick={handleClick}
        className="mt-4 bg-black text-white px-6 py-2 rounded-full hover:bg-pink-500 transition z-10"
      >
        Enter
      </button>

      {/* Elemento de audio oculto */}
      <audio ref={audioRef} src={clickSound} />
    </section>
  );
}
