// src/components/Landing.jsx
export default function Landing() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6 bg-pink-50">
      <h1 className="text-4xl font-bold text-black mb-4">
        This is for the best woman I know...
      </h1>
      <button
        onClick={() =>
          document
            .getElementById("poem-section")
            .scrollIntoView({ behavior: "smooth" })
        }
        className="mt-6 bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-500 transition"
      >
        Enter
      </button>
    </section>
  );
}
