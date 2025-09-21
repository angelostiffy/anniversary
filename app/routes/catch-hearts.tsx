import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";

export function meta() {
  return [
    { title: "For my Baby Girl ❤️" },
    { name: "description", content: "A special anniversary message for you!" },
  ];
}

interface Heart {
  id: number;
  x: number;
  y: number;
  size: number;
}

export default function CatchHearts() {
  const navigate = useNavigate();
  const [hearts, setHearts] = useState<Heart[]>([]);
  const [caughtHearts, setCaughtHearts] = useState<number[]>([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameFailed, setGameFailed] = useState(false);

  const totalHearts = 8;

  useEffect(() => {
    if (gameStarted && hearts.length === 0) {
      // Generate 8 hearts at random positions
      const newHearts: Heart[] = [];
      for (let i = 0; i < totalHearts; i++) {
        newHearts.push({
          id: i,
          x: Math.random() * 70 + 15, // 15-85% to keep within bounds
          y: Math.random() * 70 + 15, // 15-85% to keep within bounds
          size: Math.random() * 15 + 25, // 25-40px for better visibility
        });
      }
      console.log('Generated hearts:', newHearts);
      setHearts(newHearts);
    }
  }, [gameStarted, totalHearts]);

  useEffect(() => {
    if (caughtHearts.length === totalHearts && !gameCompleted) {
      setGameCompleted(true);
      setTimeout(() => {
        setShowSuccess(true);
      }, 500);
    }
  }, [caughtHearts.length, gameCompleted]);

  // Timer effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (gameStarted && timeLeft > 0 && !gameCompleted) {
      timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0 && !gameCompleted) {
      setGameFailed(true);
    }
    return () => clearTimeout(timer);
  }, [gameStarted, timeLeft, gameCompleted]);

  const handleHeartClick = (heartId: number) => {
    if (!caughtHearts.includes(heartId)) {
      setCaughtHearts([...caughtHearts, heartId]);
    }
  };

  const handleStartGame = () => {
    console.log('Starting game...');
    setGameStarted(true);
    setTimeLeft(30);
    setGameFailed(false);
    setCaughtHearts([]);
    setGameCompleted(false);
    setShowSuccess(false);
    setHearts([]); // Reset hearts to trigger generation
  };

  const handleRetry = () => {
    setGameStarted(false);
    setGameFailed(false);
    setCaughtHearts([]);
    setGameCompleted(false);
    setShowSuccess(false);
    setTimeLeft(30);
    setHearts([]);
  };

  const handleContinue = () => {
    navigate("/gallery");
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
        {/* Title */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-6 sm:mb-8 px-4"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Catch the Hearts
        </motion.h1>

        {/* Instructions */}
        <motion.p
          className="text-lg sm:text-xl text-white mb-8 sm:mb-12 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Tap 8 little hearts to unlock our next memory ❤️
        </motion.p>

        {/* Game Area */}
        <div className="relative w-full max-w-md mx-auto h-80 sm:h-96 bg-black/20 rounded-2xl border-2 border-white/20 mb-8 sm:mb-12 overflow-hidden">
          {!gameStarted ? (
            <motion.button
              onClick={handleStartGame}
              className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-xl sm:text-2xl rounded-2xl"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Game
            </motion.button>
          ) : gameFailed ? (
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-red-900/50 to-purple-900/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="text-6xl mb-4">💔</div>
              <h3 className="text-2xl font-bold text-white mb-4">Time's Up!</h3>
              <p className="text-white/80 mb-6">You caught {caughtHearts.length}/{totalHearts} hearts</p>
              <motion.button
                onClick={handleRetry}
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold py-3 px-8 rounded-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Catch my hearts again
              </motion.button>
            </motion.div>
          ) : (
            <>
              {/* Debug info */}
              {hearts.length === 0 && gameStarted && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white">
                  <div className="text-center">
                    <div className="text-2xl mb-2">💖</div>
                    <div>Generating hearts...</div>
                  </div>
                </div>
              )}
              
              {/* Hearts */}
              <AnimatePresence>
                {hearts.map((heart) => (
                  <motion.div
                    key={heart.id}
                    className="absolute cursor-pointer touch-manipulation"
                    style={{
                      left: `${heart.x}%`,
                      top: `${heart.y}%`,
                      width: `${heart.size}px`,
                      height: `${heart.size}px`,
                      minWidth: '32px',
                      minHeight: '32px',
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: caughtHearts.includes(heart.id) ? 0 : 1,
                      scale: caughtHearts.includes(heart.id) ? 0 : 1,
                    }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    onClick={() => handleHeartClick(heart.id)}
                    transition={{ duration: 0.3 }}
                  >
                    <FaHeart 
                      className="w-full h-full text-red-500 drop-shadow-lg"
                      style={{
                        filter: caughtHearts.includes(heart.id) 
                          ? "grayscale(100%) opacity(0)" 
                          : "drop-shadow(0 0 8px rgba(255, 0, 0, 0.8))",
                        animation: caughtHearts.includes(heart.id) ? 'none' : 'pulse 2s infinite'
                      }}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Progress and Timer */}
              <div className="absolute top-4 left-4 bg-black/50 text-white px-4 py-2 rounded-full">
                {caughtHearts.length}/{totalHearts} hearts caught
              </div>
              <div className="absolute top-4 right-4 bg-black/50 text-white px-4 py-2 rounded-full">
                ⏰ {timeLeft}s
              </div>
            </>
          )}
        </div>

        {/* Success Message */}
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="mb-8"
            >
              <motion.h2
                className="text-6xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 0.5, repeat: 2 }}
              >
                Perfect!
              </motion.h2>
              <motion.p
                className="text-2xl text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Yayyy! You caught them all, Bulf ❤️
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Continue Button */}
        {showSuccess && (
          <motion.button
            onClick={handleContinue}
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold py-3 px-8 sm:py-4 sm:px-12 rounded-2xl text-lg sm:text-xl shadow-2xl flex items-center gap-3 mx-auto"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255, 255, 255, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Continue to Gallery ➡️
          </motion.button>
        )}
      </motion.div>
    </div>
  );
}
