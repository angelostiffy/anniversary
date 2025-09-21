import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { FaHeart, FaStar, FaMagic } from "react-icons/fa";

export function meta() {
  return [
    { title: "For my Baby Girl ❤️" },
    { name: "description", content: "A special anniversary message for you!" },
  ];
}

export default function FinalMessage() {
  const navigate = useNavigate();
  const [showHearts, setShowHearts] = useState(false);
  const [currentHeart, setCurrentHeart] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHearts(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showHearts) {
      const interval = setInterval(() => {
        setCurrentHeart((prev) => (prev + 1) % 5);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [showHearts]);

  const handleBackToStart = () => {
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-pink-900 flex flex-col items-center justify-center relative overflow-hidden p-4 sm:p-6 md:p-8">
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

      {/* Floating Hearts */}
      {showHearts && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-red-500 text-2xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{ opacity: 0, y: 100 }}
              animate={{
                opacity: [0, 1, 0],
                y: [100, -100],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            >
              <FaHeart />
            </motion.div>
          ))}
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10 max-w-4xl mx-auto py-4 sm:py-8 w-full"
      >
        {/* Main Message */}
        <motion.div
          className="mb-8 sm:mb-12"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 px-4"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              background: "linear-gradient(45deg, #ff6b9d, #c44569, #ff6b9d, #ff8fab)",
              backgroundSize: "300% 300%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            I love you so much
          </motion.h1>

          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-6 sm:mb-8 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            style={{
              background: "linear-gradient(45deg, #ff6b9d, #c44569)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Neri Mae Halos
          </motion.h2>
        </motion.div>

        {/* Final Picture */}
        <motion.div
          className="flex justify-center mb-8 sm:mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.img
            src="/FinalPic.jpg"
            alt="Final Picture"
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-cover rounded-3xl shadow-2xl border-4 border-white/30"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Animated Icons */}
        <motion.div
          className="flex justify-center items-center space-x-6 sm:space-x-8 mb-8 sm:mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-3xl sm:text-4xl"
          >
            <FaMagic className="text-yellow-400" />
          </motion.div>

          <motion.div
            animate={{
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-5xl sm:text-6xl text-red-500"
          >
            <FaHeart />
          </motion.div>

          <motion.div
            animate={{
              rotate: [0, -360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-3xl sm:text-4xl"
          >
            <FaStar className="text-pink-400" />
          </motion.div>
        </motion.div>

        {/* Special Message */}
        <motion.div
          className="bg-gradient-to-br from-pink-900/50 to-purple-900/50 backdrop-blur-sm rounded-3xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-12 border border-white/20 mx-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <motion.p
            className="text-white text-lg sm:text-xl leading-relaxed"
            animate={{
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            You are the light of my life, the reason I smile every day, 
            and the most beautiful person I've ever known. 
            Every moment with you is a treasure, and I'm so grateful 
            to have you in my life. 💕
          </motion.p>
        </motion.div>

        {/* Floating Elements */}
        <div className="relative">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl"
              style={{
                left: `${20 + i * 10}%`,
                top: `${-20 + (i % 2) * 40}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 360],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            >
              {i % 3 === 0 ? (
                <FaHeart className="text-red-500" />
              ) : i % 3 === 1 ? (
                <FaStar className="text-yellow-400" />
              ) : (
                <FaMagic className="text-pink-400" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Back to Start Button */}
        <motion.button
          onClick={handleBackToStart}
          className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold py-3 px-6 sm:py-4 sm:px-12 rounded-2xl text-base sm:text-lg md:text-xl shadow-2xl flex items-center gap-3 mx-auto mt-6 sm:mt-8 w-full max-w-sm"
          whileHover={{ 
            scale: 1.05, 
            boxShadow: "0 10px 30px rgba(255, 255, 255, 0.3)",
            background: "linear-gradient(45deg, #ff6b9d, #c44569, #ff8fab)"
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          <motion.span
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            💕
          </motion.span>
          Start Our Journey Again
          <motion.span
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            💕
          </motion.span>
        </motion.button>
      </motion.div>

      {/* Bottom decoration */}
      <motion.div
        className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 text-white/60 text-xs sm:text-sm px-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 0.8 }}
      >
        Made with 💕 for Neri Mae Halos
      </motion.div>
    </div>
  );
}
