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
 */
const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
  return (
    <div className="border-b border-white/5 py-2">
      <button
        onClick={onClick}
        className="w-full py-8 flex items-center justify-between text-left group transition-all"
      >
        <span className={`font-elegant text-xl md:text-2xl transition-colors duration-500 ${isOpen ? 'text-[var(--color-atelier-terracota)]' : 'text-[#fbf4e4]/80 group-hover:text-[#fbf4e4]'}`}>
          {question}
        </span>
        <div className={`shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-transform duration-500 ${isOpen ? 'rotate-180 border-[var(--color-atelier-terracota)] text-[var(--color-atelier-terracota)]' : 'text-white/40 group-hover:text-white'}`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
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
            <div className="pb-10 pr-12 text-[#fbf4e4]/60 text-base md:text-lg leading-relaxed font-light">
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
 * Design: Fundo Escuro, Tipografia Limpa, Controle Absoluto.
 */
export default function FAQ(): React.ReactElement {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Qual é o valor do investimento no protocolo Valore?",
      a: "O Valore não é um serviço operacional genérico. Trata-se da instalação de uma infraestrutura completa de autoridade digital. O projeto exige um investimento correspondente a ativos de alta performance no mercado corporativo, na casa dos milhares de reais. O escopo financeiro exato e as vias de acesso são apresentados exclusivamente na reunião de diagnóstico."
    },
    {
      q: "Como funciona a entrega? Terei que responder briefings gigantes?",
      a: "Definitivamente não. O nosso objetivo é eliminar a sua fadiga de decisão estética. Toda a orquestração do projeto acontece dentro do Atelier, o nosso ambiente isolado de telemetria. Você não lidará com pastas desorganizadas no Drive ou grupos caóticos de WhatsApp. Você apenas opera o sistema de cima."
    },
    {
      q: "Eu preciso ter uma audiência gigante para o Valore funcionar?",
      a: "O Valore foi desenhado exatamente para tornar o volume de seguidores irrelevante. Quando a sua marca transmite o peso do Luxo Silencioso, você converte pelo status e pela confiança instantânea, não pelo número de likes."
    },
    {
      q: "O que acontece se a minha aplicação for recusada?",
      a: "Nós operamos com um limite rigoroso de clientes simultâneos para garantir a qualidade irretocável do Atelier. Se a nossa diretoria entender que o seu modelo de negócio ainda não possui a tração necessária, sua aplicação será declinada. A exclusividade é a nossa proteção e a sua garantia."
    },
    {
      q: "O que exatamente eu recebo ao final do processo?",
      a: (
        <ul className="space-y-3">
          <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[var(--color-atelier-terracota)] mt-2" /> Identidade Visual de Alta Frequência</li>
          <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[var(--color-atelier-terracota)] mt-2" /> Animação Cinematográfica do logotipo</li>
          <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[var(--color-atelier-terracota)] mt-2" /> Landing Page de Alta Conversão Next.js</li>
          <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[var(--color-atelier-terracota)] mt-2" /> Brindes Físicos de altíssimo padrão</li>
          <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[var(--color-atelier-terracota)] mt-2" /> Mentoria de Calibragem Mensal</li>
        </ul>
      )
    }
  ];

  return (
    <section className="relative py-24 md:py-48 bg-[#0a0908] text-[#fbf4e4]">
      <div className="vrtice-container">
        <div className="max-w-4xl">
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
            className="font-elegant text-4xl md:text-6xl mb-16"
          >
            O Último <span className="italic text-[var(--color-atelier-terracota)]">Crivo.</span>
          </motion.h2>

          <div className="mt-12">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.q}
                answer={faq.a}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}