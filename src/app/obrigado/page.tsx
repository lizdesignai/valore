// src/app/obrigado/page.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import { 
  CheckCircle, 
  ShieldAlert,
  UserCheck,
  Grid,
  Tv,
  ArrowRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Scan,
  Sparkles
} from "lucide-react";

/**
 * PÁGINA DE OBRIGADO & TRIPWIRE DE ELITE (AUDITORIA DE INTERVENÇÃO VISUAL)
 * * Arquitetura de Alto Padrão: Otimização de Viewport e Engenharia de Percepção Visual.
 */
export default function ObrigadoPage(): React.ReactElement {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // Inicialização, Scroll de Respiro e GTM de Conversão Blindado
  useEffect(() => {
    window.scrollTo(0, 0);

    if (typeof window !== "undefined") {
      const gtmWindow = window as any;
      gtmWindow.dataLayer = gtmWindow.dataLayer || [];
      gtmWindow.dataLayer.push({
        event: "lead_valore_gerado",
        page_path: "/obrigado"
      });
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Variantes Cinéticas Avançadas para os Ativos do Ecossistema
  const gridContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <main className="relative min-h-screen w-full bg-[var(--color-luxury-void)] text-[#fbf4e4] overflow-x-hidden selection:bg-[var(--color-atelier-terracota)] selection:text-white pb-32">
      
      {/* 1. BARRA DE PROGRESSO PSICOLÓGICA FLUIDA */}
      <div className="fixed top-0 left-0 w-full h-1.5 bg-white/5 z-50">
        <motion.div 
          initial={{ width: "0%" }}
          animate={{ width: "90%" }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="h-full bg-[var(--color-atelier-terracota)] relative"
        >
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-r from-transparent via-white/40 to-white/70 blur-[1px]" />
        </motion.div>
      </div>
      <div className="fixed top-3 right-6 z-50 font-roboto text-[9px] uppercase tracking-[0.4em] font-bold text-white/30 backdrop-blur-md px-3 py-1 rounded-full border border-white/5 bg-black/10">
        90% Concluído
      </div>

      {/* Cenografia Lumínica de Alta Frequência */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[70vw] h-[40vw] bg-[var(--color-atelier-terracota)]/10 blur-[140px] rounded-full" />
        <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-[var(--color-atelier-rose)]/5 blur-[120px] rounded-full" />
      </div>

      {/* CONTAINER PRINCIPAL: Otimizado Milimetricamente para Evitar Cortes do Vídeo */}
      <div className="vrtice-container relative z-10 pt-12 md:pt-16 flex flex-col items-center">
        
        {/* ==========================================
            SECÇÃO 1: A CONFIRMAÇÃO (ALÍVIO E ENQUADRAMENTO COMPACTO)
            ========================================== */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center max-w-4xl mb-8"
        >
          <div className="w-10 h-10 rounded-full bg-[var(--color-atelier-terracota)]/10 flex items-center justify-center text-[var(--color-atelier-terracota)] mb-4 border border-[var(--color-atelier-terracota)]/20 shadow-[0_0_30px_rgba(173,111,64,0.15)]">
            <CheckCircle size={20} strokeWidth={1.5} />
          </div>
          
          <h1 className="font-elegant text-2xl md:text-4xl lg:text-5xl leading-[1.1] mb-3 text-white tracking-tight">
            Aplicação recebida <span className="italic text-[var(--color-atelier-terracota)] font-medium">com sucesso.</span>
          </h1>
          
          <p className="text-xs md:text-sm font-light text-white/60 max-w-2xl px-4 leading-relaxed">
            A sua análise já está nas mãos da diretoria da Liz Design. Avaliaremos o seu negócio nas próximas 24 horas. <strong className="text-white font-medium block md:inline">Preste atenção absoluta ao comunicado de emergência abaixo.</strong>
          </p>
        </motion.div>

        {/* ==========================================
            SECÇÃO 2: O VÍDEO PONTE (ABOVE THE FOLD GARANTIDO)
            ========================================== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl lg:max-w-4xl aspect-video glass-panel p-1.5 overflow-hidden group shadow-[0_40px_100px_rgba(0,0,0,0.7)] border-white/5 mb-8 md:mb-12"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-atelier-terracota)]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <div className="relative w-full h-full rounded-[0.8rem] md:rounded-[1.8rem] overflow-hidden bg-black">
            <video
              ref={videoRef}
              className="w-full h-full object-cover opacity-85 mix-blend-screen"
              poster="/images/video-thumbnail-obrigado.jpg"
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="/videos/onboarding-valore.mp4" type="video/mp4" />
            </video>

            {/* Micro-UX: Controles de Luxo Ocultos */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 md:p-8">
              <div className="flex items-center justify-between w-full">
                <button 
                  onClick={togglePlay}
                  className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-[var(--color-atelier-creme)] text-[var(--color-luxury-void)] hover:scale-105 transition-transform cursor-pointer"
                >
                  {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} className="ml-0.5" fill="currentColor" />}
                </button>
                <button 
                  onClick={toggleMute}
                  className="text-[var(--color-atelier-creme)]/80 hover:text-white transition-colors cursor-pointer"
                >
                  {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>
              </div>
            </div>

            {/* Play Button Central Minimalista */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-2xl">
                  <Play size={24} className="text-white ml-1" />
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* ==========================================
            NOVO: CTA E DIVISÓRIA ABAIXO DO VÍDEO
            ========================================== */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex flex-col items-center mb-16 md:mb-28 px-4"
        >
          <button 
            // O botão faz scroll suavemente até à secção da oferta (ID: oferta-tripwire)
            onClick={() => document.getElementById('oferta-tripwire')?.scrollIntoView({ behavior: 'smooth' })}
            className="premium-button w-full md:w-auto md:min-w-[420px] h-16 md:h-18 text-[11px] md:text-[12px] mb-12 group cursor-pointer"
          >
            SOLICITAR MINHA INTERVENÇÃO VISUAL AGORA
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          {/* Divisória Minimalista de Luxo Silencioso */}
          <div className="w-full max-w-md flex items-center justify-center opacity-40">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent to-white/50"></div>
            <div className="mx-4 w-1.5 h-1.5 rotate-45 bg-[var(--color-atelier-terracota)] shadow-[0_0_10px_rgba(173,111,64,0.8)]"></div>
            <div className="h-[1px] w-full bg-gradient-to-l from-transparent to-white/50"></div>
          </div>
        </motion.div>

        {/* ==========================================
            SECÇÃO 3: O HOOK IMPLACÁVEL (MANTA DE CONVERSÃO + FOTO DA LIZ)
            ========================================== */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-5xl glass-panel bg-white/[0.02] border-white/5 p-6 md:p-12 mb-20 md:mb-32 flex flex-col md:flex-row items-center gap-10 md:gap-16 rounded-[2rem] md:rounded-[3rem]"
        >
          {/* Retrato de Impacto — LizDesign Identity */}
          <div className="w-full md:w-5/12 relative">
            <div className="aspect-[4/5] md:aspect-[5/6] w-full rounded-2xl overflow-hidden bg-[#161616] shadow-[0_25px_60px_rgba(0,0,0,0.6)] border border-white/10 relative group">
              <img 
                src="/images/liz.JPG" 
                alt="Liz - Diretora Criativa" 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-75 mix-blend-luminosity group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0908] via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-6 left-6 z-10">
                <p className="font-elegant text-2xl text-white mb-0.5">Liz.</p>
                <p className="text-[8px] uppercase tracking-[0.3em] text-[var(--color-atelier-terracota)] font-bold">Diretora Visual</p>
              </div>
            </div>
          </div>

          {/* Copy de Agitação de Alto Impacto */}
          <div className="w-full md:w-7/12 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-atelier-rose)]/30 bg-[var(--color-atelier-rose)]/5 mb-6">
              <ShieldAlert size={14} className="text-[var(--color-atelier-rose)]" />
              <span className="font-roboto text-[9px] uppercase tracking-widest font-bold text-[var(--color-atelier-rose)]">
                Hemofilia de Posicionamento
              </span>
            </div>

            <h3 className="font-elegant text-2xl md:text-3xl lg:text-4xl leading-[1.1] mb-6 text-white">
              Enquanto você espera, o seu perfil <br />
              <span className="text-[var(--color-atelier-rose)] italic">continua sangrando autoridade.</span>
            </h3>

            <div className="space-y-4 text-xs md:text-sm font-light text-white/60 leading-relaxed font-roboto">
              <p>
                Neste exato segundo, clientes de alto valor estão visitando o seu Instagram. Eles estão com o cartão na mão, prontos para investir quantias expressivas com o profissional certo.
              </p>
              <p>
                Mas ao baterem o olho na sua vitrine, são repelidos pela sua comunicação visual atual. A mesma estética que transmite amadorismo e improviso. Em milissegundos, o cérebro deles decide recuar e contratar a sua concorrente.
              </p>
              <p className="font-medium text-white italic border-l-2 border-[var(--color-atelier-terracota)] pl-4 py-1">
                "A Liz Design vai instalar o Valore e construir a sua nova infraestrutura definitiva. Mas projetos de elite exigem tempo de engenharia. Você não pode se dar ao luxo de continuar queimando a sua percepção até lá."
              </p>
            </div>
          </div>
        </motion.div>

        {/* ==========================================
            SECÇÃO 4: A INTERVENÇÃO (MECANISMO TRIPWIRE REVOLUCIONÁRIO)
            ========================================== */}
        <motion.div 
          id="oferta-tripwire" /* ID Adicionado para o scroll do novo botão funcionar */
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-5xl glass-panel bg-[#0d0d0d]/95 border-t border-white/10 p-8 md:p-16 rounded-[2rem] md:rounded-[3rem] shadow-[0_60px_120px_rgba(0,0,0,0.9)] relative overflow-hidden"
        >
          {/* Iluminação de Estúdio */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-atelier-terracota)]/[0.08] blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-white/[0.02] blur-[100px] rounded-full pointer-events-none" />

          {/* Animação Gráfica: O Radar do Estúdio (Ilustrando a Intervenção Visual) */}
          <div className="relative z-10 flex flex-col items-center text-center mb-16">
            <div className="relative w-16 h-16 mb-6 flex items-center justify-center border border-white/10 rounded-full bg-white/[0.02]">
              <Scan size={24} className="text-[var(--color-atelier-terracota)] animate-pulse" />
              <motion.div 
                animate={{ scale: [1, 1.6, 1], opacity: [0.3, 0, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-[var(--color-atelier-terracota)] rounded-full pointer-events-none"
              />
            </div>
            
            <h3 className="font-elegant text-3xl md:text-5xl leading-[1.1] mb-4 text-white">
              Apresentando a Auditoria de <br />
              <span className="italic text-[var(--color-atelier-madeira)]">Intervenção Visual Personalizada.</span>
            </h3>
            
            <p className="text-xs md:text-sm font-light text-white/50 max-w-2xl leading-relaxed font-roboto">
              Nossa equipe vai analisar o <strong className="text-white font-medium">SEU</strong> perfil de forma cirúrgica. Vamos colocar o seu arroba (@) na tela do nosso estúdio e desenhar um plano tático imediato de contenção de danos para você executar hoje.
            </p>
          </div>

          {/* GRELHA CINÉTICA DE ENTREGÁVEIS (ILUSTRAÇÃO DO SISTEMA) */}
          <motion.div 
            variants={gridContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16 relative z-10"
          >
            {[
              {
                icon: <Sparkles size={18} />,
                title: "O Raio-X da Sua Biografia",
                desc: "Vamos reescrever o seu posicionamento. Tirar o tom de vendedora desesperada e instalar uma engenharia de texto que te posicione como uma autoridade restrita."
              },
              {
                icon: <Grid size={18} />,
                title: "Matriz de Subtração do Feed",
                desc: "Vamos te apontar as postagens específicas que você deve apagar ou arquivar hoje mesmo. Aquilo que está fazendo você parecer amadora aos olhos de quem tem dinheiro."
              },
              {
                icon: <Tv size={18} />,
                title: "Diretrizes para os Stories",
                desc: "Como postar amanhã. Onde colocar o texto, como usar espaços vazios e qual estética usar para reter a atenção e projetar status sem precisar aparecer dançando."
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={cardVariants}
                className="bg-white/[0.02] border border-white/5 p-6 md:p-8 rounded-2xl flex flex-col items-start text-left hover:border-[var(--color-atelier-terracota)]/30 hover:bg-white/5 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--color-atelier-terracota)]/10 flex items-center justify-center text-[var(--color-atelier-terracota)] mb-6 group-hover:scale-105 group-hover:bg-[var(--color-atelier-terracota)] group-hover:text-white transition-all duration-500">
                  {item.icon}
                </div>
                <h4 className="font-bold uppercase tracking-[0.15em] text-[10px] md:text-[11px] text-white/90 mb-3 font-roboto">
                  {item.title}
                </h4>
                <p className="text-[12px] md:text-[13px] font-light text-white/40 leading-relaxed font-roboto group-hover:text-white/60 transition-colors">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* ==========================================
              SECÇÃO 5: PREÇO, ANÁLISE MATEMÁTICA E CTA FINAL
              ========================================== */}
          <div className="flex flex-col items-center border-t border-white/10 pt-12 relative z-10">
            <p className="font-roboto text-[9px] uppercase tracking-[0.4em] font-bold text-[var(--color-atelier-terracota)] mb-6 text-center">
              MECANISMO DE ADMISSÃO RESTRITO
            </p>
            
            <div className="space-y-6 text-xs md:text-sm font-light text-white/50 text-center max-w-3xl leading-relaxed font-roboto mb-12">
              <p>
                Uma auditoria personalizada com a equipe da Liz Design não sai por menos de R$ 497,00. Mas como você já aplicou para o Valore, nós vamos realizar a sua Intervenção Visual por um valor simbólico de <strong className="text-white font-medium">R$ 37,00</strong>.
              </p>
              <p className="text-white/40 italic text-[11px] md:text-xs">
                Sendo brutalmente honesta: R$ 37 não paga sequer os 10 minutos que gastaremos analisando a sua marca. Esse valor é apenas um <strong className="text-[var(--color-atelier-terracota)] not-italic font-bold">microfiltro</strong> para separar as profissionais comprometidas das curiosas.
              </p>
              
              {/* Box de Contraste da Decisão Matemática */}
              <div className="bg-white/[0.01] border border-white/5 p-6 rounded-2xl text-left max-w-2xl mx-auto space-y-4 text-xs md:text-sm mt-8">
                <p>
                  <strong>Faça a matemática:</strong> R$ 37,00 é o que você gasta em um delivery ou em uma corrida de Uber. É um erro de arredondamento.
                </p>
                <p className="text-[var(--color-atelier-rose)]">
                  Mas um único cliente de alto ticket que entra no seu perfil hoje, julga a sua marca como "amadora" e desiste de te contratar... te custa R$ 2.000, R$ 3.000 ou R$ 5.000 reais.
                </p>
                <p className="text-white font-medium">
                  Você prefere economizar trinta e sete reais e continuar perdendo milhares de reais toda semana por parecer pequena? Ou prefere que a Liz Design blinde a sua imagem hoje?
                </p>
              </div>
            </div>

            <div className="flex items-end gap-3 mb-8">
              <span className="text-xs text-[var(--color-atelier-terracota)] font-bold uppercase tracking-widest mb-2">Intervenção por apenas</span>
              <span className="font-elegant text-5xl md:text-7xl leading-none text-white tracking-tighter drop-shadow-xl">
                R$ 37
              </span>
            </div>

            {/* CTA DINÂMICO TRIPWIRE */}
            <button 
              onClick={() => window.location.href = 'https://pay.kiwify.com.br/SEU_CHECKOUT_AQUI'} // Altere para o seu link real
              className="premium-button w-full md:w-auto md:min-w-[420px] h-16 md:h-18 text-[11px] md:text-[12px] mb-8 group cursor-pointer"
            >
              SOLICITAR MINHA INTERVENÇÃO VISUAL AGORA
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="text-[8px] md:text-[9px] font-light text-white/20 text-center max-w-2xl leading-relaxed uppercase tracking-[0.15em] font-roboto">
              *Aviso Legal: Ao fechar ou atualizar esta página, a oportunidade de ter o seu perfil analisado será revogada permanentemente. A sua aplicação para o Valore está confirmada independentemente da sua escolha.
            </p>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
