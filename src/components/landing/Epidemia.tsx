// src/components/landing/Epidemia.tsx
"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Microscope, Brain } from "lucide-react";

/**
 * Seção 2: A Epidemia e a Prova Científica
 * * Design: Fundo claro (creme), tipografia espaçada, foco absoluto em autoridade.
 * Objetivo: Conscientizar o lead sobre a "vergonha silenciosa" e ancorar a dor
 * em provas científicas irrefutáveis (Princeton e Stanford).
 */
export default function Epidemia(): React.ReactElement {
  
  // Variantes para animação em cascata (Stagger Effect)
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  return (
    <section className="relative py-24 md:py-40 bg-[var(--color-atelier-creme)] text-[var(--color-atelier-grafite)] overflow-hidden">
      
      {/* Elemento de background sutil para profundidade */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--color-atelier-madeira)]/5 to-transparent pointer-events-none" />

      <div className="vrtice-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* ==========================================
              LADO ESQUERDO: A NARRATIVA DA DOR
              ========================================== */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ staggerChildren: 0.15 }}
              className="flex flex-col"
            >
              <motion.span
                variants={textVariants}
                className="font-roboto text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-bold mb-6 text-[var(--color-atelier-terracota)]"
              >
                A PATOLOGIA DA INVISIBILIDADE
              </motion.span>

              <motion.h2
                variants={textVariants}
                className="font-elegant text-3xl md:text-5xl lg:text-6xl leading-[1.1] mb-10 text-[var(--color-luxury-void)]"
              >
                A vergonha silenciosa que está <br className="hidden md:block" />
                <span className="text-[var(--color-atelier-terracota)] italic">destruindo o seu lucro.</span>
              </motion.h2>

              <div className="space-y-6 text-[1.05rem] md:text-[1.15rem] leading-relaxed font-light opacity-90">
                <motion.p variants={textVariants}>
                  Nós sabemos o que acontece quando você abre o seu próprio Instagram.
                </motion.p>
                
                <motion.p variants={textVariants}>
                  O sentimento é de um desconforto profundo. Você sabe que tem talento. Você estudou anos. Você entrega um resultado real para quem confia em você.
                </motion.p>

                <motion.p variants={textVariants} className="font-medium text-[var(--color-luxury-void)] text-xl italic py-2">
                  Mas o seu visual grita improviso.
                </motion.p>

                <motion.p variants={textVariants}>
                  E o que realmente assombra as suas madrugadas não é a falta de clientes. É a injustiça. É ver influenciadoras e concorrentes medianas sendo tratadas como autoridades absolutas, cobrando valores que você hesita em pedir.
                </motion.p>

                <motion.div variants={textVariants} className="pt-4">
                  <div className="inline-flex items-center gap-4 text-[var(--color-atelier-terracota)] font-bold uppercase tracking-widest text-[10px] md:text-xs">
                    <div className="w-8 h-[1px] bg-current" />
                    Elas não são mais inteligentes que você. Elas apenas sequestraram os códigos visuais de status primeiro.
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* ==========================================
              LADO DIREITO: A PROVA CIENTÍFICA
              ========================================== */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="space-y-8 relative">
              
              {/* Conector visual sutil */}
              <div className="hidden lg:block absolute -left-12 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-[var(--color-atelier-terracota)]/20 to-transparent" />

              <h4 className="font-roboto text-xs font-bold uppercase tracking-[0.3em] mb-8 text-[var(--color-atelier-madeira)]">
                A Biologia da Atenção
              </h4>

              {/* Card Estudo 1: Princeton */}
              <motion.div
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={cardVariants}
                className="bg-white/40 border border-white/60 p-8 rounded-3xl shadow-[0_20px_40px_rgba(173,111,64,0.05)] backdrop-blur-md"
              >
                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-[var(--color-atelier-terracota)]/10 flex items-center justify-center text-[var(--color-atelier-terracota)] mt-1">
                    <Brain size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h5 className="font-bold text-[11px] uppercase tracking-widest mb-3 text-[var(--color-atelier-madeira)]">UNIVERSIDADE DE PRINCETON</h5>
                    <p className="text-sm md:text-base leading-relaxed text-[var(--color-atelier-grafite)]">
                      Pesquisadores provam que o cérebro humano leva apenas <span className="font-bold text-[var(--color-luxury-void)]">um décimo de segundo</span> para julgar a sua confiabilidade pela sua estética.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Card Estudo 2: Stanford */}
              <motion.div
                custom={2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={cardVariants}
                className="bg-white/40 border border-white/60 p-8 rounded-3xl shadow-[0_20px_40px_rgba(173,111,64,0.05)] backdrop-blur-md"
              >
                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-[var(--color-atelier-madeira)]/10 flex items-center justify-center text-[var(--color-atelier-madeira)] mt-1">
                    <Microscope size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h5 className="font-bold text-[11px] uppercase tracking-widest mb-3 text-[var(--color-atelier-madeira)]">UNIVERSIDADE DE STANFORD</h5>
                    <p className="text-sm md:text-base leading-relaxed text-[var(--color-atelier-grafite)]">
                      Um estudo revelou que <span className="font-bold text-[var(--color-luxury-void)]">75% das pessoas</span> definem a credibilidade de um negócio baseados puramente no design.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Conclusão Biológica (Efeito Halo) */}
              <motion.div
                custom={3}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={cardVariants}
                className="pt-6"
              >
                <div className="p-8 border-l-2 border-[var(--color-atelier-terracota)]/40 bg-[var(--color-atelier-terracota)]/5 rounded-r-3xl">
                  <p className="text-sm md:text-base leading-relaxed mb-4 text-[var(--color-atelier-grafite)]">
                    O mercado é frio e instintivo. Ele julga a sua embalagem antes de provar o seu conteúdo.
                  </p>
                  <p className="font-elegant text-lg md:text-xl italic text-[var(--color-luxury-void)] leading-relaxed">
                    "As suas concorrentes acionaram o <strong className="text-[var(--color-atelier-terracota)] font-bold">Efeito Halo</strong>: um atalho do cérebro que assume que, se a sua estética é impecável e sofisticada, a sua competência técnica também é."
                  </p>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}