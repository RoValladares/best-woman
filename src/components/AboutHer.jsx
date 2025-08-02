// src/components/AboutHer.jsx
import herPhoto from "../assets/her-photo.jpg";

export default function AboutHer() {
  return (
    <section className="px-6 py-12 bg-pink-50 text-center">
      <h2 className="text-2xl font-semibold text-pink-600 mb-6">About You</h2>
      <img
        src={herPhoto}
        alt="Her"
        className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-pink-300 mb-6"
      />
      <ul className="text-gray-700 text-base space-y-3">
        <li>🤍 Tu piel es suave como la calma.</li>
        <li>👁️ Tus ojos son la forma del amor.</li>
        <li>👶 Cuando estás con tu bebé, brilla todo a tu alrededor.</li>
        <li>💫 Eres una mujer con un valor inmenso, verdadera y única.</li>
      </ul>
    </section>
  );
}
