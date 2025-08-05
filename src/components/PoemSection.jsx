// src/components/PoemSection.jsx
const poems = [
  "Tu piel blanca es la página más suave donde mi alma quiere escribir eternamente...",
  "Cuando te veo con tu bebé, no solo veo a una madre, veo al universo revelándose, veo la descripcción de amor puro en su máxima expresión...",
  "Sos hermosa, aun recién despertada...",
  "Hacerte el amor no es solo deseo, es flotar en las nubes, es una plegaria respondida, un sueño que aún no creo que se hizo realidad...",
  "...Es tocar el cielo sin morir, es volver a nacer dentro de ti, con ternura, fuego y paz."
];

export default function PoemSection() {
  return (
    <section
      id="poem-section"
      className="min-h-screen bg-white px-6 py-12 flex flex-col gap-8"
    >
      <h2
        className="text-3xl font-semibold text-center text-pink-600"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Algo que quiero decirte...
      </h2>

      {poems.map((poem, index) => (
        <div
          key={index}
          className="bg-pink-100 p-6 rounded-xl shadow-md text-gray-700"
          data-aos="fade-up"
          data-aos-delay={index * 200} // cada uno aparece con un pequeño delay extra
          data-aos-duration="800"
        >
          <p className="text-lg italic transition-opacity duration-500 hover:opacity-90">
            {poem}
          </p>
        </div>
      ))}
    </section>
  );
}
