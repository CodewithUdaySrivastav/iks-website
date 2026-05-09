import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { MessageCircle } from "lucide-react";
import indiaVideo from "./assets/videos/india.mp4";

import taj from "./assets/images/taj.jpg";
import upmap from "./assets/images/upmap.jpg";

const cities = [
  {
    name: "Agra",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200&auto=format&fit=crop",
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

function FloatingShlokas() {
  return (
    <>
      <div className="absolute top-[500px] left-10 text-orange-300 opacity-20 text-2xl animate-pulse">
        ॐ नमः शिवाय
      </div>

      <div className="absolute top-[900px] right-10 text-orange-300 opacity-20 text-3xl animate-bounce">
        वसुधैव कुटुम्बकम्
      </div>

      <div className="absolute bottom-20 left-1/3 text-orange-300 opacity-20 text-2xl animate-pulse">
        सत्यमेव जयते
      </div>
    </>
  );
}

function MovingParticles() {
  return (
    <>
      <div className="fixed top-20 left-20 w-4 h-4 bg-orange-400 rounded-full animate-ping"></div>

      <div className="fixed top-96 right-40 w-3 h-3 bg-white rounded-full animate-pulse"></div>

      <div className="fixed bottom-40 left-1/2 w-5 h-5 bg-orange-500 rounded-full animate-bounce"></div>
    </>
  );
}

function Home() {
  useEffect(() => {
    const bell = new Audio(
      "https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3"
    );

    bell.volume = 0.2;

    setTimeout(() => {
      bell.play();
    }, 1000);
  }, []);

  return (
    <div className="bg-black text-white overflow-x-hidden relative">

      {/* Cursor Glow */}
      <div className="fixed w-96 h-96 bg-orange-500/20 blur-3xl rounded-full top-10 left-10 pointer-events-none"></div>

      <MovingParticles />

      <FloatingShlokas />

      {/* Hero */}
      <section className="h-screen relative flex items-center justify-center text-center">
        <video
  autoPlay
  muted
  loop
  playsInline
  className="absolute w-full h-full object-cover"
>
  <source src={indiaVideo} type="video/mp4" />
</video>

        

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 px-6">

          <motion.h1
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-7xl md:text-9xl font-extrabold text-orange-400 drop-shadow-2xl"
          >
            Indian Knowledge System
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 text-2xl md:text-4xl text-white"
          >
            Discover the Soul of Uttar Pradesh
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            className="mt-10 bg-orange-500 px-10 py-5 rounded-full text-2xl shadow-2xl"
          >
            Explore Heritage
          </motion.button>
        </div>
      </section>

      {/* Interactive Map */}
      <section className="py-24 px-8 text-center">

        <motion.h2
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          className="text-6xl font-bold text-orange-400 mb-16"
        >
          Uttar Pradesh Map
        </motion.h2>

        <motion.img
          whileHover={{ scale: 1.05 }}
          src={upmap.jpg}
          
          className="mx-auto w-[500px] rounded-3xl shadow-2xl"
        />
      </section>

      {/* Cultural Cities */}
      <section className="py-24 px-8">

        <h2 className="text-6xl font-bold text-center text-orange-400 mb-20">
          Cultural Cities
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {cities.map((city, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                rotateY: 10,
                rotateX: 5,
              }}
              className="bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 shadow-2xl"
            >
              <Link to={`/${city.name.toLowerCase()}`}>

                <img
                  src={city.image}
                  className="h-80 w-full object-cover"
                />

                <div className="p-6">

                  <h3 className="text-4xl font-bold text-orange-400 mb-4">
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

      {/* Dynamic Festivals */}
      <section className="py-24 px-8">

        <h2 className="text-6xl font-bold text-center text-orange-400 mb-20">
          Festivals of Uttar Pradesh
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <motion.img
            whileHover={{ scale: 1.05 }}
            src="https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=1200&auto=format&fit=crop"
            className="rounded-3xl shadow-2xl"
          />

          <motion.img
            whileHover={{ scale: 1.05 }}
            src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1200&auto=format&fit=crop"
            className="rounded-3xl shadow-2xl"
          />

          <motion.img
            whileHover={{ scale: 1.05 }}
            src="https://images.unsplash.com/photo-1606298855672-3efb63017be8?q=80&w=1200&auto=format&fit=crop"
            className="rounded-3xl shadow-2xl"
          />
        </div>
      </section>

      {/* 3D Taj Mahal */}
      <section className="py-24 text-center">

        <h2 className="text-6xl font-bold text-orange-400 mb-16">
          3D Taj Mahal Showcase
        </h2>

        <motion.img
          animate={{ rotateY: 360 }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "linear",
          }}
          src={taj}
          className="w-[600px] mx-auto rounded-3xl shadow-2xl"
        />
      </section>

      {/* AI Chatbot */}
      <div className="fixed bottom-6 right-6 z-50">

        <button className="bg-orange-500 p-6 rounded-full shadow-2xl animate-bounce">

          <MessageCircle size={40} />

        </button>
      </div>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-10 text-center">

        <h2 className="text-4xl font-bold text-orange-400">
          Indian Knowledge System
        </h2>

        <p className="text-gray-400 mt-4">
          Preserving the rich heritage of Uttar Pradesh
        </p>

      </footer>
    </div>
  );
}

function CityPage({ city }) {
  return (
    <div className="bg-black text-white min-h-screen">

      <div
        className="h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${city.image})`,
        }}
      >
        <div className="bg-black/70 w-full h-full flex items-center justify-center">

          <motion.h1
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="text-8xl font-bold text-orange-400"
          >
            {city.name}
          </motion.h1>

        </div>
      </div>

      <div className="py-20 px-8 max-w-7xl mx-auto">

        <p className="text-2xl text-gray-300 leading-10 mb-14">
          {city.description}
        </p>

        <h2 className="text-5xl font-bold text-orange-400 mb-10">
          Famous Things
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {city.famous.map((item, index) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={index}
              className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 text-center text-2xl"
            >
              {item}
            </motion.div>
          ))}
        </div>

        <div className="mt-20">

          <Link
            to="/"
            className="bg-orange-500 px-8 py-4 rounded-full text-xl"
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