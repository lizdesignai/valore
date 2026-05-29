// src/components/landing/Selection.tsx
"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { UserCheck, BarChart3, Crown, ShieldAlert, CheckCircle } from "lucide-react";

/**
 * Seção 6: A SELEÇÃO (QUEM PODE ENTRAR)
 * 
 * Design: Fundo Escuro, Foco Total, Tipografia de Autoridade.
 * Objetivo: Instalar escassez real e filtrar a audiência de alto nível.
 */
export default function Selection(): React.ReactElement {

  // Definição dos critérios de seleção baseados na copy
  const criteria = [
    {
      title: "Domínio Técnico Absoluto",
      desc: "Reservado para mulheres que já dominam a sua técnica e entregam resultados reais para os seus clientes.",
      icon: <UserCheck size={24} />
    },
    {
      title: "Tração de Crescimento",
      desc: "Para profissionais que sabem do seu potencial para faturar múltiplos dígitos, mas que estão travadas por uma estética amadora.",
      icon: <BarChart3 size={24} />
    },
    {
      title: "Liderança de Categoria",
      desc: "Marcas que decidiram colocar um fim definitivo na invisibilidade e desejam liderar o seu nicho de mercado.",
      icon: <Crown size={24} />
    }
  ];

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
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
    <section className="relative py-24 md:py-48 bg-[#0a0908] text-[#fbf4e4] overflow-hidden">
      
      {/* Background Cinético Sutil */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_center,var(--color-atelier-terracota)_0%,transparent_70%)] blur-[150px]" />
      </div>

      <div className="vrtice-container relative z-10">
        <div className="flex flex-col items-center text-center mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-[var(--color-atelier-terracota)]/30 bg-[var(--color-atelier-terracota)]/5 mb-10"
          >
            <ShieldAlert size={16} className="text-[var(--color-atelier-terracota)]" />
            <span className="font-roboto text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-bold text-[var(--color-atelier-rose)]">
              PROTOCOLO DE ADMISSÃO RESTRITO
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="headline-vrtice max-w-5xl mb-10"
          >
            Exclusividade não é um gatilho. <br />
            <span className="text-[var(--color-atelier-terracota)] italic">É a nossa regra de operação.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl text-[1.1rem] md:text-[1.2rem] font-light leading-relaxed space-y-4"
          >
            <p>
              Nós não somos uma fábrica de logotipos e não operamos por volume. 
              O Valore é um movimento de ascensão social e de mercado.
            </p>
            <p className="font-medium text-[#fbf4e4]/90 border-b border-[var(--color-atelier-terracota)]/20 pb-4 inline-block">
              Investimento correspondente a ferramentas de alta performance (na casa dos milhares de reais).
            </p>
          </motion.div>
        </div>

        {/* Grid de Critérios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {criteria.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="glass-panel p-10 bg-white/5 border-white/5 flex flex-col items-start gap-8"
            >
              <div className="text-[var(--color-atelier-terracota)]">
                {item.icon}
              </div>
              <div className="space-y-4">
                <h3 className="font-elegant text-2xl leading-tight text-[#fbf4e4]">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base opacity-50 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Crivo Final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center p-12 rounded-[3rem] border border-white/10 bg-[var(--color-atelier-grafite)]/20 backdrop-blur-3xl text-center"
        >
          <p className="font-roboto text-sm uppercase tracking-[0.5em] text-[var(--color-atelier-rose)] mb-6">
            AVISO DA DIRETORIA
          </p>
          <h4 className="font-elegant text-3xl md:text-4xl mb-6">
            Você não pode simplesmente clicar e comprar o Valore.
          </h4>
          <p className="text-[1.1rem] md:text-[1.25rem] text-[var(--color-atelier-creme)] font-medium max-w-3xl">
            Você precisa ser aprovada pela nossa diretoria de projetos. <br className="hidden md:block" />
            <span className="italic opacity-60">A qualidade irretocável do Atelier exige esse crivo.</span>
          </p>
        </motion.div>
      </div>

      {/* Divisória Editorial Sutil */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-t from-[var(--color-atelier-terracota)] to-transparent" />
    </section>
  );
}