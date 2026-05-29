// src/app/page.tsx
"use client";

import React from "react";
import HeroVSL from "../components/landing/HeroVSL";
import DelayWrapper from "../components/landing/DelayWrapper";
import Epidemia from "../components/landing/Epidemia";
import Inimigo from "../components/landing/Inimigo";
import Oferta from "../components/landing/Oferta";
import AtelierAccess from "../components/landing/AtelierAccess";
import Selection from "../components/landing/Selection";
import ApplicationForm from "../components/forms/ApplicationForm";
import FAQ from "../components/landing/FAQ";

/**
 * Landing Page VALORE - Orquestrador de Infraestrutura
 * 
 * Este ficheiro atua como o ponto central de montagem da página.
 * Integra a Fase 1 (Imediata) com a Fase 2 (Revelada via Delay).
 * 
 * @author LizDesign Senior Architecture
 */
export default function LandingPage(): React.ReactElement {
  
  /**
   * CONSTANTE DE RETENÇÃO (VSL_DELAY_SECONDS)
   * Define o tempo em que o conteúdo estratégico permanece oculto.
   * Sugestão: 600 para produção (10 min) | 10 para desenvolvimento/testes.
   */
  const VSL_DELAY_SECONDS: number = 10; 

  return (
    <div className="flex flex-col w-full bg-[#fbf4e4]">
      
      {/* 
          FASE 1: VISÍVEL IMEDIATAMENTE 
          Foco total em autoridade e retenção na VSL.
          O componente HeroVSL trava o scroll do body nativamente.
      */}
      <HeroVSL />

      {/* 
          FASE 2: CONTEÚDO LIBERADO ESTRATEGICAMENTE 
          O DelayWrapper é o responsável por liberar o scroll e 
          revelar os ativos de conversão no momento do pitch.
      */}
      <DelayWrapper delayInSeconds={VSL_DELAY_SECONDS}>
        
        {/* Bloco de Conscientização e Prova Científica */}
        <div id="epidemia-layer">
          <Epidemia />
        </div>

        {/* Bloco de Desconstrução de Categoria */}
        <div id="inimigo-layer">
          <Inimigo />
        </div>

        {/* Bloco de Arsenal Técnico e Entregáveis */}
        <div id="oferta-layer">
          <Oferta />
        </div>

        {/* Bloco de Operação e Telemetria (Atelier) */}
        <div id="atelier-layer">
          <AtelierAccess />
        </div>

        {/* Bloco de Filtro de Admissão e Escassez */}
        <div id="selection-layer">
          <Selection />
        </div>

        {/* Bloco de Crivo Final (Captação de Aplicações) */}
        <div id="conversion-layer">
          <ApplicationForm />
        </div>

        {/* Bloco de Resolução de Objeções (FAQ) */}
        <div id="faq-layer">
          <FAQ />
        </div>

        {/* Rodapé de Luxo Silencioso */}
        <footer className="relative py-20 bg-[#0a0908] border-t border-white/5 flex flex-col items-center">
          <div className="vrtice-container flex flex-col items-center gap-8">
            <img 
              src="/images/logo.png" 
              alt="LizDesign Logo" 
              className="h-8 opacity-40 grayscale brightness-200" 
              onError={(e) => (e.currentTarget.style.display = 'none')}
            />
            
            <nav className="flex flex-wrap justify-center gap-6 md:gap-12 text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-white/30">
              <a href="#" className="hover:text-[#ad6f40] transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-[#ad6f40] transition-colors">Privacidade Blindada</a>
              <a href="#" className="hover:text-[#ad6f40] transition-colors">Protocolo Atelier</a>
            </nav>

            <p className="font-roboto text-[8px] md:text-[9px] uppercase tracking-[0.5em] text-white/10 mt-4 text-center">
              © {new Date().getFullYear()} LizDesign Architecture — Infrastructure of Power
            </p>
          </div>
        </footer>

      </DelayWrapper>

    </div>
  );
}