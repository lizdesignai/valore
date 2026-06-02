// src/components/landing/AudioProof.tsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { Play, Pause, Volume2, Quote } from "lucide-react";

// ==========================================
// INTERFACES E DADOS DE EXEMPLO
// ==========================================
interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  audioSrc: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Camila R.",
    role: "Clínica de Estética Avançada",
    quote: "Antes do Vallore, eu competia por preço. Hoje, o mercado presume o meu valor no segundo em que abre o meu perfil. O investimento retornou no primeiro contrato.",
    audioSrc: "/audios/relato-1.mp3", // <-- Coloca o teu áudio real na pasta public/audios/
  },
  {
    id: 2,
    name: "Dra. Juliana M.",
    role: "Harmonização Orofacial",
    quote: "A Liz não entregou apenas um design. Ela instalou uma arquitetura de autoridade que fez as minhas pacientes pararem de pedir desconto imediatamente.",
    audioSrc: "/audios/relato-2.mp3",
  },
  {
    id: 3,
    name: "Sofia L.",
    role: "Mentora de Alta Performance",
    quote: "O nível de sofisticação do processo é assustador. O Atelier eliminou toda a minha ansiedade e entregou uma marca que finalmente reflete o meu nível técnico.",
    audioSrc: "/audios/relato-3.mp3",
  }
];

// ==========================================
// COMPONENTE: LEITOR DE ÁUDIO CUSTOMIZADO
// ==========================================
const CustomAudioPlayer = ({ 
  audioSrc, 
  currentlyPlaying, 
  setCurrentlyPlaying, 
  id 
}: { 
  audioSrc: string; 
  currentlyPlaying: number | null; 
  setCurrentlyPlaying: (id: number | null) => void; 
  id: number;
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [progress, setProgress] = useState(0);

  const isPlaying = currentlyPlaying === id;

  // Lógica para parar este áudio se outro começar a tocar
  useEffect(() => {
    if (!isPlaying && audioRef.current) {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setCurrentlyPlaying(null);
      } else {
        audioRef.current.play();
        setCurrentlyPlaying(id);
      }
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      if (duration > 0) {
        setProgress((current / duration) * 100);
      }
    }
  };

  const handleEnded = () => {
    setCurrentlyPlaying(null);
    setProgress(0);
  };

  return (
    <div className="flex items-center gap-4 mt-6 p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-[var(--color-atelier-terracota)]/30 transition-colors">
      
      {/* Elemento HTML de áudio escondido */}
      <audio 
        ref={audioRef} 
        src={audioSrc} 
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        preload="metadata"
      />

      {/* Botão Play/Pause de Luxo */}
      <button 
        onClick={togglePlayPause}
        className={`w-12 h-12 flex-shrink-0 rounded-full flex items-center justify-center transition-all duration-300 ${
          isPlaying 
            ? "bg-[var(--color-atelier-terracota)] text-white shadow-[0_0_15px_rgba(173,111,64,0.5)]" 
            : "bg-white/10 text-white/80 hover:bg-[var(--color-atelier-terracota)] hover:text-white"
        }`}
      >
        {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} className="ml-1" fill="currentColor" />}
      </button>

      {/* Visualizador / Barra de Progresso */}
      <div className="flex-1">
        <div className="flex items-center justify-between mb-2">
          <span className="font-roboto text-[10px] uppercase tracking-widest text-[var(--color-atelier-rose)] font-bold flex items-center gap-2">
            <Volume2 size={12} /> Ouça o Relato
          </span>
          {isPlaying && (
            <span className="flex gap-1">
              <span className="w-1 h-2 bg-[var(--color-atelier-terracota)] animate-pulse" />
              <span className="w-1 h-3 bg-[var(--color-atelier-terracota)] animate-pulse [animation-delay:0.2s]" />
              <span className="w-1 h-2 bg-[var(--color-atelier-terracota)] animate-pulse [animation-delay:0.4s]" />
            </span>
          )}
        </div>
        
        {/* Linha de progresso */}
        <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-[var(--color-atelier-terracota)]"
            style={{ width: `${progress}%` }}
            layout
          />
        </div>
      </div>
    </div>
  );
};

// ==========================================
// COMPONENTE PRINCIPAL (A SEÇÃO)
// ==========================================
export default function AudioProof(): React.ReactElement {
  // Estado que guarda qual áudio está a tocar no momento
  const [currentlyPlaying, setCurrentlyPlaying] = useState<number | null>(null);

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
    <section className="relative py-24 md:py-40 bg-[var(--color-luxury-void)] text-[#fbf4e4] overflow-hidden border-t border-white/5">
      
      {/* Iluminação de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-atelier-madeira)_0%,transparent_60%)] blur-[150px]" />
      </div>

      <div className="vrtice-container relative z-10">
        
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-white/5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--color-atelier-terracota)] animate-pulse" />
            <span className="font-roboto text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-bold text-white/70">
              ARQUIVOS DO ATELIER
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-elegant text-3xl md:text-5xl lg:text-6xl leading-[1.1] max-w-4xl"
          >
            A materialização do <br className="hidden md:block" />
            <span className="text-[var(--color-atelier-terracota)] italic">Luxo Silencioso.</span>
          </motion.h2>
        </div>

        {/* Grid de Relatos em Áudio */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="glass-panel p-8 md:p-10 bg-[#121212]/80 border-white/5 flex flex-col justify-between group hover:bg-white/[0.02] transition-colors"
            >
              <div>
                <Quote size={24} className="text-[var(--color-atelier-terracota)]/40 mb-6" />
                <p className="font-light text-white/80 leading-relaxed text-sm md:text-base italic mb-8">
                  "{testimonial.quote}"
                </p>
                
                <div>
                  <h4 className="font-elegant text-xl text-white">{testimonial.name}</h4>
                  <p className="font-roboto text-[10px] uppercase tracking-widest text-[var(--color-atelier-terracota)] font-bold mt-1">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Leitor de Áudio Injetado */}
              <CustomAudioPlayer 
                id={testimonial.id}
                audioSrc={testimonial.audioSrc}
                currentlyPlaying={currentlyPlaying}
                setCurrentlyPlaying={setCurrentlyPlaying}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}