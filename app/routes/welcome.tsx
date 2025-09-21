import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { FaHeart } from "react-icons/fa";

export function meta() {
  return [
    { title: "For my Baby Girl ❤️" },
    { name: "description", content: "A special anniversary message for you!" },
  ];
}

export default function Welcome() {
  const navigate = useNavigate();

  const handleStartJourney = () => {
    navigate("/anniversary");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-indigo-900 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated background stars */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10 max-w-4xl mx-auto px-4"
      >
        {/* Title */}
        <motion.h1
          className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-12"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          It's Our Special Day
        </motion.h1>

        {/* Bear Avatar */}
        <motion.div
          className="relative mb-12"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.div
            className="w-48 h-48 mx-auto rounded-full border-4 border-white/20 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center relative"
            animate={{
              boxShadow: [
                "0 0 20px rgba(255, 255, 255, 0.3)",
                "0 0 40px rgba(255, 255, 255, 0.5)",
                "0 0 20px rgba(255, 255, 255, 0.3)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {/* Custom Bear Image */}
            <div className="relative">
              <img 
                src="/Neri1.jpg" 
                alt="Neri" 
                className="w-32 h-32 object-cover rounded-full border-4 border-white/30 shadow-2xl"
              />
              {/* Ribbon on head */}
              <div className="absolute -top-2 -left-1 text-2xl">🎀</div>
            </div>
            {/* Heart in paws */}
            <motion.div
              className="absolute -bottom-2 -right-2 text-2xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FaHeart className="text-red-500" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Message */}
        <motion.p
          className="text-2xl text-white mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          I made something special for you...
        </motion.p>

        {/* Start Journey Button */}
        <motion.button
          onClick={handleStartJourney}
          className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold py-4 px-12 rounded-2xl text-xl shadow-2xl flex items-center gap-3 mx-auto"
          whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255, 255, 255, 0.3)" }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Start Our Journey
          <motion.span
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            ⭐
          </motion.span>
        </motion.button>
      </motion.div>
    </div>
  );
}
