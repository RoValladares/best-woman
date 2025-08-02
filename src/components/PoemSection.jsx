// src/components/PoemSection.jsx
const poems = [
  "Tu piel blanca es la página más suave donde mi alma quiere escribir eternamente...",
  "Cuando te veo con tu bebé, no solo veo a una madre, veo al universo revelándose, veo la descripccion de amor puro en su maxima expresión...",
  "Sos hermosa, aun recien despertada...",
  "Hacerte el amor no es solo deseo, es flotar en las nubes, es una plegaria respondida, un sueño que aun no creo que se hizo realidad...",
  "...Es tocar el cielo sin morir, es volver a nacer dentro de ti, con ternura, fuego y paz."
];

export default function PoemSection() {
  return (
    <section
      id="poem-section"
      className="min-h-screen bg-white px-6 py-12 flex flex-col gap-8"
    >
      <h2 className="text-3xl font-semibold text-center text-pink-600">
        Algo que quiero decirte...
      </h2>
      {poems.map((poem, index) => (
        <div
          key={index}
          className="bg-pink-100 p-6 rounded-xl shadow-md text-gray-700"
        >
          <p className="text-lg italic">{poem}</p>
        </div>
      ))}
    </section>
  );
}
