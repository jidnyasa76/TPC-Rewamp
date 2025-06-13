import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; // or use any icon you prefer
import { motion } from "framer-motion";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button after scrolling down
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <motion.button
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-gray-600 text-white p-3 rounded-full shadow-lg transition-all duration-300"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    )
  );
};

export default ScrollToTopButton;
