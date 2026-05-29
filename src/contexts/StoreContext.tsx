// src/contexts/StoreContext.tsx
"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

// 1. O Mapa da Memória (Interface)
// Aqui dizemos ao TypeScript exatamente quais os dados que vamos guardar.
interface StoreState {
  hasWatchedVSL: boolean;
  setHasWatchedVSL: (value: boolean) => void;
  hasApplied: boolean;
  setHasApplied: (value: boolean) => void;
}

// 2. Criação do Contexto
// Inicialmente começa vazio (undefined), mas vai ser preenchido pelo Provider.
const StoreContext = createContext<StoreState | undefined>(undefined);

// 3. O Componente Provider (Fornecedor)
// Este componente vai envolver a nossa aplicação no ficheiro layout.tsx.
export function StoreProvider({ children }: { children: React.ReactNode }): React.ReactElement {
  // Criamos os "estados" (memória de curto prazo, que se apaga ao dar refresh)
  const [hasWatchedVSL, setHasWatchedVSLState] = useState<boolean>(false);
  const [hasApplied, setHasAppliedState] = useState<boolean>(false);

  // useEffect: Executa apenas uma vez quando o site carrega no navegador do utilizador.
  // Vai procurar a "memória de longo prazo" no disco do navegador (localStorage).
  useEffect(() => {
    const storedVSL = localStorage.getItem("@valore:hasWatchedVSL");
    const storedApplied = localStorage.getItem("@valore:hasApplied");

    if (storedVSL === "true") setHasWatchedVSLState(true);
    if (storedApplied === "true") setHasAppliedState(true);
  }, []);

  // Funções ajudantes: Atualizam a memória curta (React) e a memória longa (localStorage) ao mesmo tempo.
  const setHasWatchedVSL = (value: boolean) => {
    setHasWatchedVSLState(value);
    localStorage.setItem("@valore:hasWatchedVSL", String(value));
  };

  const setHasApplied = (value: boolean) => {
    setHasAppliedState(value);
    localStorage.setItem("@valore:hasApplied", String(value));
  };

  // Entregamos os dados aos componentes "filhos"
  return (
    <StoreContext.Provider value={{ hasWatchedVSL, setHasWatchedVSL, hasApplied, setHasApplied }}>
      {children}
    </StoreContext.Provider>
  );
}

// 4. Hook Personalizado (O Atalho)
// Em vez de importar o Context e o useContext sempre, criamos esta função simples.
export function useStore() {
  const context = useContext(StoreContext);
  
  // Proteção contra erros: garante que o desenvolvedor não tenta usar a memória fora do Provider.
  if (context === undefined) {
    throw new Error("O useStore deve ser usado obrigatoriamente dentro de um <StoreProvider>");
  }
  
  return context;
}