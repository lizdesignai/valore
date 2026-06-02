// src/components/landing/Selection.tsx
"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { UserCheck, BarChart3, Crown, ShieldAlert } from "lucide-react";

/**
 * Seção 6: A SELEÇÃO (QUEM PODE ENTRAR)
 * 
 * Design: Fundo Escuro Absoluto (Luxury Void), Foco Central, Tipografia de Autoridade.
 * Objetivo: Instalar escassez real, ancorar o valor do investimento e 
 * filtrar a audiência (afastando os curiosos).
 */
export default function Selection(): React.ReactElement {

  // Definição dos critérios de seleção baseados na nova copy
  const criteria = [
    {
      title: "Domínio Técnico",
      desc: "Mulheres talentosas que entregam resultados inegáveis para seus clientes, mas estão travadas por uma estética amadora.",
      icon: <UserCheck size={28} strokeWidth={1.5} />
    },
    {
      title: "Tração de Faturamento",
      desc: "Profissionais que faturam — ou sabem que podem faturar — múltiplos dígitos e recusam a invisibilidade no mercado.",
      icon: <BarChart3 size={28} strokeWidth={1.5} />
    },
    {
      title: "Visão de Status",
      desc: "Marcas que decidiram jogar o jogo da percepção social e querem ser silenciosamente invejadas no seu nicho.",
      icon: <Crown size={28} strokeWidth={1.5} />
    }
  ];

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
      }
    })
  };

  return (
    <section className="relative py-24 md:py-48 bg-[var(--color-luxury-void)] text-[#fbf4e4] overflow-hidden">
      
      {/* Background Cinético Sutil (Cruz de Luz) */}
      <div className="absolute inset-0 pointer-events-none opacity-30 mix-blend-screen">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[2px] bg-gradient-to-r from-transparent via-[var(--color-atelier-rose)]/20 to-transparent rotate-45 blur-[2px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[2px] bg-gradient-to-r from-transparent via-[var(--color-atelier-terracota)]/20 to-transparent -rotate-45 blur-[2px]" />
      </div>

      <div className="vrtice-container relative z-10">
        
        {/* ==========================================
            HEADER DA SELEÇÃO (O CRIVO)
            ========================================== */}
        <div className="flex flex-col items-center text-center mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-[var(--color-atelier-terracota)]/30 bg-[var(--color-atelier-terracota)]/10 mb-10"
          >
            <ShieldAlert size={16} className="text-[var(--color-atelier-terracota)]" />
            <span className="font-roboto text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-bold text-[var(--color-atelier-rose)]">
              A exclusividade é a nossa proteção
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="headline-vrtice max-w-5xl mb-10"
          >
            A exclusividade não é um gatilho. <br className="hidden md:block" />
            <span className="text-[var(--color-atelier-terracota)] italic">É a nossa regra de operação.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
            className="max-w-3xl text-[1.1rem] md:text-[1.2rem] font-light leading-relaxed space-y-6 text-white/80"
          >
            <p>
              O Vallore não é uma fábrica de templates e não opera por volume. É um movimento restrito de ascensão social e de mercado.
            </p>
            <p className="font-medium text-white italic border-b border-[var(--color-atelier-terracota)]/30 pb-6 inline-block">
              "Este projeto exige um investimento correspondente a ativos de alta performance (na casa dos milhares de reais) e é reservado estritamente para o perfil abaixo."
            </p>
          </motion.div>
        </div>

        {/* ==========================================
            GRID DE CRITÉRIOS (OS 3 PILARES)
            ========================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-24">
          {criteria.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="glass-panel p-10 bg-[#121212]/80 border-white/5 flex flex-col items-start gap-8 hover:bg-white/[0.02] hover:border-[var(--color-atelier-terracota)]/30 transition-all duration-500 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[var(--color-atelier-grafite)]/20 flex items-center justify-center text-[var(--color-atelier-terracota)] group-hover:scale-110 group-hover:bg-[var(--color-atelier-terracota)] group-hover:text-white transition-all duration-500">
                {item.icon}
              </div>
              <div className="space-y-4">
                <h3 className="font-elegant text-3xl leading-tight text-white">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base opacity-50 group-hover:opacity-90 leading-relaxed font-light transition-opacity duration-500 font-roboto">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ==========================================
            CRIVO FINAL (CAIXA DE IMPACTO TÁTICO)
            ========================================== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center justify-center p-12 md:p-20 rounded-[2rem] md:rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-3xl text-center relative overflow-hidden"
        >
          {/* Efeito de Reflexo no Vidro */}
          <div className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12" />

          <p className="font-roboto text-xs uppercase tracking-[0.5em] text-[var(--color-atelier-rose)] mb-8 font-bold">
            A DIRETORIA DE PROJETOS
          </p>
          <h4 className="font-elegant text-3xl md:text-5xl lg:text-6xl mb-8 leading-[1.1] text-white">
            Você não pode simplesmente passar o cartão e <span className="text-[var(--color-atelier-madeira)] italic">comprar o Vallore.</span>
          </h4>
          <p className="text-[1.1rem] md:text-[1.3rem] text-white/80 font-light max-w-3xl leading-relaxed">
            Você precisa passar pelo crivo da nossa diretoria. Avaliaremos o seu momento, o seu produto e a sua ambição antes de aceitar instalar a nossa infraestrutura na sua marca.
          </p>
        </motion.div>

      </div>

      {/* Divisória Editorial Sutil para guiar ao fechamento (CTA) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-t from-[var(--color-atelier-terracota)] to-transparent opacity-50" />
    </section>
  );
}