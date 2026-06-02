// src/components/landing/Founder.tsx
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

// ==========================================
// 1. LÓGICA DO MOSAICO DE FUNDO (MATRIZ VIVA)
// ==========================================
const BASE_LOGOS = Array.from({ length: 20 }, (_, i) => `${i + 1}`);
const DUP_LOGOS = BASE_LOGOS.map(l => `${l}_dup`); 
const EMPTY_SLOTS = Array.from({ length: 9 }, (_, i) => `empty_${i}`); 
const ALL_ITEMS = [...BASE_LOGOS, ...DUP_LOGOS, ...EMPTY_SLOTS];

function shuffleArray(array: string[]) {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

/**
 * BackgroundMosaic
 * Roda silenciosamente ao fundo, criando o efeito de "Ecossistema" 
 * através de marcas que entram e saem de foco.
 */
function BackgroundMosaic() {
  const [grid, setGrid] = useState<string[]>([]);
  const [depths, setDepths] = useState<Record<string, { scale: number, blur: number, opacity: number }>>({});

  useEffect(() => {
    setGrid(shuffleArray(ALL_ITEMS));

    const depthMap: Record<string, any> = {};
    ALL_ITEMS.forEach(item => {
      if (!item.startsWith('empty')) {
        const layer = Math.random();
        // Calibrado para ser muito sutil, não competindo com o texto principal
        if (layer < 0.33) depthMap[item] = { scale: 0.5, blur: 8, opacity: 0.03 }; 
        else if (layer < 0.66) depthMap[item] = { scale: 0.8, blur: 4, opacity: 0.06 }; 
        else depthMap[item] = { scale: 1.1, blur: 2, opacity: 0.1 }; 
      }
    });
    setDepths(depthMap);

    const interval = setInterval(() => {
      setGrid(prevGrid => {
        const newGrid = [...prevGrid];
        const filledIds: number[] = [];
        const emptyIds: number[] = [];
        
        newGrid.forEach((val, i) => {
          if (val.startsWith('empty')) emptyIds.push(i);
          else filledIds.push(i);
        });

        for(let k = 0; k < 6; k++) {
          if(filledIds.length === 0 || emptyIds.length === 0) break;
          const fIdx = Math.floor(Math.random() * filledIds.length);
          const eIdx = Math.floor(Math.random() * emptyIds.length);
          
          const gridFIdx = filledIds[fIdx];
          const gridEIdx = emptyIds[eIdx];

          const temp = newGrid[gridFIdx];
          newGrid[gridFIdx] = newGrid[gridEIdx];
          newGrid[gridEIdx] = temp;

          filledIds.splice(fIdx, 1);
          emptyIds.splice(eIdx, 1);
        }
        return newGrid;
      });
    }, 2500); 

    return () => clearInterval(interval);
  }, []);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.style.display = 'none'; 
  };

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 grid grid-cols-7 grid-rows-7 p-4 md:p-12 items-center justify-items-center opacity-40">
        {grid.map((item, index) => (
          <div key={index} className="flex items-center justify-center relative w-full h-full">
            <AnimatePresence mode="wait">
              {item && !item.startsWith('empty') && (
                <motion.img
                  layout
                  key={item}
                  // CORREÇÃO: Forçando a extensão .svg conforme a sua estrutura
                  src={`/images/login/${item.replace('_dup', '')}.svg`}
                  onError={handleImageError}
                  initial={{ opacity: 0, filter: 'blur(20px) grayscale(100%) brightness(200%)' }}
                  animate={{ 
                    opacity: depths[item]?.opacity, 
                    filter: `blur(${depths[item]?.blur}px) grayscale(100%) brightness(200%)`, 
                    scale: depths[item]?.scale
                  }}
                  exit={{ opacity: 0, filter: 'blur(20px) grayscale(100%)' }}
                  transition={{ 
                    layout: { type: "spring", stiffness: 40, damping: 20 },
                    opacity: { duration: 2 },
                    filter: { duration: 2 }
                  }}
                  className="absolute max-w-[50%] max-h-[50%] object-contain mix-blend-overlay"
                  alt=""
                />
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
      {/* Máscara de gradiente para fundir o mosaico com o Luxury Void */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--color-luxury-void)_90%)]" />
    </div>
  );
}

// ==========================================
// 2. COMPONENTE PRINCIPAL (A AUTORIDADE)
// ==========================================
export default function Founder(): React.ReactElement {
  return (
    <section className="relative py-24 md:py-48 bg-[var(--color-luxury-void)] text-[#fbf4e4] overflow-hidden">
      
      {/* O Mosaico Dinâmico roda ao fundo */}
      <BackgroundMosaic />

      <div className="vrtice-container relative z-10">
        
        {/* Etiqueta Superior (Overline) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-[var(--color-atelier-terracota)]/20 bg-[var(--color-atelier-terracota)]/5 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[var(--color-atelier-terracota)] animate-pulse" />
            <span className="font-roboto text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-bold text-[var(--color-atelier-rose)]">
              A ARQUITETA DA PERCEPÇÃO
            </span>
          </div>
        </motion.div>

        {/* O Cartão Principal (Glassmorphism de Alto Contraste) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-6xl mx-auto glass-panel border border-white/5 bg-white/[0.02] p-0 overflow-hidden flex flex-col md:flex-row shadow-[0_60px_120px_rgba(0,0,0,0.8)]"
        >
          {/* Lado Esquerdo: Fotografia */}
          <div className="w-full md:w-2/5 relative min-h-[400px] md:min-h-[600px] bg-[#1a1a1a]">
            <img 
<<<<<<< HEAD
              src="/images/liz-profile.JPG" 
              alt="Liz - Diretora Criativa" 
              className="absolute inset-0 w-full h-full object-cover object-center grayscale opacity-80 mix-blend-luminosity hover:grayscale-0 transition-all duration-1000"
=======
              src="/images/liz-profile.jpg" 
              alt="Liz - Diretora de Posicionamento" 
              className="absolute inset-0 w-full h-full object-cover object-center grayscale opacity-80 mix-blend-luminosity hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
>>>>>>> a59bf33 (.)
            />
            {/* Gradiente interno para fundir a foto ao design escuro */}
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[var(--color-luxury-void)]/90 via-[var(--color-luxury-void)]/30 to-transparent" />
          </div>

          {/* Lado Direito: Copy Cirúrgica */}
          <div className="w-full md:w-3/5 p-10 md:p-16 lg:p-20 flex flex-col justify-center relative">
            <Quote size={40} strokeWidth={1} className="text-[var(--color-atelier-terracota)]/20 absolute top-10 right-10" />
            
            <h3 className="font-elegant text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-2 text-white">
              Liz.
            </h3>
            <p className="font-roboto text-[10px] md:text-xs uppercase tracking-[0.3em] text-[var(--color-atelier-terracota)] font-bold mb-10">
              Diretora de Posicionamento Social & Design Estratégico
            </p>

            <div className="space-y-6 text-sm md:text-base leading-relaxed font-light text-white/70 font-roboto">
              <p>
                O mercado de branding tradicional faliu no momento em que o design se tornou uma commodity. Vi de perto mulheres brilhantes entrarem em exaustão técnica, tentando provar sua capacidade na base do grito, enquanto concorrentes medianas faturavam o triplo apenas por dominarem os códigos visuais de status.
              </p>
              <p>
                A minha missão não é "deixar o seu perfil bonito". Eu construo hierarquia social digital. Ao instalar os nossos protocolos visuais, nós substituímos o seu improviso por uma infraestrutura de percepção implacável. O objetivo é cirúrgico: eliminar a sua necessidade de convencimento e forçar o mercado a presumir o seu sucesso em milissegundos.
              </p>
              
              <div className="pt-4">
                <p className="text-white/90 font-medium italic border-l-2 border-[var(--color-atelier-terracota)] pl-5 py-2">
                  "Se a sua marca parece pequena, o mercado automaticamente assume que a sua competência também é. A minha engenharia garante que a sua presença fale por você antes mesmo do primeiro contato."
                </p>
              </div>
            </div>

            <div className="mt-12 flex items-center gap-6 pt-8 border-t border-white/10">
              <img 
                src="/images/simbolo-rosa.png" 
                alt="LizDesign Logo" 
                className="h-8 object-contain grayscale opacity-50"
              />
              <p className="font-roboto text-[9px] md:text-[10px] uppercase tracking-[0.25em] opacity-40 font-bold">
                Liz Design
              </p>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
