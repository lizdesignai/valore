// tailwind.config.ts
import type { Config } from "tailwindcss";

/**
 * Configuração de Design System VALORE / Atelier
 * 
 * Este ficheiro define a fundação visual da marca LizDesign.
 * Implementamos tokens de cor de luxo e curvas de easing proprietárias
 * para garantir a fluidez cinematográfica exigida pelo projeto.
 */
const config: Config = {
  // Escopo de varredura para o motor JIT (Just-In-Time)
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta Institucional Atelier
        atelier: {
          terracota: "#ad6f40",
          madeira: "#9b836b",
          creme: "#fbf4e4",
          rose: "#c9a39b",
          grafite: "#7a7470",
        },
        // Escala de Profundidade para interfaces imersivas
        luxury: {
          void: "#0a0908",
          sheen: "rgba(255, 255, 255, 0.65)",
          glass: "rgba(255, 255, 255, 0.45)",
          specular: "rgba(255, 255, 255, 0.95)",
        }
      },
      fontFamily: {
        // Mapeamento de fontes injetadas no globals.css e layout.tsx
        elegant: ["var(--font-elegant)", "serif"],
        roboto: ["var(--font-roboto)", "sans-serif"],
      },
      // Curvas de Física Real (Framer Motion Sync)
      transitionTimingFunction: {
        "fluid": "cubic-bezier(0.16, 1, 0.3, 1)",
        "elastic-premium": "cubic-bezier(0.25, 1, 0.2, 1.1)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "reveal-fade": "revealFade 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        revealFade: {
          "0%": { opacity: "0", transform: "translateY(20px)", filter: "blur(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)", filter: "blur(0px)" },
        }
      },
      backdropBlur: {
        "huge": "40px",
      }
    },
  },
  plugins: [],
};

export default config;