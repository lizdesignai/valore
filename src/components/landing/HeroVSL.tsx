// src/components/landing/HeroVSL.tsx
"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, X } from "lucide-react"; // Adicionado ícone X para o botão de fechar
import { cn } from "../../lib/utils";
import ApplicationForm from "../forms/ApplicationForm"; // Importação do Formulário para dentro do Modal

/**
 * HeroVSL - A Fase 1 (Above the Fold)
 * 
 * Implementa a estética Old Money com foco absoluto em autoridade.
 * O scroll é travado via 'lock-scroll' no body para garantir que a 
 * jornada comece obrigatoriamente pela VSL.
 */
export default function HeroVSL(): React.ReactElement {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  
  // NOVO: Estado para controlar a abertura do Popup (Modal)
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Efeito para travar o scroll na montagem do componente (Fase 1)
  useEffect(() => {
    // Mantém a página travada para focar na VSL
    document.body.classList.add('lock-scroll');
    return () => document.body.classList.remove('lock-scroll');
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center pt-12 pb-24 overflow-hidden bg-[var(--color-luxury-void)]">
      
      {/* Background Atmosphere: Profundidade Espectral */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-[var(--color-atelier-terracota)]/10 blur-[120px] rounded-full animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[var(--color-atelier-madeira)]/5 blur-[100px] rounded-full" />
      </div>

      <div className="vrtice-container relative z-20 flex flex-col items-center text-center">
        
        {/* Overline / Cabeçalho */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-roboto text-[10px] md:text-[12px] uppercase tracking-[0.4em] font-bold text-[var(--color-atelier-creme)] mb-6"
        >
          UM AVISO PARA MULHERES QUE VENDEM SERVIÇOS DE ALTO VALOR
        </motion.span>

        {/* Headline H1: Tipografia Editorial Fluida */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="headline-vrtice text-[var(--color-atelier-creme)] mb-8 max-w-5xl"
        >
          A Ciência da Autoridade Digital: <br className="hidden md:block" />
          <span className="text-[var(--color-atelier-terracota)] italic">Como mulheres com metade do seu talento estão cobrando o triplo de você.</span>
        </motion.h1>

        {/* Subheadline H2 */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="subheadline-vrtice text-[var(--color-atelier-creme)] max-w-3xl mb-14 font-light"
        >
          O mercado não avalia a sua competência. Ele avalia a sua embalagem. 
          Descubra como a <span className="italic font-medium">Arquitetura de Autoridade Percebida</span> transforma a sua marca em um ativo de alto valor.
        </motion.p>

        {/* Área do Vídeo: Mockup Minimalista Blindado */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
          className="relative w-full max-w-4xl aspect-video glass-panel p-2 md:p-3 overflow-hidden group shadow-2xl"
        >
          <div className="relative w-full h-full rounded-[1.2rem] md:rounded-[2rem] overflow-hidden bg-black/40">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              poster="/images/video-thumbnail.jpg" // Thumbnail sofisticada
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="/videos/vsl-valore.mp4" type="video/mp4" />
              Seu navegador não suporta vídeos.
            </video>

            {/* Overlay de Controles Customizados (Silent Luxury) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 md:p-10">
              <div className="flex items-center justify-between w-full">
                <button 
                  onClick={togglePlay}
                  className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-[var(--color-atelier-creme)] text-[var(--color-luxury-void)] hover:scale-105 transition-transform"
                >
                  {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} className="ml-1" fill="currentColor" />}
                </button>

                <button 
                  onClick={toggleMute}
                  className="text-[var(--color-atelier-creme)]/80 hover:text-[var(--color-atelier-creme)] transition-colors"
                >
                  {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                </button>
              </div>
            </div>

            {/* Play Button Central (Visível apenas se não estiver tocando) */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-[var(--color-atelier-creme)]/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                  <Play size={32} className="text-[var(--color-atelier-creme)] ml-2" />
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Indicador de Som (Micro-UX) */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 2 }}
          className="mt-6 flex items-center gap-3 text-[10px] uppercase tracking-widest text-[var(--color-atelier-creme)]"
        >
          <div className="flex gap-1">
            <span className="w-1 h-3 bg-current animate-pulse" />
            <span className="w-1 h-3 bg-current animate-pulse [animation-delay:0.2s]" />
            <span className="w-1 h-3 bg-current animate-pulse [animation-delay:0.4s]" />
          </div>
          VERIFIQUE O VOLUME DO SEU DISPOSITIVO
        </motion.div>

        {/* NOVO: Botão de Chamada para o Popup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.8, ease: "easeOut" }}
          className="mt-10"
        >
          <button 
            onClick={() => setIsModalOpen(true)}
            className="premium-button"
          >
            CANDIDATAR-ME AO VALLORE
          </button>
        </motion.div>

      </div>

      {/* NOVO: Infraestrutura do Popup (Modal) */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#0a0908]/80 p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[2rem] bg-[#fbf4e4] shadow-2xl border border-white/10 no-scrollbar"
            >
              {/* Botão de Fechar o Popup */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 z-[100000] w-10 h-10 flex items-center justify-center rounded-full bg-[#0a0908]/5 hover:bg-[#0a0908]/10 text-[#7a7470] transition-colors"
              >
                <X size={20} />
              </button>

              {/* Injeção do Formulário */}
              <div className="relative w-full">
                <ApplicationForm />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}