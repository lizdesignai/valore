// src/components/global/GlassPanel.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
  /** Ativa o efeito de levitação e brilho ao passar o mouse */
  hoverEffect?: boolean;
}

/**
 * GlassPanel - Unidade Atômica de Design Espectral VALORE
 * 
 * Implementa o Glassmorphism de alta fidelidade do Atelier.
 * Utiliza sombras multi-camadas (Umbra/Penumbra) e refratariedade cromática.
 */
export default function GlassPanel({ 
  children, 
  className, 
  hoverEffect = false 
}: GlassPanelProps): React.JSX.Element {
  
  return (
    <motion.div
      // Se hoverEffect for true, aplicamos a micro-interação de levitação
      whileHover={hoverEffect ? { 
        y: -5, 
        scale: 1.005,
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } 
      } : {}}
      className={cn(
        // Base de Vidro: Opacidade de luxo e blur massivo
        "glass-panel relative overflow-hidden",
        
        // Refração: O brilho na borda superior que simula luz incidindo no vidro
        "before:absolute before:inset-0 before:p-[1px]",
        "before:bg-gradient-to-br before:from-white/40 before:via-transparent before:to-white/10",
        "before:rounded-[inherit] before:pointer-events-none before:[mask-image:linear-gradient(white,white)_content-box,linear-gradient(white,white)] before:[mask-composite:exclude]",
        
        className
      )}
    >
      {/* 
        Injeção de Brilho Dinâmico (Inner Glow)
        Cria a sensação de profundidade interna no painel.
      */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] to-white/[0.08] pointer-events-none" />
      
      {/* Conteúdo do Painel */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}