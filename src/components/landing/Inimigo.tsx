// src/components/landing/Inimigo.tsx
"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { XCircle, ShieldAlert, TrendingDown, EyeOff, LayoutGrid } from "lucide-react";

/**
 * Seção 3: O Inimigo e a Transição de Categoria
 * 
 * Design: Fundo Escuro (Luxury Void), contraste alto com Terracota.
 * Objetivo: Desconstruir o branding comum (a mentira da indústria) e 
 * introduzir o conceito de "Hierarquia Social Digital".
 */
export default function Inimigo(): React.ReactElement {

  // Variantes para animação da narrativa à esquerda
  const textVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  // Variantes para os "dogmas/mentiras" que estamos quebrando (Cascata)
  const dogmaVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, filter: "blur(10px)" },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.15,
        duration: 1,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  return (
    <section className="relative py-24 md:py-40 bg-[var(--color-luxury-void)] text-[#fbf4e4] overflow-hidden">
      
      {/* Elemento Cinético de Fundo: Luz de Alerta/Desconstrução */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-atelier-terracota)_0%,transparent_60%)] blur-[150px]" />
      </div>

      <div className="vrtice-container relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col items-center text-center mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 px-6 py-2 rounded-full border border-[var(--color-atelier-rose)]/20 bg-[var(--color-atelier-rose)]/5 mb-8 text-[var(--color-atelier-rose)]"
          >
            <XCircle size={16} strokeWidth={1.5} />
            <span className="font-roboto text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-bold">
              A Morte do Branding Tradicional
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-elegant text-3xl md:text-5xl lg:text-6xl leading-[1.1] max-w-4xl"
          >
            Design sem posicionamento <br className="hidden md:block" />
            é apenas <span className="text-[var(--color-atelier-madeira)] italic">decoração.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* ==========================================
              LADO ESQUERDO: A DESCONSTRUÇÃO
              ========================================== */}
          <div className="space-y-10">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ staggerChildren: 0.2 }}
              className="space-y-6 text-[1.05rem] md:text-[1.2rem] leading-relaxed font-light text-white/80"
            >
              <motion.p variants={textVariants}>
                A indústria inteira mentiu para você.
              </motion.p>
              
              <motion.p variants={textVariants}>
                Gurus do algoritmo disseram que bastava "ter constância" e produzir conteúdo até a exaustão. Designers operacionais baratos te entregaram logotipos vazios, templates poluídos e a ilusão de um "feed harmonizado".
              </motion.p>
              
              <motion.p variants={textVariants} className="text-white font-medium text-xl italic py-2">
                A verdade brutal? Competência sem percepção é invisibilidade.
              </motion.p>

              <motion.p variants={textVariants}>
                O verdadeiro jogo das marcas que cobram premium não é sobre deixar o Instagram bonitinho. É sobre <strong className="text-[var(--color-atelier-terracota)]">Hierarquia Social Digital</strong>.
              </motion.p>
            </motion.div>

            {/* Caixa de Impacto (Bottom Line) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 border border-white/10 bg-white/5 rounded-3xl backdrop-blur-md relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-[var(--color-atelier-terracota)]" />
              <div className="flex gap-6 items-start relative z-10">
                <ShieldAlert className="text-[var(--color-atelier-terracota)] shrink-0 mt-1" size={28} />
                <p className="text-sm md:text-base leading-relaxed opacity-80">
                  As pessoas não compram porque o seu post tem uma cor legal. Elas compram porque uma estética limpa, minimalista e curada dispara gatilhos de inteligência, poder e alto valor. 
                  <span className="block mt-4 text-white font-bold text-lg uppercase tracking-widest">
                    Quem parece premium, cobra premium.
                  </span>
                  <span className="block mt-2 text-xs opacity-60 uppercase tracking-widest">
                    Se a sua marca parece pequena, o mercado assume que você também é.
                  </span>
                </p>
              </div>
            </motion.div>
          </div>

          {/* ==========================================
              LADO DIREITO: AS MENTIRAS DA INDÚSTRIA
              ========================================== */}
          <div className="grid grid-cols-1 gap-6 relative">
            
            {/* Efeito de Conexão (Linha Vertical) */}
            <div className="absolute left-10 top-10 bottom-10 w-px bg-white/10 hidden md:block" />

            {[
              {
                title: "A Mentira do Algoritmo",
                desc: "Produzir conteúdo até a exaustão sem um código visual de autoridade é gritar em uma sala vazia.",
                icon: <TrendingDown size={20} />
              },
              {
                title: "O Design Operacional",
                desc: "Profissionais baratos entregando logotipos vazios que te tornam apenas 'mais do mesmo' no mercado.",
                icon: <EyeOff size={20} />
              },
              {
                title: "A Ilusão da Harmonia",
                desc: "Templates poluídos e engessados vendidos como 'feed organizado', matando a sofisticação da sua marca.",
                icon: <LayoutGrid size={20} />
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={dogmaVariants}
                className="group p-8 pl-8 md:pl-24 bg-[#121212] border border-white/5 rounded-[2rem] hover:border-[var(--color-atelier-terracota)]/30 transition-all duration-500 relative"
              >
                {/* Ícone posicionado sobre a linha no Desktop */}
                <div className="absolute left-6 md:left-[28px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[var(--color-luxury-void)] border border-white/10 flex items-center justify-center text-[var(--color-atelier-terracota)] group-hover:scale-110 group-hover:bg-[var(--color-atelier-terracota)] group-hover:text-white transition-all duration-500 z-10">
                  {item.icon}
                </div>

                <div className="ml-14 md:ml-0">
                  <h3 className="font-elegant text-xl md:text-2xl mb-2 text-white">{item.title}</h3>
                  <p className="text-sm opacity-50 group-hover:opacity-100 transition-opacity duration-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* ==========================================
            CHAMADA PARA A TRANSIÇÃO (A NOVA CATEGORIA)
            ========================================== */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 md:mt-32 text-center"
        >
          <div className="inline-flex flex-col items-center">
            <p className="font-roboto text-xs md:text-sm tracking-[0.3em] md:tracking-[0.5em] text-[var(--color-atelier-creme)] opacity-60 mb-8 max-w-2xl px-4 uppercase font-bold leading-relaxed">
              Foi para liderar essa rebelião estética que o Vallore desenvolveu uma categoria inteiramente nova.
            </p>
            {/* Linha que "conecta" com a próxima seção */}
            <div className="w-px h-24 bg-gradient-to-b from-transparent via-[var(--color-atelier-terracota)] to-transparent" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}