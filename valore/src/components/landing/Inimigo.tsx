// src/components/landing/Inimigo.tsx
"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { XCircle, ShieldAlert, Zap, ArrowRight } from "lucide-react";

/**
 * Seção 3: O Inimigo e a Transição de Categoria
 * 
 * Design: Fundo Escuro (Luxury Void), contraste alto com Terracota.
 * Objetivo: Desconstruir o branding comum e introduzir o conceito de 
 * "Hierarquia Social Digital".
 */
export default function Inimigo(): React.ReactElement {

  // Variantes para os "dogmas" que estamos quebrando
  const dogmaVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, filter: "blur(10px)" },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.15,
        duration: 1,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
      }
    })
  };

  return (
    <section className="relative py-24 md:py-48 bg-[#0a0908] text-[#fbf4e4] overflow-hidden">
      
      {/* Elemento Cinético de Fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-atelier-terracota)_0%,transparent_70%)] blur-[120px]" />
      </div>

      <div className="vrtice-container relative z-10">
        <div className="flex flex-col items-center text-center mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8 text-[var(--color-atelier-rose)]"
          >
            <XCircle size={20} strokeWidth={1.5} />
            <span className="font-roboto text-[10px] md:text-[12px] uppercase tracking-[0.4em] font-bold">
              O FIM DO BRANDING TRADICIONAL
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="headline-vrtice max-w-4xl"
          >
            Design sem posicionamento <br className="hidden md:block" />
            é apenas <span className="text-[var(--color-atelier-madeira)] italic">decoração.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          
          {/* Lado Esquerdo: A Desconstrução */}
          <div className="space-y-10">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-[1.1rem] md:text-[1.3rem] leading-relaxed font-light text-white/80"
            >
              <p>
                A indústria mentiu para você. Venderam a ideia de que bastava "ter um feed organizado" ou postar todos os dias para ser reconhecida.
              </p>
              <p className="text-[var(--color-atelier-creme)] font-medium italic">
                Nós declaramos a morte do branding tradicional.
              </p>
              <p>
                O verdadeiro jogo das marcas que cobram caro não é sobre estética. <br />
                É sobre <span className="text-[var(--color-atelier-terracota)] font-bold">Hierarquia Social Digital.</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 border border-white/10 bg-white/5 rounded-3xl backdrop-blur-md"
            >
              <div className="flex gap-6 items-start">
                <ShieldAlert className="text-[var(--color-atelier-terracota)] shrink-0" size={32} />
                <p className="text-sm md:text-base leading-relaxed opacity-70">
                  Pessoas não compram de você porque o seu perfil é "bonito". Elas compram porque o cérebro delas associa códigos de um visual refinado ao sucesso e poder. 
                  <span className="block mt-4 text-white font-bold text-lg uppercase tracking-widest">Quem parece premium, cobra premium.</span>
                </p>
              </div>
            </motion.div>
          </div>

          {/* Lado Direito: Os "Dogmas" Quebrados */}
          <div className="grid grid-cols-1 gap-6">
            {[
              {
                title: "Logotipos Vazios",
                desc: "Designers operacionais entregando templates genéricos que te tornam 'mais do mesmo'.",
                icon: <Zap size={20} />
              },
              {
                title: "Invisibilidade",
                desc: "Postar todos os dias sem um código visual de autoridade é gritar em uma sala vazia.",
                icon: <Zap size={20} />
              },
              {
                title: "Fadiga Estética",
                desc: "Briefings intermináveis que fazem você trabalhar mais do que a própria equipe contratada.",
                icon: <Zap size={20} />
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={dogmaVariants}
                className="group p-8 bg-[#121212] border border-white/5 rounded-[2.5rem] hover:border-[var(--color-atelier-terracota)]/30 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4 text-[var(--color-atelier-terracota)]">
                  {item.icon}
                  <h3 className="font-elegant text-xl md:text-2xl">{item.title}</h3>
                </div>
                <p className="text-sm md:text-base opacity-50 group-hover:opacity-100 transition-opacity">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Chamada para a Transição VRTICE */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 md:mt-40 text-center"
        >
          <div className="inline-flex flex-col items-center">
            <p className="font-roboto text-sm tracking-[0.5em] opacity-40 mb-8">
              O VRTICE DESENVOLVEU UMA NOVA INFRAESTRUTURA
            </p>
            <div className="w-px h-24 bg-gradient-to-b from-transparent via-[var(--color-atelier-terracota)] to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}