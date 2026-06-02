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
 * Design: Fundo Escuro Premium (Luxury Void), ícones cinéticos, layout modular.
 * Objetivo: Apresentar o VALLORE como uma instalação de infraestrutura de poder,
 * utilizando o Arsenal do Protocolo.
 */
export default function Oferta(): React.ReactElement {

  // Definição do Arsenal para renderização modular baseada na nova copy
  const arsenal = [
    {
      title: "Identidade Visual de Alta Frequência",
      desc: "Mapeamos a sua insegurança perceptiva e criamos um ecossistema visual de curadoria (paletas neutras, tipografia elegante) que elimina o ruído e impõe respeito.",
      icon: <Fingerprint size={28} strokeWidth={1.5} />,
    },
    {
      title: "Landing Page de Sofisticação",
      desc: "O seu terreno próprio. Uma página blindada, com carregamento otimizado e engenharia de conversão para receber clientes que não pedem desconto.",
      icon: <Globe size={28} strokeWidth={1.5} />,
    },
    {
      title: "Animação Cinematográfica",
      desc: "Movimentos sutis e controlados da sua nova marca que ancoram a percepção de alta tecnologia e refinamento.",
      icon: <Film size={28} strokeWidth={1.5} />,
    },
    {
      title: "Materialização de Status",
      desc: "A autoridade digital exige lastro físico. Você receberá brandbooks elegantes e itens físicos de altíssimo padrão, criando uma experiência tátil de valor.",
      icon: <Box size={28} strokeWidth={1.5} />,
    },
    {
      title: "Mentoria de Calibragem Mensal",
      desc: "A estética não caminha sozinha. Você terá encontros estratégicos para dominar a sua linguagem visual silenciosa, garantindo que a sua presença se mantenha esmagadora.",
      icon: <Compass size={28} strokeWidth={1.5} />,
    }
  ];

  // Variantes para a revelação em cascata da grelha
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
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
    <section className="relative py-24 md:py-40 bg-[var(--color-luxury-void)] text-[#fbf4e4] overflow-hidden">
      
      {/* Atmosfera de Poder (Luzes Cinéticas de Fundo) */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[var(--color-atelier-terracota)]/10 blur-[150px] rounded-full" 
        />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[var(--color-atelier-madeira)]/5 blur-[120px] rounded-full" />
      </div>

      <div className="vrtice-container relative z-10">
        
        {/* ==========================================
            HEADER DA SEÇÃO
            ========================================== */}
        <div className="max-w-4xl mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <ShieldCheck size={20} className="text-[var(--color-atelier-terracota)]" />
            <span className="font-roboto text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-bold text-[var(--color-atelier-rose)]">
              O MECANISMO ÚNICO
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-elegant text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-8"
          >
            Apresentando o VALLORE: <br />
            <span className="text-[var(--color-atelier-terracota)] italic">A Engenharia da sua Presença Premium.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
            className="space-y-4 text-[1.1rem] md:text-[1.2rem] font-light leading-relaxed max-w-3xl text-white/80"
          >
            <p>
              O Vallore não é um pacote de identidade visual. É a instalação de uma infraestrutura de autoridade. 
            </p>
            <p className="border-l-2 border-[var(--color-atelier-terracota)]/40 pl-4 italic text-white mt-4">
              Um sistema proprietário desenhado para traduzir a sua ambição em sinais visuais de status, forçando o mercado a presumir o seu sucesso instantaneamente.
            </p>
          </motion.div>
        </div>

        {/* ==========================================
            GRID DO ARSENAL (ESTRUTURA MODULAR)
            ========================================== */}
        <div className="mb-12">
          <h3 className="font-roboto text-xs uppercase tracking-[0.3em] font-bold text-white/40 mb-8">
            O Arsenal do Protocolo Vallore:
          </h3>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {arsenal.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.4, ease: "easeOut" } }}
                className="glass-panel p-8 md:p-10 flex flex-col h-full bg-[#121212]/60 border-white/5 hover:border-[var(--color-atelier-terracota)]/40 group relative overflow-hidden"
              >
                {/* Efeito de Luz Interna no Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-atelier-terracota)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="w-14 h-14 rounded-2xl bg-[var(--color-luxury-void)] border border-white/10 flex items-center justify-center mb-8 text-[var(--color-atelier-terracota)] group-hover:scale-110 group-hover:bg-[var(--color-atelier-terracota)] group-hover:text-white transition-all duration-500 relative z-10 shadow-[0_0_20px_rgba(173,111,64,0)] group-hover:shadow-[0_0_20px_rgba(173,111,64,0.3)]">
                  {item.icon}
                </div>
                
                <h3 className="font-elegant text-2xl md:text-3xl mb-4 leading-tight text-white relative z-10">
                  {item.title}
                </h3>
                
                <p className="text-sm md:text-[0.95rem] opacity-60 group-hover:opacity-90 leading-relaxed font-light mt-auto transition-opacity duration-500 relative z-10 font-roboto">
                  {item.desc}
                </p>
              </motion.div>
            ))}

            {/* Card de Fechamento do Grid (Assinatura do Ecossistema) */}
            <motion.div
              variants={itemVariants}
              className="p-8 md:p-10 flex flex-col items-center justify-center border border-dashed border-[var(--color-atelier-madeira)]/20 rounded-[2.5rem] bg-white/[0.02]"
            >
              <div className="w-12 h-[1px] bg-[var(--color-atelier-terracota)]/50 mb-6" />
              <p className="font-elegant text-xl md:text-2xl italic opacity-50 text-center leading-relaxed">
                Um ecossistema cirúrgico desenhado para o mercado presumir o seu sucesso de forma absoluta.
              </p>
              <div className="w-12 h-[1px] bg-[var(--color-atelier-terracota)]/50 mt-6" />
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}