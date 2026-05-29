// src/lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utilitário de Alto Padrão para fusão de classes Tailwind.
 * * Resolve conflitos de especificidade (ex: 'p-4' vs 'p-6') e permite
 * a construção de classes condicionais limpas e performáticas, 
 * fundamentais para a fluidez visual exigida pelo ecossistema Atelier.
 * * @param inputs - Array de classes, objetos ou condicionais de estilo.
 * @returns String de classes otimizada.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}