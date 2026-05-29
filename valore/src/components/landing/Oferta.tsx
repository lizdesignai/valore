// src/components/landing/Oferta.tsx
"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { 
  Fingerprint, 
  Globe, 
  Film, 
  Box, 
  Compass, 
  ShieldCheck 
} from "lucide-react";

/**
 * Seção 4: A OFERTA (O MECANISMO ÚNICO)
 * 
 * Design: Fundo escuro (Luxury Void), ícones cinéticos, layout modular.
 * Objetivo: Apresentar o VALORE não como um serviço, mas como uma 
 * instalação de infraestrutura de poder.
 */
export default function Oferta(): React.ReactElement {

  // Definição do Arsenal para renderização modular
  const arsenal = [
    {
      title: "Identidade Visual de Alta Frequência",
      desc: "Criação de um ecossistema visual (paleta, tipografia, células de logotipo) que elimina o ruído e transmite autoridade imediata.",
      icon: <Fingerprint size={28} strokeWidth={1.5} />,
    },
    {
      title: "Landing Page de Alta Conversão",
      desc: "O seu terreno próprio. Uma página blindada, com carregamento otimizado e engenharia de conversão para receber tráfego de alto nível.",
      icon: <Globe size={28} strokeWidth={1.5} />,
    },
    {
      title: "Animação de Logotipo",
      desc: "Movimentos sutis e cinematográficos que ancoram a percepção de uma marca viva e tecnológica.",
      icon: <Film size={28} strokeWidth={1.5} />,
    },
    {
      title: "Materialização de Status (Brindes Físicos)",
      desc: "A autoridade digital exige lastro no mundo real. Itens físicos de altíssimo padrão que criam uma experiência tátil de luxo.",
      icon: <Box size={28} strokeWidth={1.5} />,
    },
    {
      title: "Mentoria de Calibragem Mensal",
      desc: "Encontros estratégicos para ajustar o seu comportamento visual, garantindo que a sua presença continue dominando o seu nicho.",
      icon: <Compass size={28} strokeWidth={1.5} />,
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
      }
    }
  };

  return (
    <section className="relative py-24 md:py-40 bg-[#0a0908] text-[#fbf4e4] overflow-hidden">
      
      {/* Atmosfera de Poder (Luzes de Fundo) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-atelier-terracota)]/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--color-atelier-madeira)]/5 blur-[120px] rounded-full" />
      </div>

      <div className="vrtice-container relative z-10">
        
        {/* Header da Seção */}
        <div className="max-w-4xl mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <ShieldCheck size={20} className="text-[var(--color-atelier-terracota)]" />
            <span className="font-roboto text-[10px] md:text-[12px] uppercase tracking-[0.4em] font-bold text-[var(--color-atelier-rose)]">
              O MECANISMO ÚNICO
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="headline-vrtice mb-8"
          >
            Apresentando o VALORE: <br />
            <span className="text-[var(--color-atelier-terracota)] italic">A Engenharia da sua Nova Presença Premium.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.7 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl font-light leading-relaxed max-w-2xl"
          >
            O Valore não é um pacote de artes. É a instalação de uma <strong>infraestrutura de poder</strong> na sua marca, ancorada nos princípios do <em>Old Money</em> e do <em>Luxo Silencioso</em>.
          </motion.p>
        </div>

        {/* Grid do Arsenal: Estrutura Modular */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {arsenal.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="glass-panel p-8 md:p-10 flex flex-col h-full bg-white/5 border-white/5 hover:border-[var(--color-atelier-terracota)]/30 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[var(--color-atelier-grafite)]/30 flex items-center justify-center mb-8 text-[var(--color-atelier-terracota)] group-hover:scale-110 group-hover:bg-[var(--color-atelier-terracota)] group-hover:text-white transition-all duration-500">
                {item.icon}
              </div>
              
              <h3 className="font-elegant text-2xl md:text-3xl mb-4 leading-tight">
                {item.title}
              </h3>
              
              <p className="text-sm md:text-base opacity-60 leading-relaxed font-light mt-auto">
                {item.desc}
              </p>
            </motion.div>
          ))}

          {/* Card de Fechamento do Grid (Visual) */}
          <motion.div
            variants={itemVariants}
            className="p-8 md:p-10 flex flex-col justify-center border border-dashed border-[var(--color-atelier-madeira)]/20 rounded-[2.5rem]"
          >
            <p className="font-elegant text-xl italic opacity-40 text-center">
              Um ecossistema cirúrgico desenhado para o mercado presumir o seu sucesso de forma absoluta.
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}