// src/components/landing/FAQ.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

/**
 * FAQItem - Unidade Atômica do FAQ
 * Design minimalista, comportando-se como uma lista editorial de alto padrão.
 */
const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
  return (
    <div className="border-b border-white/10 py-2">
      <button
        onClick={onClick}
        className="w-full py-8 flex items-center justify-between text-left group transition-all cursor-pointer"
      >
        <span className={`font-elegant text-xl md:text-2xl transition-colors duration-500 pr-8 ${isOpen ? 'text-[var(--color-atelier-terracota)]' : 'text-white/80 group-hover:text-white'}`}>
          {question}
        </span>
        <div className={`shrink-0 w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-500 ${isOpen ? 'rotate-180 border-[var(--color-atelier-terracota)] text-[var(--color-atelier-terracota)] bg-[var(--color-atelier-terracota)]/10' : 'border-white/10 text-white/40 group-hover:text-white group-hover:border-white/30'}`}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-10 pr-12 text-white/60 text-sm md:text-base leading-relaxed font-light font-roboto">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/**
 * Seção 8: FAQ - O ÚLTIMO CRIVO
 * Design: Fundo Escuro Premium, Tipografia Limpa, Controle Absoluto.
 */
export default function FAQ(): React.ReactElement {
  // Estado para controlar qual pergunta está aberta (comportamento de acordeão exclusivo)
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Copy atualizada com a nomenclatura VALLORE
  const faqs = [
    {
      q: "Qual é o valor do investimento no protocolo Vallore?",
      a: "O Vallore não é um serviço operacional barato. Trata-se da construção de uma percepção premium. O projeto exige um investimento na casa dos milhares de reais. O escopo financeiro exato é apresentado exclusivamente na reunião de diagnóstico, caso a sua aplicação seja aprovada pelo crivo do Vallore."
    },
    {
      q: "Como funciona a entrega? Terei que responder briefings exaustivos?",
      a: "Definitivamente não. O nosso objetivo é eliminar o seu esforço mental. A nossa equipe atua como arquiteta da sua percepção. Toda a orquestração do projeto acontece dentro do Atelier. Sem grupos caóticos de WhatsApp. Você apenas monitora e valida a sua marca com previsibilidade e sofisticação."
    },
    {
      q: "Eu preciso ter uma audiência gigante para o Vallore funcionar?",
      a: "Não. O Vallore torna o número de seguidores irrelevante. A Arquitetura de Autoridade Percebida permite que você atraia seu cliente ideal pelo peso do seu posicionamento visual. Quando a sua marca transmite a estética do Luxo Silencioso, você converte pela percepção instantânea de valor, e não pelo barulho orgânico."
    },
    {
      q: "O que acontece se a minha aplicação for recusada?",
      a: "O Vallore opera com um limite cirúrgico de clientes simultâneos. Se a nossa diretoria analisar a sua aplicação e entender que o seu modelo de negócio ainda não tem tração para absorver o impacto da Engenharia de Presença Premium, seremos diretos e sua aplicação será declinada. Não vendemos ilusões."
    },
    {
      q: "O que exatamente eu recebo ao final do processo?",
      a: (
        <div className="space-y-4 pt-2">
          <p>Você assume o controle de um ecossistema. O protocolo Vallore entrega:</p>
          <ul className="space-y-3 mt-4">
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-atelier-terracota)] mt-2 shrink-0" /> 
              <span><strong className="text-white/80 font-medium">Identidade Visual de Alta Frequência</strong> (sistema cromático, tipografia e refinamento visual).</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-atelier-terracota)] mt-2 shrink-0" /> 
              <span><strong className="text-white/80 font-medium">Animação Cinematográfica</strong> do seu logotipo.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-atelier-terracota)] mt-2 shrink-0" /> 
              <span><strong className="text-white/80 font-medium">Landing Page de Alta Conversão</strong> com visual premium.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-atelier-terracota)] mt-2 shrink-0" /> 
              <span><strong className="text-white/80 font-medium">Materialização de Status</strong> através de Brindes Físicos elegantes.</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-atelier-terracota)] mt-2 shrink-0" /> 
              <span><strong className="text-white/80 font-medium">Acesso à Mentoria de Calibragem Mensal</strong> para sustentar a sua marca forte a longo prazo.</span>
            </li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <section className="relative py-24 md:py-48 bg-[var(--color-luxury-void)] text-[#fbf4e4] overflow-hidden">
      
      {/* Iluminação de fundo sutil para dar destaque ao título */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[var(--color-atelier-terracota)]/5 to-transparent pointer-events-none rounded-bl-full" />

      <div className="vrtice-container relative z-10">
        <div className="max-w-4xl mx-auto md:mx-0">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <HelpCircle size={20} className="text-[var(--color-atelier-terracota)]" />
            <span className="font-roboto text-[10px] md:text-[12px] uppercase tracking-[0.4em] font-bold text-[var(--color-atelier-rose)]">
              DÚVIDAS E PROTOCOLOS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-elegant text-4xl md:text-5xl lg:text-6xl mb-16 leading-[1.1]"
          >
            O Último <span className="italic text-[var(--color-atelier-terracota)]">Crivo.</span>
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12"
          >
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.q}
                answer={faq.a}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}