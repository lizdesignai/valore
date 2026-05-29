// src/components/landing/Epidemia.tsx
"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Microscope, Brain } from "lucide-react";
// O import do cn pode ser removido se não estiver em uso direto neste arquivo, 
// mas vou manter a estrutura que você definiu.

/**
 * Seção 2: A Epidemia e a Prova Científica
 * 
 * Design: Fundo off-white (creme), tipografia espaçada, foco em autoridade.
 * O objetivo aqui é tirar o cliente do emocional do vídeo e trazê-lo para a 
 * "dor real" e a comprovação científica da aparência.
 */
export default function Epidemia(): React.ReactElement {
  
  // SOLUÇÃO DO ERRO: Tipamos explicitamente como Variants e fazemos um cast 
  // na propriedade 'ease' para uma tupla de 4 números.
  const cardVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
      }
    })
  };

  return (
    <section className="relative py-24 md:py-40 bg-[var(--color-atelier-creme)] text-[var(--color-atelier-grafite)]">
      <div className="vrtice-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Lado Esquerdo: A Narrativa da Dor */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.6 }}
              viewport={{ once: true }}
              className="font-roboto text-[10px] md:text-[12px] uppercase tracking-[0.4em] font-bold mb-6 text-[var(--color-atelier-madeira)]"
            >
              A PATOLOGIA DA INVISIBILIDADE
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="font-elegant text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.1] mb-10"
            >
              A "Inflação Estética" está <br />
              <span className="text-[var(--color-atelier-terracota)] italic">destruindo o seu lucro.</span>
            </motion.h2>

            <div className="space-y-6 text-[1.1rem] md:text-[1.25rem] leading-relaxed font-light opacity-90">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Existe uma vergonha silenciosa que você não confessa para ninguém. Você sabe que tem talento. Você estudou durante anos e entrega resultados reais para os seus clientes.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="font-medium text-[var(--color-atelier-grafite)]"
              >
                Mas quando você abre o seu próprio perfil, o visual grita improviso.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                E o que realmente tira o seu sono não é a falta de clientes. É a injustiça. É ver concorrentes medianas sendo aplaudidas, tratadas como autoridades e cobrando valores que você hesita em cobrar.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="pt-6 flex items-center gap-4 text-[var(--color-atelier-terracota)] font-bold uppercase tracking-widest text-xs"
              >
                <div className="w-12 h-[1px] bg-current" />
                Elas apenas entenderam a ciência por trás da atenção
              </motion.div>
            </div>
          </div>

          {/* Lado Direito: A Prova Científica (Os Dados Frios) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="space-y-8">
              <h4 className="font-roboto text-sm font-bold uppercase tracking-[0.2em] mb-4">
                Os Dados Frios do Mercado:
              </h4>

              {/* Card Estudo 1: Princeton */}
              <motion.div
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className="glass-panel p-8 bg-white/60 border-white/80"
              >
                <div className="flex gap-6">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-[var(--color-atelier-terracota)]/10 flex items-center justify-center text-[var(--color-atelier-terracota)]">
                    <Brain size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm mb-2 text-[var(--color-atelier-madeira)]">UNIVERSIDADE DE PRINCETON</h5>
                    <p className="text-[1rem] leading-snug">
                      Provou que o cérebro humano leva apenas <span className="font-bold text-[var(--color-atelier-terracota)]">um décimo de segundo</span> para julgar a confiabilidade de um profissional.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Card Estudo 2: Stanford */}
              <motion.div
                custom={2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className="glass-panel p-8 bg-white/60 border-white/80"
              >
                <div className="flex gap-6">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-[var(--color-atelier-madeira)]/10 flex items-center justify-center text-[var(--color-atelier-madeira)]">
                    <Microscope size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm mb-2 text-[var(--color-atelier-madeira)]">UNIVERSIDADE DE STANFORD</h5>
                    <p className="text-[1rem] leading-snug">
                      Revelou que <span className="font-bold text-[var(--color-atelier-terracota)]">75% dos usuários</span> definem a credibilidade de um negócio baseados puramente no design.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Conclusão Biológica */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="p-8 border-l-2 border-[var(--color-atelier-madeira)]/30 italic font-elegant text-[1.2rem] leading-relaxed text-[var(--color-atelier-grafite)]/70"
              >
                "O mercado é biológico. Ele julga a sua embalagem antes de sequer provar o seu conteúdo. As suas concorrentes acionaram o <span className="text-[var(--color-atelier-terracota)] font-bold">Efeito Halo</span>."
              </motion.div>
            </div>
          </div>

        </div>
      </div>

      {/* Divisória Decorativa Sutil */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--color-atelier-madeira)]/20 to-transparent" />
    </section>
  );
}