// src/components/landing/DelayWrapper.tsx
"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useVSLDelay } from "../../hooks/useVSLDelay";

interface DelayWrapperProps {
  children: React.ReactNode;
  delayInSeconds: number;
}

/**
 * DelayWrapper - O Maestro de Retenção VALLORE.
 * 
 * Controla a revelação da Fase 2 da Landing Page. Alimentado pelo hook 
 * useVSLDelay, tornando-o inteligente e conectado à memória (localStorage).
 */
export default function DelayWrapper({ children, delayInSeconds }: DelayWrapperProps): React.ReactElement {
  
  // O nosso hook devolve verdadeiro ou falso com base no tempo e na memória
  const isVisible = useVSLDelay(delayInSeconds);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          id="phase-2-content"
          initial={{ opacity: 0, y: 30, filter: "blur(15px)" }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            filter: "blur(0px)",
            transition: {
              duration: 1.8,
              ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
            }
          }}
          className="relative w-full"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}