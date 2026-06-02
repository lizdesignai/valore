// src/components/landing/AtelierAccess.tsx
"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Activity, CheckCircle2, Layers, Lock, ShieldCheck, Eye } from "lucide-react";

/**
 * Seção 5: O ATELIER (A BLINDAGEM DO PROCESSO)
 * 
 * Design: Fundo claro (Creme) com luzes Rosé. Mockup Glassmorphism suave.
 * Objetivo: Materializar o processo invisível e quebrar a objeção de "falta de tempo",
 * mostrando que a cliente terá zero esforço operacional.
 */
export default function AtelierAccess(): React.ReactElement {
  
  // Variantes para Animação em Cascata dos Textos
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  // Variantes para os elementos do "Dashboard" simulado
  const telemetryVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
      }
    }
  };

  const lineVariants: Variants = {
    hidden: { scaleX: 0 },
    visible: { 
      scaleX: 1, 
      transition: { duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" as const } 
    }
  };

  return (
    <section className="relative py-24 md:py-40 bg-[var(--color-atelier-creme)] text-[var(--color-atelier-grafite)] overflow-hidden">
      
      {/* Luzes de Fundo de Precisão (Acolhimento Feminino) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-[-10%] w-[600px] h-[600px] bg-[var(--color-atelier-rose)]/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-[var(--color-atelier-terracota)]/5 blur-[120px] rounded-full" />
      </div>

      <div className="vrtice-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* ==========================================
              LADO ESQUERDO: CONTEÚDO ESTRATÉGICO
              ========================================== */}
          <div className="lg:col-span-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ staggerChildren: 0.15 }}
              className="flex flex-col"
            >
              <motion.div variants={textVariants} className="flex items-center gap-3 mb-8">
                <ShieldCheck size={18} className="text-[var(--color-atelier-terracota)]" />
                <span className="font-roboto text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-bold text-[var(--color-atelier-terracota)]">
                  A BLINDAGEM DO PROCESSO
                </span>
              </motion.div>

              <motion.h2
                variants={textVariants}
                className="font-elegant text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-10 text-[var(--color-luxury-void)]"
              >
                Onde a sua ansiedade estética morre: <br />
                <span className="text-[var(--color-atelier-madeira)] italic">Conheça o Atelier.</span>
              </motion.h2>

              <div className="space-y-6 text-[1.05rem] md:text-[1.15rem] leading-relaxed font-light opacity-90 text-[var(--color-atelier-grafite)]">
                <motion.p variants={textVariants}>
                  Esqueça a necessidade de entender de design, as pastas bagunçadas no Drive ou os briefings gigantescos que fazem você trabalhar mais do que a própria equipe contratada.
                </motion.p>
                
                <motion.p variants={textVariants} className="font-medium text-[var(--color-luxury-void)]">
                  A orquestração do Vallore acontece exclusivamente dentro da nossa plataforma proprietária: <span className="text-[var(--color-atelier-terracota)] font-bold">o Atelier.</span>
                </motion.p>
                
                <motion.p variants={textVariants}>
                  O Atelier atua como o seu <strong>dashboard de telemetria</strong>. Um ambiente isolado e livre de distrações, onde você acompanha a ascensão da sua marca em tempo real, valida o refinamento visual com um clique e recebe seus ativos com extrema clareza.
                </motion.p>

                <motion.div 
                  variants={textVariants}
                  className="pt-6 mt-6 border-t border-[var(--color-atelier-madeira)]/20"
                >
                  <p className="font-elegant text-2xl italic text-[var(--color-luxury-void)]">
                    "Nós assumimos o peso tático. Você apenas opera o sistema e observa a sua nova marca nascer."
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* ==========================================
              LADO DIREITO: MOCKUP DO ATELIER (UI DE LUXO)
              ========================================== */}
          <div className="lg:col-span-6 relative">
            
            {/* Elemento de profundidade atrás do mockup */}
            <div className="absolute top-10 -right-10 w-full h-full border border-[var(--color-atelier-terracota)]/20 rounded-[2.5rem] -z-10" />

            <motion.div
              variants={telemetryVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="relative glass-panel bg-white/40 p-6 md:p-10 shadow-[0_40px_100px_rgba(173,111,64,0.1)] border border-white/60 rounded-[2.5rem] backdrop-blur-2xl"
            >
              {/* Top Bar do Mockup */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-[var(--color-atelier-grafite)]/10">
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-atelier-rose)]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-atelier-madeira)]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-atelier-terracota)]" />
                </div>
                <div className="text-[9px] font-bold uppercase tracking-[0.3em] opacity-50 flex items-center gap-2 text-[var(--color-luxury-void)]">
                  <Lock size={12} /> SECURE SERVER: ATELIER_V4
                </div>
              </div>

              {/* Grid Interno do Dashboard */}
              <div className="grid grid-cols-2 gap-4 md:gap-5">
                
                {/* Módulo de Status */}
                <div className="col-span-2 h-32 bg-white/60 border border-white/40 rounded-2xl p-6 relative overflow-hidden shadow-sm">
                  <div className="flex justify-between items-start relative z-10">
                    <div>
                      <p className="font-roboto text-[10px] font-bold uppercase tracking-widest text-[var(--color-atelier-terracota)] mb-1">Status da Marca</p>
                      <h4 className="font-elegant text-2xl md:text-3xl text-[var(--color-luxury-void)]">Arquitetura em Curso</h4>
                    </div>
                    <div className="text-right">
                      <p className="font-elegant text-3xl md:text-4xl text-[var(--color-luxury-void)]">84%</p>
                    </div>
                  </div>
                  {/* Linha de Progresso Animada */}
                  <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[var(--color-atelier-terracota)]/10">
                    <motion.div 
                      initial={{ width: "0%" }}
                      whileInView={{ width: "84%" }}
                      transition={{ duration: 2.5, delay: 0.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-[var(--color-atelier-madeira)] to-[var(--color-atelier-terracota)]" 
                    />
                  </div>
                </div>

                {/* Módulo de Validação */}
                <div className="h-40 bg-white/60 border border-white/40 rounded-2xl p-5 shadow-sm flex flex-col justify-between hover:bg-white/80 transition-colors cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-atelier-terracota)]/10 flex items-center justify-center text-[var(--color-atelier-terracota)]">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <p className="font-roboto text-[9px] font-bold uppercase tracking-widest text-[var(--color-atelier-grafite)] mb-1.5">Aprovação</p>
                    <p className="text-xs md:text-sm font-medium leading-tight text-[var(--color-luxury-void)]">Validação com 1 Clique</p>
                  </div>
                </div>

                {/* Módulo de Visualização Escura (Contraste interno) */}
                <div className="h-40 bg-[var(--color-luxury-void)] rounded-2xl p-5 text-[#fbf4e4] relative overflow-hidden shadow-lg flex flex-col justify-between group cursor-pointer">
                  <div>
                    <p className="font-roboto text-[9px] font-bold uppercase tracking-widest text-[var(--color-atelier-rose)] mb-1.5">Ativos</p>
                    <p className="text-xs md:text-sm font-medium leading-tight text-white/90">Visualização de Render</p>
                  </div>
                  
                  {/* Linhas de simulação de código/render */}
                  <div className="space-y-2 mt-auto">
                    {[1, 2, 3].map((_, i) => (
                      <motion.div 
                        key={i} 
                        variants={lineVariants}
                        className="h-[2px] bg-[var(--color-atelier-terracota)]/40 w-full rounded-full" 
                      />
                    ))}
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <Eye size={20} className="text-[var(--color-atelier-rose)] group-hover:scale-110 transition-transform" />
                  </div>
                </div>

              </div>

              {/* Botão de Telemetria Fictício */}
              <div className="mt-8 flex justify-center">
                <div className="font-roboto text-[10px] font-bold uppercase tracking-[0.3em] py-3 px-8 rounded-full border border-[var(--color-atelier-terracota)]/30 text-[var(--color-atelier-terracota)] hover:bg-[var(--color-atelier-terracota)] hover:text-white transition-colors cursor-default">
                  Ambiente Isolado
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}