// src/components/forms/ApplicationForm.tsx
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { 
  Loader2, 
  ChevronRight, 
  User, 
  Building2, 
  Mail,
  ShieldCheck,
  Phone
} from "lucide-react";

/**
 * Ícone Instagram Customizado (SVG)
 */
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

/**
 * Seção 7: O FECHAMENTO (CTA FINAL)
 * O formulário de Admissão atua como o Guardião do Ecossistema Vallore.
 */
export default function ApplicationForm(): React.ReactElement {
  const router = useRouter(); 
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    instagram: "",
    whatsapp: "",
    email: ""
  });

  const handleWhatsappChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^\d\s()+-]/g, '');
    setFormData({ ...formData, whatsapp: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Erro desconhecido");
      }

      router.push('/obrigado');
      
    } catch (error) {
      console.error("Erro no Protocolo de Aplicação:", error);
      alert("Sistema em manutenção ou erro de conexão. Por favor, tente novamente.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center p-6 md:p-12">
      
      {/* ==========================================
          LADO ESQUERDO: COPY DE FECHAMENTO
          ========================================== */}
      <div className="flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <h2 className="font-elegant text-3xl md:text-5xl leading-[1.1] text-white">
            A decisão de abandonar a <br />
            <span className="text-[var(--color-atelier-terracota)] italic font-medium">invisibilidade é sua.</span>
          </h2>
          
          <div className="space-y-4 text-sm md:text-[1rem] font-light leading-relaxed text-white/70">
            <p>
              Você pode fechar esta página. Voltar para o Canva, continuar implorando por atenção no algoritmo, sentindo vergonha do próprio perfil e assistindo pessoas menos capacitadas ficarem ricas no seu lugar.
            </p>
            <p className="font-medium text-white">
              Ou você pode aplicar para o Vallore.
            </p>
          </div>

          <div className="pt-6">
            <p className="font-roboto text-[10px] uppercase tracking-[0.3em] font-bold text-[var(--color-atelier-rose)] mb-6">
              O Seu Próximo Passo:
            </p>
            
            <div className="space-y-5">
              {[
                { step: "01", title: "O Crivo Inicial", desc: "Você preencherá o formulário abaixo com detalhes absolutos sobre o seu negócio." },
                { step: "02", title: "A Auditoria", desc: "Nossa equipe avaliará a sua narrativa e o seu momento atual." },
                { step: "03", title: "A Reunião", desc: "Se a sua marca demonstrar o potencial necessário, o VRTICE entrará em contato para agendar o seu diagnóstico." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 group">
                  <span className="font-roboto text-[10px] font-bold text-[var(--color-atelier-terracota)] tracking-widest pt-1.5">{item.step}</span>
                  <div>
                    <h4 className="font-elegant text-lg text-white/90 group-hover:text-[var(--color-atelier-terracota)] transition-colors">{item.title}</h4>
                    <p className="text-xs opacity-50 mt-1 leading-relaxed text-white/80">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <p className="pt-4 text-xs italic text-[var(--color-atelier-terracota)]/80">
            Chegou a hora de instalar a infraestrutura visual que fará a sua marca vender no silêncio da sua nova autoridade.
          </p>
        </motion.div>
      </div>

      {/* ==========================================
          LADO DIREITO: FORMULÁRIO DE ADMISSÃO
          ========================================== */}
      <div className="relative w-full">
        {/* Luz de destaque atrás do formulário */}
        <div className="absolute inset-0 bg-[var(--color-atelier-terracota)]/10 blur-[80px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-10 glass-panel p-8 bg-[#121212]/90 border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.8)] rounded-[2.5rem]"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="text-center mb-8 border-b border-white/10 pb-6">
              <p className="font-roboto text-[9px] uppercase tracking-[0.4em] font-bold text-[var(--color-atelier-terracota)] mb-3">
                Protocolo de Admissão
              </p>
              <h3 className="font-elegant text-3xl text-white">
                Preencha seus dados
              </h3>
            </div>

            <div className="relative group">
              <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-[var(--color-atelier-terracota)] transition-colors" />
              <input 
                required 
                type="text" 
                placeholder="Seu Nome Completo"
                className="w-full h-14 pl-12 pr-6 bg-white/5 border border-white/10 focus:bg-white/10 focus:border-[var(--color-atelier-terracota)]/50 rounded-xl outline-none transition-all text-sm text-white placeholder:text-white/30"
                value={formData.nome}
                onChange={(e) => setFormData({...formData, nome: e.target.value})}
              />
            </div>

            <div className="relative group">
              <Building2 size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-[var(--color-atelier-terracota)] transition-colors" />
              <input 
                required 
                type="text" 
                placeholder="Nome da sua Marca"
                className="w-full h-14 pl-12 pr-6 bg-white/5 border border-white/10 focus:bg-white/10 focus:border-[var(--color-atelier-terracota)]/50 rounded-xl outline-none transition-all text-sm text-white placeholder:text-white/30"
                value={formData.empresa}
                onChange={(e) => setFormData({...formData, empresa: e.target.value})}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="relative group">
                <InstagramIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-white/30 group-focus-within:text-[var(--color-atelier-terracota)] transition-colors" />
                <input 
                  required 
                  type="text" 
                  placeholder="@instagram"
                  className="w-full h-14 pl-12 pr-4 bg-white/5 border border-white/10 focus:bg-white/10 focus:border-[var(--color-atelier-terracota)]/50 rounded-xl outline-none transition-all text-sm text-white placeholder:text-white/30"
                  value={formData.instagram}
                  onChange={(e) => setFormData({...formData, instagram: e.target.value})}
                />
              </div>
              <div className="relative group">
                <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-[var(--color-atelier-terracota)] transition-colors" />
                <input 
                  required 
                  type="tel" 
                  placeholder="WhatsApp"
                  className="w-full h-14 pl-12 pr-4 bg-white/5 border border-white/10 focus:bg-white/10 focus:border-[var(--color-atelier-terracota)]/50 rounded-xl outline-none transition-all text-sm text-white placeholder:text-white/30"
                  value={formData.whatsapp}
                  onChange={handleWhatsappChange}
                />
              </div>
            </div>

            <div className="relative group pb-2">
              <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-[var(--color-atelier-terracota)] transition-colors" />
              <input 
                required 
                type="email" 
                placeholder="E-mail Profissional"
                className="w-full h-14 pl-12 pr-6 bg-white/5 border border-white/10 focus:bg-white/10 focus:border-[var(--color-atelier-terracota)]/50 rounded-xl outline-none transition-all text-sm text-white placeholder:text-white/30"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full h-16 rounded-xl font-bold uppercase tracking-[0.2em] text-[11px] md:text-[12px] flex items-center justify-center gap-3 transition-all duration-500 bg-[var(--color-atelier-creme)] text-[var(--color-luxury-void)] hover:bg-[var(--color-atelier-terracota)] hover:text-white group disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_10px_30px_rgba(173,111,64,0.15)]"
            >
              {isSubmitting ? (
                <Loader2 className="animate-spin" />
              ) : (
                <>
                  ACESSAR FORMULÁRIO DE APLICAÇÃO 
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>

            <div className="flex flex-col items-center gap-2 pt-4">
              <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-[var(--color-atelier-terracota)]">
                <ShieldCheck size={12} /> Ambiente 100% Seguro
              </div>
              <p className="text-[9px] opacity-30 uppercase tracking-[0.2em] text-white">
                O preenchimento não garante aprovação.
              </p>
            </div>
          </form>
        </motion.div>
      </div>

    </div>
  );
}