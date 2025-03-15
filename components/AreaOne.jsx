"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Area1() {
  const greetings = [
    "hello",    // English
    "hola",     // Spanish
    "bonjour",  // French
    "ciao",     // Italian
    "hallo",    // German
  ];

  const [currentGreeting, setCurrentGreeting] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 3000); // Change greeting every 3 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div className="top-28 xl:top-20 relative min-h-screen flex flex-col items-baseline ml-8 xl:ml-10">
      <motion.p
        className="text-[16vw] xl:text-[14vw] leading-tight xl:leading-none font-medium"
        key={currentGreeting}
        initial={{ opacity: 0, rotateX: -60 }}
        animate={{ opacity: 1, rotateX: 0 }}
        exit={{ opacity: 0, rotateX: 60 }}
        transition={{ duration: 1 }}
      >
        {greetings[currentGreeting]}
      </motion.p>
      <p className="text-[16vw] xl:text-[14vw] leading-tight xl:leading-none font-medium">
        I'm Pranav!
      </p>
    </div>
  );
}
