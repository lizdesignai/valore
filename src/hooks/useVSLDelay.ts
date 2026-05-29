// src/hooks/useVSLDelay.ts
"use client";

import { useState, useEffect } from "react";
import { useStore } from "../contexts/StoreContext";

/**
 * Hook Customizado: useVSLDelay
 * 
 * Gere a lógica de revelação da Fase 2 conectada à memória global (StoreContext).
 * @param delayInSeconds O tempo em segundos que o vídeo deve rodar antes de revelar o pitch.
 * @returns boolean indicando se o conteúdo já deve estar visível.
 */
export function useVSLDelay(delayInSeconds: number): boolean {
  // 1. Acedemos à nossa memória global
  const { hasWatchedVSL, setHasWatchedVSL } = useStore();
  
  // 2. O estado local começa como 'true' APENAS se a memória disser que ele já assistiu
  const [isVisible, setIsVisible] = useState<boolean>(hasWatchedVSL);

  useEffect(() => {
    // Se a memória diz que já assistiu, libertamos o scroll e encerramos a lógica
    if (hasWatchedVSL) {
      setIsVisible(true);
      if (typeof document !== 'undefined') {
        document.body.classList.remove('lock-scroll');
      }
      return; // Interrompe o useEffect aqui, não liga o cronômetro
    }

    // Se não assistiu, iniciamos o cronômetro de retenção
    const timer = setTimeout(() => {
      setIsVisible(true);
      setHasWatchedVSL(true); // Grava na memória: "Este utilizador já passou pelo crivo"
      
      // Destrava a página para navegação
      if (typeof document !== 'undefined') {
        document.body.classList.remove('lock-scroll');
      }
    }, delayInSeconds * 1000);

    // Limpeza de segurança caso o utilizador saia da página antes do tempo
    return () => clearTimeout(timer);
  }, [delayInSeconds, hasWatchedVSL, setHasWatchedVSL]);

  // Retorna apenas um verdadeiro ou falso para o componente usar
  return isVisible;
}