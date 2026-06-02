// src/hooks/useVSLDelay.ts
"use client";

import { useState, useEffect } from "react";

/**
 * Hook Customizado: useVSLDelay
 * 
 * Objetivo: Controlar o tempo de revelação da página (Fase 2).
 * Funcionalidade extra: Grava na memória do navegador (localStorage) se o 
 * utilizador já esperou o tempo antes. Se recarregar a página, não espera de novo.
 */
export function useVSLDelay(delayInSeconds: number) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Chave única para salvar no navegador
    const storageKey = "vallore_vsl_watched";

    // Verifica se já guardámos a informação de que a utilizadora viu o vídeo
    const hasWatched = localStorage.getItem(storageKey);

    if (hasWatched) {
      // Se já viu, liberta o conteúdo imediatamente
      setIsVisible(true);
      return;
    }

    // Se é a primeira vez, inicia o cronómetro
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Salva no navegador para futuras visitas
      localStorage.setItem(storageKey, "true");
    }, delayInSeconds * 1000); // Multiplica por 1000 porque o setTimeout usa milissegundos

    // Função de limpeza de segurança (desliga o cronómetro se o componente fechar)
    return () => clearTimeout(timer);
  }, [delayInSeconds]);

  return isVisible;
}