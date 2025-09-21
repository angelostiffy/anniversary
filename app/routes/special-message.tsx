import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { useState } from "react";

export function meta() {
  return [
    { title: "For my Baby Girl ❤️" },
    { name: "description", content: "A special anniversary message for you!" },
  ];
}

export default function SpecialMessage() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleReadMessage = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSendLove = () => {
    navigate("/final-message");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-indigo-900 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated background stars */}
      <div className="absolute inset-0">
        {[...Array(70)].map((_, i) => (
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
          className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-12"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          A Special Message For You
        </motion.h1>

        {/* Message Box */}
        <motion.div
          className="bg-gradient-to-br from-purple-600 to-pink-600 p-12 rounded-3xl shadow-2xl max-w-2xl mx-auto cursor-pointer"
          whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(255, 255, 255, 0.2)" }}
          whileTap={{ scale: 0.98 }}
          onClick={handleReadMessage}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {/* Envelope Icon */}
          <motion.div
            className="flex justify-center mb-6"
            animate={{
              y: [0, -5, 0],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center relative">
              <div className="text-3xl">💌</div>
              <div className="absolute -top-1 -right-1 text-2xl">❤️</div>
            </div>
          </motion.div>

          {/* Personalized Text */}
          <motion.div
            className="text-white text-3xl font-bold mb-4"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              background: "linear-gradient(90deg, #ff6b9d, #c44569, #ff6b9d)",
              backgroundSize: "200% 200%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            For You, My Baby Girl
          </motion.div>

          {/* Instruction */}
          <div className="text-white/80 text-lg">
            Click to read my message
          </div>
        </motion.div>
      </motion.div>

      {/* Modal */}
      {showModal && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleCloseModal}
        >
          <motion.div
            className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-hidden relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-white text-2xl hover:text-pink-400 transition-colors"
            >
              ×
            </button>

            {/* Header */}
            <div className="text-center mb-6">
              <h2 className="text-4xl font-bold text-pink-400 mb-2">Happy Anniversary!</h2>
              <p className="text-white/80">This is just for you ♥</p>
            </div>

            {/* Message Content */}
            <div className="text-white space-y-4 max-h-96 overflow-y-auto pr-4">
              <p className="text-lg font-semibold">My Dearest Baby Girl,</p>
              <p>
                Every day with you feels like a beautiful dream that I never want to wake up from. 
                You've brought so much joy, laughter, and warmth into my life that I can't imagine 
                a world without you in it.
              </p>
              <p>
                From the moment we first met, I knew there was something special about you. 
                Your smile lights up my darkest days, your laugh is my favorite sound in the world, 
                and your love has made me a better person.
              </p>
              <p>
                Thank you for being my partner, my best friend, and my greatest love. 
                Thank you for all the little moments that make up our beautiful story together.
              </p>
              <p>
                Here's to many more years of love, laughter, and adventures together. 
                I love you more than words can express.
              </p>
              <p className="text-pink-400 font-semibold">Forever yours, ❤️</p>
            </div>

            {/* Send Love Button */}
            <motion.button
              onClick={handleSendLove}
              className="w-full mt-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold py-4 rounded-xl"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Love ♥
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
