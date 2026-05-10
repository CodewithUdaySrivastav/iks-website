import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

import indiaVideo from "./assets/videos/india.mp4";

import taj from "./assets/images/taj.jpg";
import lucknow from "./assets/images/lucknow.jpg";
import varanasi from "./assets/images/varanasi.jpg";

import festival1 from "./assets/images/festival1.jpg";
import festival2 from "./assets/images/festival2.jpg";
import festival3 from "./assets/images/festival3.jpg";

import upmap from "./assets/images/upmap.jpg";

const cities = [
  {
    name: "Agra",
    image: taj,
    description:
      "Agra is home to the iconic Taj Mahal and rich Mughal heritage.",

    famous: ["Taj Mahal", "Agra Fort", "Petha", "Marble Art"],

    details:
      "Agra is one of the most historically significant cities in India and is situated on the banks of the Yamuna River in the state of Uttar Pradesh. The city became prominent during the Mughal period and served as the capital of the Mughal Empire under several rulers including Akbar, Jahangir and Shah Jahan. Agra is internationally renowned for the Taj Mahal, one of the Seven Wonders of the World and a UNESCO World Heritage Site. Built by Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, the monument is considered a masterpiece of Mughal architecture and symbolizes eternal love. Constructed using white marble and decorated with intricate carvings, precious stones and Persian-inspired designs, the Taj Mahal attracts millions of tourists every year from across the world.\n\nApart from the Taj Mahal, Agra is home to several other historical monuments such as the Agra Fort, Fatehpur Sikri and Itmad-ud-Daulah’s Tomb. Agra Fort, another UNESCO World Heritage Site, was built mainly using red sandstone and served as the residence of Mughal emperors for many years. Fatehpur Sikri, located near Agra, was established by Emperor Akbar and reflects a unique blend of Persian, Islamic and Indian architectural styles. These monuments showcase the grandeur, artistic excellence and engineering brilliance of the Mughal era.\n\nAgra is also known for its traditional handicrafts, marble inlay work, leather products and carpets. Skilled artisans of Agra continue to preserve centuries-old art forms that have been passed down through generations. The city is famous for its sweet dish called Petha, which is loved by both locals and tourists. Agra’s culture reflects a beautiful blend of Mughal heritage and Indian traditions. Festivals such as Diwali, Eid and Taj Mahotsav are celebrated with great enthusiasm. Taj Mahotsav, an annual cultural festival, highlights the art, crafts, music and cuisine of the region.\n\nToday, Agra remains one of the most visited tourist destinations in India due to its historical importance, architectural beauty and cultural richness. The city continues to preserve its glorious past while developing as a modern urban center. Agra plays an important role in promoting Indian tourism and heritage on the global stage.",

  },

  {
    name: "Lucknow",
    image: lucknow,
    description:
      "Lucknow is famous for Nawabi culture, food and Chikankari art.",

    famous: ["Chikankari", "Bara Imambara", "Kathak", "Tunday Kebabs"],

    details:
      "Lucknow, the capital city of Uttar Pradesh, is widely known as the City of Nawabs because of its strong historical connection with the Nawabs of Awadh. The city is famous for its rich cultural heritage, refined etiquette, poetry, music, cuisine and architectural beauty. Lucknow has played an important role in Indian history and emerged as a major center of art, literature and politics during the Mughal and British periods. The city is especially admired for its unique blend of traditional values and modern urban lifestyle.\n\nOne of the most iconic landmarks of Lucknow is the Bara Imambara, an architectural masterpiece built by Nawab Asaf-ud-Daula in the 18th century. The monument is famous for its grand central hall and the Bhool Bhulaiya, a fascinating labyrinth consisting of interconnected passages and stairways. Other historical structures such as Chota Imambara, Rumi Darwaza and Clock Tower further enhance the beauty and historical significance of the city. The architecture of Lucknow reflects a blend of Mughal, Persian and Awadhi influences.\n\nLucknow is globally recognized for Chikankari embroidery, a traditional hand embroidery art form practiced for centuries. Skilled artisans create beautiful patterns on fabrics using delicate needlework techniques. The city is also famous for its delicious Awadhi cuisine which includes kebabs, biryani, korma and various traditional sweets. Tunday Kebabi is one of the most popular food destinations in Lucknow and is known for its flavorful kebabs.\n\nThe cultural atmosphere of Lucknow is deeply connected with Urdu poetry, classical music and Kathak dance. The city has contributed greatly to Indian literature and performing arts. Festivals such as Diwali, Eid, Holi and Muharram are celebrated with great enthusiasm and harmony among people of different communities. Lucknow is also an important educational and administrative center with several universities, research institutions and government offices.\n\nToday, Lucknow stands as one of the fastest-growing cities in northern India while still preserving its historical identity and cultural traditions. The city beautifully combines heritage with modernization and continues to attract tourists, students and professionals from across the country.",

  },

  {
    name: "Varanasi",
    image: varanasi,
    description:
      "Varanasi is one of the world’s oldest spiritual cities.",

    famous: ["Ganga Aarti", "Banarasi Silk", "Kashi Temple", "Paan"],

    details:
      "Varanasi, also known as Kashi or Banaras, is one of the oldest continuously inhabited cities in the world and is regarded as the spiritual capital of India. Located on the banks of the sacred River Ganga in Uttar Pradesh, Varanasi holds immense religious, cultural and historical significance. According to Hindu beliefs, the city was founded by Lord Shiva and is considered one of the holiest pilgrimage destinations for Hindus. Millions of devotees visit Varanasi every year to take a holy dip in the River Ganga and seek spiritual purification.\n\nThe city is famous for its ancient ghats and temples that line the banks of the river. Dashashwamedh Ghat is one of the most popular ghats where the grand Ganga Aarti takes place every evening. During this spiritual ceremony, priests perform rituals with large lamps, chants and prayers while devotees gather to witness the divine atmosphere. The Kashi Vishwanath Temple, dedicated to Lord Shiva, is among the most important temples in India and attracts pilgrims from all over the world.\n\nVaranasi is also a major center of learning, music and culture. The city has been associated with Sanskrit education, philosophy and spiritual teachings for centuries. Banaras Hindu University, one of India’s largest and most prestigious universities, is located in the city and contributes significantly to education and research. Varanasi is famous for Banarasi silk sarees which are known for their fine craftsmanship, intricate patterns and luxurious fabric. These sarees are highly valued across India and abroad.\n\nThe city has made remarkable contributions to Indian classical music and arts. Legendary musicians and scholars have lived and performed in Varanasi, making it a center of cultural excellence. The narrow lanes of the city are filled with temples, shops, traditional eateries and vibrant local life. Banarasi paan is another popular specialty enjoyed by visitors.\n\nVaranasi’s spiritual energy, historical heritage and cultural richness make it one of the most unique cities in the world. The combination of ancient traditions, religious devotion and artistic excellence gives the city a timeless identity. Even in modern times, Varanasi continues to preserve its sacred atmosphere while welcoming millions of tourists and pilgrims every year.",
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
    src={festival1}
    className="rounded-3xl shadow-2xl h-80 w-full object-cover"
  />

  <img
    src={festival2}
    className="rounded-3xl shadow-2xl h-80 w-full object-cover"
  />

  <img
    src={festival3}
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
           {city.details}
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