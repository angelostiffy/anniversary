import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

export function meta() {
  return [
    { title: "For my Baby Girl ❤️" },
    { name: "description", content: "A special anniversary message for you!" },
  ];
}

export default function Anniversary() {
  const navigate = useNavigate();
  const [days, setDays] = useState(0);
  
  // Calculate days since we met on October 1, 2017
  const startDate = new Date("2017-10-01"); // We met on October 1, 2017
  const today = new Date();
  const timeDiff = today.getTime() - startDate.getTime();
  const actualDays = Math.floor(timeDiff / (1000 * 3600 * 24));

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, actualDays, {
      duration: 2,
      ease: "easeOut",
    });
    
    return controls.stop;
  }, [count, actualDays]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => setDays(latest));
    return unsubscribe;
  }, [rounded]);

  const handleContinue = () => {
    navigate("/catch-hearts");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-indigo-900 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated background stars */}
      <div className="absolute inset-0">
        {[...Array(80)].map((_, i) => (
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
        {/* Bear Avatar with Crown */}
        <motion.div
          className="relative mb-8"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <motion.div
            className="w-32 h-32 mx-auto rounded-full border-4 border-white/20 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center relative"
            animate={{
              boxShadow: [
                "0 0 20px rgba(255, 255, 255, 0.3)",
                "0 0 40px rgba(255, 255, 255, 0.5)",
                "0 0 20px rgba(255, 255, 255, 0.3)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {/* Custom Bear Image with crown */}
            <div className="relative">
              <img 
                src="/Neri2.jpg" 
                alt="Neri" 
                className="w-24 h-24 object-cover rounded-full border-4 border-white/30 shadow-2xl"
              />
              <div className="absolute -top-2 -left-1 text-2xl">👑</div>
            </div>
            {/* Pancakes/cakes */}
            <motion.div
              className="absolute -bottom-2 -right-2 text-2xl"
              animate={{
                y: [0, -5, 0],
              }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              🥞
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Happy Anniversary Title */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Happy Anniversary
        </motion.h1>

        {/* Cutiepiee subtitle */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          Baby Bulf
        </motion.h2>

        {/* Day Counter */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <p className="text-white text-xl mb-4">We've been together for</p>
          <motion.div
            className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 0.5, delay: 2.5 }}
          >
            {days}
          </motion.div>
          <p className="text-white text-xl mt-4">days and counting...</p>
        </motion.div>

        {/* Continue Button */}
        <motion.button
          onClick={handleContinue}
          className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold py-4 px-12 rounded-2xl text-xl shadow-2xl flex items-center gap-3 mx-auto"
          whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255, 255, 255, 0.3)" }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          Continue Our Story
          <motion.span
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            🎵
          </motion.span>
        </motion.button>
      </motion.div>
    </div>
  );
}
