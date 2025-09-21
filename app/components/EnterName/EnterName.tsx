import { useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router";

export function EnterName() {
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const allowedNames = ["Neri", "Neri Mae", "Neri Mae Halos"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      const trimmedName = name.trim();
      const isValidName = allowedNames.some(allowedName => 
        trimmedName.toLowerCase() === allowedName.toLowerCase()
      );
      
      if (isValidName) {
        setIsSubmitted(true);
        setTimeout(() => {
          navigate("/welcome");
        }, 1000);
      } else {
        setShowError(true);
        setTimeout(() => {
          setShowError(false);
        }, 3000);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-purple-800 flex items-center justify-center relative overflow-hidden p-4 sm:p-6 md:p-8">
      {/* Animated background stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
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
        className="text-center z-10 w-full max-w-md mx-auto px-4"
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-6 sm:mb-8"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundSize: "200% 200%",
          }}
        >
          A Special Message For You
        </motion.h1>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="bg-gradient-to-br from-purple-600 to-pink-600 p-6 sm:p-8 rounded-3xl shadow-2xl max-w-md mx-auto"
        >
          <div className="text-white text-2xl mb-6">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-3">
                <span className="text-red-500 text-2xl">💌</span>
              </div>
            </div>
            <div className="font-bold text-2xl sm:text-3xl mb-2">For You, My Lovely Bulf</div>
            <div className="text-base sm:text-lg opacity-90">Click to read my message</div>
          </div>

          <motion.form onSubmit={handleSubmit} className="space-y-4">
            <motion.input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name..."
              className="w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-400"
              whileFocus={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <motion.button
              type="submit"
              disabled={!name.trim()}
              className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {isSubmitted ? "Loading..." : "Start Our Journey"}
            </motion.button>
          </motion.form>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: showError ? 1 : 0, 
              y: showError ? 0 : 20 
            }}
            transition={{ duration: 0.3 }}
            className={`mt-4 p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-300 text-center ${
              showError ? 'block' : 'hidden'
            }`}
          >
            <motion.div
              animate={{ 
                scale: showError ? [1, 1.1, 1] : 1 
              }}
              transition={{ duration: 0.5 }}
              className="text-lg font-bold"
            >
              You are not the one 😠
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
