// src/components/global/ClientWrapper.tsx
"use client";

import React, { useState, useEffect } from "react";
import { StoreProvider } from "../../contexts/StoreContext";
import { AnimatePresence, motion } from "framer-motion";
import Preloader from "./Preloader";

/**
 * ClientWrapper - Gerenciador de Estado e Animações
 * 
 * Conservamos aqui toda a lógica client-side (useState, useEffect)
 * para libertar o RootLayout para funções de servidor (SEO e GTM).
 */
export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    // Simulando calibração de sistemas e carregamento de assets de luxo
    const timer = setTimeout(() => setIsInitializing(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <StoreProvider>
      <AnimatePresence mode="wait">
        {isInitializing && <Preloader key="preloader" />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isInitializing ? 0 : 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative min-h-screen"
      >
        {/* Sombras e Iluminação de Fundo Globais */}
        <div className="fixed top-[-10%] left-[-5%] w-[500px] h-[500px] bg-[var(--color-atelier-terracota)]/5 blur-[120px] rounded-full pointer-events-none -z-10" />
        <div className="fixed bottom-[-15%] right-[-10%] w-[600px] h-[600px] bg-[var(--color-atelier-rose)]/10 blur-[150px] rounded-full pointer-events-none -z-10" />

        <main className="w-full h-full relative z-10">
          {children}
        </main>
      </motion.div>
    </StoreProvider>
  );
}