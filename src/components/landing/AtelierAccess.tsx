// src/components/landing/AtelierAccess.tsx
"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Activity, CheckCircle2, Layers, Lock, ShieldCheck } from "lucide-react";

/**
 * Seção 5: O ATELIER (A BLINDAGEM DO PROCESSO)
 * * Design: Fundo off-white com mockup tecnológico.
 * Objetivo: Mostrar a exclusividade do processo via dashboard de telemetria.
 * Erros de fechamento de tags sanados e tipagem unificada.
 */
export default function AtelierAccess(): React.ReactElement {
  
  // Variantes para os elementos do "Dashboard" simulado
  const telemetryVariants: Variants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
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
    <section className="relative py-24 md:py-48 bg-[#fbf4e4] text-[#7a7470] overflow-hidden">
      
      {/* Luzes de Fundo de Precisão */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-[#ad6f40]/5 blur-[100px] rounded-full" />
      </div>

      <div className="vrtice-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Lado Esquerdo: Conteúdo Estratégico */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-[#ad6f40] animate-pulse" />
              <span className="font-roboto text-[10px] md:text-[12px] uppercase tracking-[0.4em] font-bold text-[#9b836b]">
                INFRAESTRUTURA PROPRIETÁRIA
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="font-elegant text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] mb-10 text-[#4a4542]"
            >
              Operação Nível Wall Street: <br />
              <span className="text-[#ad6f40] italic">Conheça o Atelier.</span>
            </motion.h2>

            <div className="space-y-8 text-[1.1rem] leading-relaxed font-light opacity-90">
              <p>
                Esqueça as pastas bagunçadas no Drive, a ansiedade estética e os briefings intermináveis por WhatsApp que fazem você trabalhar mais do que a equipe contratada.
              </p>
              <p className="font-medium text-[#4a4542]">
                Toda a construção do seu protocolo Valore acontece dentro da nossa plataforma proprietária: <span className="text-[#ad6f40]">o Atelier.</span>
              </p>
              
              <div className="pt-6 space-y-6">
                {[
                  { icon: <Activity size={18} />, text: "Dashboard de Telemetria em Tempo Real" },
                  { icon: <CheckCircle2 size={18} />, text: "Aprovação de Etapas com um Clique" },
                  { icon: <Layers size={18} />, text: "Recursos Gráficos Organizados Cirurgicamente" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    className="flex items-center gap-4 text-sm uppercase tracking-widest font-bold border-l border-[#ad6f40]/20 pl-6"
                  >
                    <span className="text-[#ad6f40]">{item.icon}</span>
                    {item.text}
                  </motion.div>
                ))}
              </div>

              <p className="pt-8 text-sm italic opacity-60">
                Você não precisa sujar as mãos com processos. Você apenas opera o sistema de cima.
              </p>
            </div>
          </div>

          {/* Lado Direito: Mockup do Atelier (Telemetria Visual) */}
          <div className="lg:col-span-7">
            <motion.div
              variants={telemetryVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative glass-panel bg-white/80 p-4 md:p-8 shadow-[0_40px_100px_rgba(173,111,64,0.1)] border-white"
            >
              {/* Top Bar do Mockup */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#7a7470]/10">
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#c9a39b]" />
                  <div className="w-2 h-2 rounded-full bg-[#9b836b]" />
                  <div className="w-2 h-2 rounded-full bg-[#ad6f40]" />
                </div>
                <div className="text-[9px] font-bold uppercase tracking-[0.3em] opacity-40 flex items-center gap-2">
                  <Lock size={10} /> SECURE SERVER: ATELIER_V4
                </div>
              </div>

              {/* Grid Interno do Dashboard */}
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 h-32 bg-[#ad6f40]/5 rounded-2xl p-6 relative overflow-hidden">
                  <div className="flex justify-between items-start relative z-10">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest opacity-50 mb-1">Status da Marca</p>
                      <h4 className="font-elegant text-2xl text-[#ad6f40]">Arquitetura em Curso</h4>
                    </div>
                    <div className="text-right">
                      <p className="text-[18px] font-bold text-[#4a4542]">84%</p>
                    </div>
                  </div>
                  {/* Linha de Progresso Animada */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[#ad6f40]/10">
                    <motion.div 
                      initial={{ width: "0%" }}
                      whileInView={{ width: "84%" }}
                      transition={{ duration: 2, delay: 1 }}
                      className="h-full bg-[#ad6f40]" 
                    />
                  </div>
                </div>

                <div className="h-40 bg-white border border-[#7a7470]/5 rounded-2xl p-4">
                  <div className="w-8 h-8 rounded-lg bg-[#ad6f40]/10 flex items-center justify-center text-[#ad6f40] mb-4">
                    <ShieldCheck size={16} />
                  </div>
                  <p className="text-[9px] font-bold uppercase tracking-widest opacity-40 mb-2">Protocolo</p>
                  <p className="text-xs font-medium leading-tight">Validação de Identidade Visual de Alta Frequência</p>
                </div>

                <div className="h-40 bg-[#4a4542] rounded-2xl p-4 text-white relative overflow-hidden">
                  <p className="text-[9px] font-bold uppercase tracking-widest opacity-40 mb-2">Monitoramento</p>
                  <div className="space-y-2">
                    {[1, 2, 3, 4].map((_, i) => (
                      <motion.div 
                        key={i} 
                        variants={lineVariants}
                        className="h-[2px] bg-[#c9a39b]/30 w-full" 
                      />
                    ))}
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <Activity size={20} className="text-[#c9a39b] animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Botão de Telemetria Fictício */}
              <div className="mt-8 flex justify-center">
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] py-3 px-8 rounded-full border border-[#ad6f40]/20 text-[#ad6f40]">
                  Acessar Painel de Controle
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}