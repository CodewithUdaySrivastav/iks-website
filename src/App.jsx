import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

import indiaVideo from "./assets/videos/india.mp4";

import taj from "./assets/images/taj.jpg";
import upmap from "./assets/images/upmap.jpg";

const cities = [
  {
    name: "Agra",
    image: agra,
    description:
      "Agra is famous for the Taj Mahal, Mughal architecture and marble artwork.",
    famous: ["Taj Mahal", "Agra Fort", "Petha", "Marble Art"],
  },

  {
    name: "Lucknow",
    image:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200&auto=format&fit=crop",
    description:
      "Lucknow is known for Nawabi culture, Chikankari and delicious kebabs.",
    famous: ["Chikankari", "Bara Imambara", "Kathak", "Tunday Kebabs"],
  },

  {
    name: "Varanasi",
    image:
      "https://images.unsplash.com/photo-1561361058-c24cecae35ca?q=80&w=1200&auto=format&fit=crop",
    description:
      "Varanasi is one of the oldest spiritual cities of India.",
    famous: ["Ganga Aarti", "Banarasi Silk", "Kashi Temple", "Paan"],
  },
];

function Home() {
  return (
    <div className="bg-black text-white overflow-x-hidden">

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center text-center">

        {/* VIDEO */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src={indiaVideo} type="video/mp4" />
        </video>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* CONTENT */}
        <div className="relative z-10 px-4">

          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-8xl font-extrabold text-orange-400"
          >
            Indian Knowledge System
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-6 text-lg md:text-3xl text-white"
          >
            Preserving the rich heritage of Uttar Pradesh
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-8 bg-orange-500 px-6 py-3 md:px-10 md:py-5 rounded-full text-lg md:text-2xl shadow-2xl"
          >
            Explore Heritage
          </motion.button>

        </div>
      </section>

      {/* MAP */}
      <section className="py-20 px-4 md:px-8 text-center">

        <h2 className="text-3xl md:text-6xl font-bold text-orange-400 mb-12">
          Uttar Pradesh Map
        </h2>

        <motion.img
          whileHover={{ scale: 1.03 }}
          src={upmap}
          alt="UP Map"
          className="mx-auto w-[90%] md:w-[500px] rounded-3xl shadow-2xl"
        />
      </section>

      {/* CULTURAL CITIES */}
      <section className="py-20 px-4 md:px-8">

        <h2 className="text-3xl md:text-6xl font-bold text-center text-orange-400 mb-16">
          Cultural Cities
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {cities.map((city, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.03,
              }}
              className="bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 shadow-2xl"
            >

              <Link to={`/${city.name.toLowerCase()}`}>

                <img
                  src={city.image}
                  alt={city.name}
                  className="h-72 w-full object-cover"
                />

                <div className="p-6">

                  <h3 className="text-3xl font-bold text-orange-400 mb-4">
                    {city.name}
                  </h3>

                  <p className="text-gray-300 text-lg">
                    {city.description}
                  </p>

                </div>

              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FESTIVALS */}
      <section className="py-20 px-4 md:px-8">

        <h2 className="text-3xl md:text-6xl font-bold text-center text-orange-400 mb-16">
          Festivals of Uttar Pradesh
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

  <img
    src="https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=1200&auto=format&fit=crop"
    className="rounded-3xl shadow-2xl h-80 w-full object-cover"
  />

  <img
    src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1200&auto=format&fit=crop"
    className="rounded-3xl shadow-2xl h-80 w-full object-cover"
  />

  <img
    src="https://images.unsplash.com/photo-1606298855672-3efb63017be8?q=80&w=1200&auto=format&fit=crop"
    className="rounded-3xl shadow-2xl h-80 w-full object-cover"
  />

</div>
      </section>

      {/* TAJ SHOWCASE */}
      <section className="py-20 text-center px-4">

        <h2 className="text-3xl md:text-6xl font-bold text-orange-400 mb-12">
          Taj Mahal Showcase
        </h2>

        <motion.img
          whileHover={{ scale: 1.03 }}
          src={taj}
          className="w-[90%] md:w-[600px] mx-auto rounded-3xl shadow-2xl"
        />
      </section>

      {/* CHATBOT */}
      <div className="fixed bottom-5 right-5 z-50">

        <button className="bg-orange-500 p-3 md:p-5 rounded-full shadow-2xl">

          <MessageCircle size={28} />

        </button>

      </div>

      {/* FOOTER */}
      <footer className="bg-black border-t border-gray-800 py-10 text-center px-4">

        <h2 className="text-2xl md:text-4xl font-bold text-orange-400">
          Indian Knowledge System
        </h2>

        <p className="text-gray-400 mt-4 text-sm md:text-lg">
          Preserving the rich heritage of Uttar Pradesh
        </p>

      </footer>
    </div>
  );
}

function CityPage({ city }) {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* HERO */}
      <div
        className="h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${city.image})`,
        }}
      >
        <div className="bg-black/60 w-full h-full flex items-center justify-center px-4">

          <motion.h1
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="text-5xl md:text-8xl font-bold text-orange-400 text-center"
          >
            {city.name}
          </motion.h1>

        </div>
      </div>

      {/* CONTENT */}
      <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto">

        <p className="text-lg md:text-2xl text-gray-300 leading-10 mb-14">
          {city.description}
        </p>

        <h2 className="text-3xl md:text-5xl font-bold text-orange-400 mb-10">
          Famous Things
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {city.famous.map((item, index) => (
            <motion.div
              whileHover={{ scale: 1.03 }}
              key={index}
              className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/20 text-center text-xl md:text-2xl"
            >
              {item}
            </motion.div>
          ))}
        </div>

        {/* GALLERY */}
        <div className="mt-16">

          <h2 className="text-3xl md:text-5xl font-bold text-orange-400 mb-10">
            Gallery
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <img
              src={city.image}
              className="rounded-3xl shadow-2xl"
            />

            <img
              src={city.image}
              className="rounded-3xl shadow-2xl"
            />

          </div>
        </div>

        {/* BACK BUTTON */}
        <div className="mt-16">

          <Link
            to="/"
            className="bg-orange-500 px-6 py-3 rounded-full text-lg"
          >
            ← Back to Home
          </Link>

        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/agra"
          element={<CityPage city={cities[0]} />}
        />

        <Route
          path="/lucknow"
          element={<CityPage city={cities[1]} />}
        />

        <Route
          path="/varanasi"
          element={<CityPage city={cities[2]} />}
        />

      </Routes>

    </Router>
  );
}