"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const WHATSAPP_URL =
  "https://wa.me/918271754978?text=Hi%20Vizox%20Team%2C%20I%20found%20your%20website%20and%20I%E2%80%99m%20interested%20in%20getting%20help%20with%20my%20project.%20Can%20we%20discuss%20it%3F";

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    fill="currentColor"
    className="w-7 h-7"
    aria-hidden="true"
  >
    <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.83.74 5.5 2.04 7.83L.5 31.5l7.87-2.06A15.42 15.42 0 0016 31.5C24.56 31.5 31.5 24.56 31.5 16S24.56.5 16 .5zm0 28.2a13.6 13.6 0 01-6.93-1.9l-.5-.3-4.67 1.23 1.24-4.56-.33-.52A13.6 13.6 0 1116 28.7zm7.46-10.18c-.41-.21-2.41-1.19-2.79-1.32-.37-.14-.64-.21-.91.2-.27.4-1.05 1.32-1.28 1.59-.24.27-.47.3-.88.1-.41-.21-1.73-.64-3.3-2.03-1.22-1.09-2.04-2.43-2.28-2.84-.24-.41-.03-.63.18-.84.18-.18.41-.47.62-.7.2-.24.27-.41.41-.68.14-.27.07-.5-.03-.7-.1-.21-.91-2.2-1.25-3.01-.33-.79-.66-.68-.91-.69h-.78c-.27 0-.71.1-1.08.5-.37.4-1.41 1.38-1.41 3.36 0 1.98 1.44 3.9 1.64 4.17.2.27 2.84 4.34 6.88 6.08.96.42 1.71.67 2.29.85.96.3 1.84.26 2.53.16.77-.12 2.41-.99 2.75-1.94.34-.95.34-1.76.24-1.94-.1-.17-.37-.27-.78-.48z" />
  </svg>
);

export default function WhatsAppButton() {
  const [showLabel, setShowLabel] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[200] flex flex-col items-end gap-2">
      {/* Tooltip label */}
      <AnimatePresence>
        {showLabel && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="bg-[#111] border border-white/10 text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap"
          >
            💬 Free Consultation on WhatsApp
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Vizox Studio on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [0, 1.15, 1],
          opacity: 1,
          y: [0, -8, 0],
        }}
        transition={{
          scale: { duration: 0.5, ease: "easeOut" },
          opacity: { duration: 0.3 },
          y: { duration: 0.6, delay: 0.5, ease: "easeInOut" },
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => setShowLabel(true)}
        onHoverEnd={() => setShowLabel(false)}
        onFocus={() => setShowLabel(true)}
        onBlur={() => setShowLabel(false)}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_4px_24px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_32px_rgba(37,211,102,0.65)] transition-shadow duration-300"
      >
        <WhatsAppIcon />
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />
      </motion.a>
    </div>
  );
}
