// src/app/layout.tsx
import "./globals.css";
import React from "react";
import { Roboto } from "next/font/google";
import Script from "next/script"; // Importação nativa do Next.js para scripts externos
import ClientWrapper from "../components/global/ClientWrapper"; // O nosso novo embrulho

const roboto = Roboto({ 
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

// AÇÃO: Configuração do Metadata (Título e Favicon)
// Como este arquivo agora é de Servidor, o Next.js reconhece este objeto automaticamente.
export const metadata = {
  title: "Vallore | LizDesign",
  description: "Infraestrutura de Autoridade Digital por LizDesign.",
  icons: {
    icon: "/images/logo.png", // Certifique-se de que a imagem está em public/images/logo.png
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={roboto.variable}>
      <head>
        {/* AÇÃO: Injeção do Google Tag Manager (Otimizado) */}
        {/* Usamos strategy="afterInteractive" para não bloquear a renderização da página */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PPJW7DNF');
          `}
        </Script>
      </head>
      
      <body className="font-roboto selection:bg-[var(--color-atelier-terracota)] selection:text-white">
        
        {/* AÇÃO: Injeção do GTM (Noscript para usuários com JS desativado) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-PPJW7DNF"
            height="0" 
            width="0" 
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        
        {/* Todo o visual interativo que conservámos agora é carregado aqui */}
        <ClientWrapper>
          {children}
        </ClientWrapper>
        
      </body>
    </html>
  );
}