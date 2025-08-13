import React from "react";
import bgImage from "../assets/poem-bg.png"; // tu imagen transparente

const LovePoemSection = () => {
  return (
    <section
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center px-6"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Capa oscura sutil para mejorar legibilidad */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Contenido */}
      <div className="relative max-w-2xl text-center text-white" style={{ fontFamily: "'Great Vibes', cursive" }}>
        <p className="text-4xl leading-relaxed drop-shadow-lg">
           Sos la mujer más hermosa de todo el universo. <br />
            Desde el instante en que te vi después de 5 años, algo despertó en mí. <br /> 
            No puedo detener las emociones y sentimientos que me invaden. <br />
            Y mi mente no para de pensarte. <br />
            Tu gracia me enamora, tu amor de mamá me enamora, <br /> 
            y tu belleza agrada mi alma a través de mis ojos. <br />
        </p>
      </div>
    </section>
  );
};

export default LovePoemSection;
