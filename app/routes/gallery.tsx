import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";

export function meta() {
  return [
    { title: "For my Baby Girl ❤️" },
    { name: "description", content: "A special anniversary message for you!" },
  ];
}

interface Memory {
  id: number;
  image: string;
}

const memories: Memory[] = [
  {
    id: 1,
    image: "/1.jpg"
  },
  {
    id: 2,
    image: "/2.jpg"
  },
  {
    id: 3,
    image: "/3.jpg"
  },
  {
    id: 4,
    image: "/4.jpg"
  },
  {
    id: 5,
    image: "/5.jpg"
  },
  {
    id: 6,
    image: "/6.jpg"
  },
  {
    id: 7,
    image: "/7.jpg"
  },
  {
    id: 8,
    image: "/8.jpg"
  },
  {
    id: 9,
    image: "/9.jpg"
  },
  {
    id: 10,
    image: "/10.jpg"
  },
  {
    id: 11,
    image: "/11.jpg"
  },
  {
    id: 12,
    image: "/12.jpg"
  }
];

export default function Gallery() {
  const navigate = useNavigate();
  const [currentMemory, setCurrentMemory] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    console.log('Next clicked, current memory:', currentMemory);
    setDirection(1);
    setCurrentMemory((prev) => {
      const next = (prev + 1) % memories.length;
      console.log('Setting memory to:', next);
      return next;
    });
  };

  const handlePrev = () => {
    console.log('Prev clicked, current memory:', currentMemory);
    setDirection(-1);
    setCurrentMemory((prev) => {
      const prevIndex = (prev - 1 + memories.length) % memories.length;
      console.log('Setting memory to:', prevIndex);
      return prevIndex;
    });
  };

  const handleReadMessage = () => {
    navigate("/special-message");
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        handlePrev();
      } else if (event.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentMemory]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-indigo-900 flex flex-col items-center justify-center relative overflow-hidden p-4 sm:p-6 md:p-8">
      {/* Animated background stars */}
      <div className="absolute inset-0">
        {[...Array(60)].map((_, i) => (
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
        className="text-center z-10 max-w-4xl mx-auto w-full"
      >
        {/* Panda Character */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="relative">
            <div className="text-6xl">🐼</div>
            <div className="absolute -top-2 -right-2 text-2xl">📷</div>
            <motion.div
              className="absolute -top-1 -left-1 text-lg"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ❤️
            </motion.div>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4 px-4"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Our Beautiful Memories
        </motion.h1>

        {/* Memory Gallery */}
        <div className="relative w-full max-w-2xl mx-auto mb-8">
          <div className="relative h-72 sm:h-80 md:h-96 bg-black/20 rounded-2xl border-2 border-white/20 overflow-hidden mx-4">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentMemory}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute inset-0 flex flex-col items-center justify-center p-8"
              >
                {/* Memory Image */}
                <img 
                  src={memories[currentMemory].image} 
                  alt="Memory" 
                  className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover rounded-2xl shadow-2xl border-4 border-white/30"
                />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <motion.button
              onClick={handlePrev}
              className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/70 text-white p-3 rounded-full transition-colors z-20 border-2 border-white/40 text-xl min-w-[48px] min-h-[48px] flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ←
            </motion.button>
            <motion.button
              onClick={handleNext}
              className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/70 text-white p-3 rounded-full transition-colors z-20 border-2 border-white/40 text-xl min-w-[48px] min-h-[48px] flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              →
            </motion.button>
          </div>

          {/* Memory Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {memories.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentMemory ? 1 : -1);
                  setCurrentMemory(index);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentMemory ? 'bg-pink-500' : 'bg-white/30'
                }`}
              />
            ))}
          </div>

        </div>

        {/* Read Message Button */}
        <motion.button
          onClick={handleReadMessage}
          className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold py-3 px-8 sm:py-4 sm:px-12 rounded-2xl text-lg sm:text-xl shadow-2xl flex items-center gap-3 mx-auto"
          whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255, 255, 255, 0.3)" }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Read Message ❤️
        </motion.button>
      </motion.div>
    </div>
  );
}
