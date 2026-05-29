// src/components/global/CustomCursor.tsx
"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

/**
 * CustomCursor - O Rastro de Autoridade VALORE
 * 
 * Adiciona uma camada de profundidade retinal ao desktop.
 * Implementa física de mola (Spring) para um movimento fluido e orgânico.
 * Desativa-se automaticamente em dispositivos touch para preservar a usabilidade.
 */
export default function CustomCursor(): React.JSX.Element | null {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isHovering, setIsHovering] = useState<boolean>(false);

  // Motion Values para posição bruta do mouse
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Configuração de Mola (Spring): O segredo da fluidez "Boutique"
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Detecta se é dispositivo móvel ou touch
    const checkDevice = () => {
      setIsMobile(window.matchMedia("(pointer: coarse)").matches);
    };

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    // Detecta se o mouse está sobre elementos interativos
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('button') || 
        target.getAttribute('role') === 'button';
      
      setIsHovering(!!isInteractive);
    };

    checkDevice();
    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  // Não renderiza nada se for mobile para evitar bugs de toque
  if (isMobile) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* 
        O "Glow" Espectral: 
        Um rastro suave que cria contraste dinâmico sobre fundos escuros.
      */}
      <motion.div
        style={{
          translateX: smoothX,
          translateY: smoothY,
          x: "-50%",
          y: "-50%",
        }}
        animate={{
          width: isHovering ? 60 : 30,
          height: isHovering ? 60 : 30,
          backgroundColor: isHovering ? "rgba(173, 111, 64, 0.15)" : "rgba(201, 163, 155, 0.1)",
          boxShadow: isHovering 
            ? "0 0 30px 10px rgba(173, 111, 64, 0.2)" 
            : "0 0 20px 5px rgba(201, 163, 155, 0.1)",
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-full blur-xl border border-white/5"
      />

      {/* 
        A Micro-Ponta (Opcional): 
        Já definimos um cursor via CSS url no globals.css. 
        Este componente serve para adicionar o rastro de luz e o feedback de hover.
      */}
    </div>
  );
}