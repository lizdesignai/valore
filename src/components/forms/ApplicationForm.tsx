// src/components/forms/ApplicationForm.tsx
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Importado para o redirecionamento
import { motion } from "framer-motion";
import { 
  Loader2, 
  ChevronRight, 
  User, 
  Building2, 
  Mail,
  ShieldCheck,
  Phone // Ícone adicionado para o WhatsApp
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

export default function ApplicationForm(): React.ReactElement {
  const router = useRouter(); // Inicializa o roteador do Next.js
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    instagram: "",
    whatsapp: "", // Novo campo adicionado
    email: ""
  });

  // Função para aplicar máscara básica no WhatsApp (aceita apenas números e caracteres de telefone)
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

      // REDIRECIONAMENTO IMEDIATO: 
      // Em vez de mostrar a mensagem aqui, enviamos o cliente para a página de Obrigado
      router.push('/obrigado');
      
    } catch (error) {
      console.error("Erro no Protocolo de Aplicação:", error);
      alert("Sistema em manutenção ou erro de conexão. Por favor, tente novamente.");
      setIsSubmitting(false); // Só destravamos o botão se der erro. Se for sucesso, o redirect assume.
    }
  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center p-6 md:p-12">
      
      {/* Lado Esquerdo: Copy Simplificada para o Modal */}
      <div className="flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <h2 className="font-elegant text-3xl md:text-5xl leading-[1.1] text-[#4a4542]">
            A decisão de abandonar o <br />
            <span className="text-[#ad6f40] italic font-medium">amadorismo é sua.</span>
          </h2>
          
          <p className="text-base md:text-lg font-light leading-relaxed text-[#7a7470]">
            Escolha instalar a infraestrutura que fará a sua marca vender no silêncio da sua nova autoridade.
          </p>

          <div className="space-y-5 pt-4">
            {[
              { step: "01", title: "Auditoria", desc: "Análise do seu momento atual de negócio." },
              { step: "02", title: "O Crivo", desc: "Avaliação criteriosa da nossa diretoria." },
              { step: "03", title: "A Reunião", desc: "Diagnóstico e viabilidade financeira." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 group">
                <span className="font-roboto text-[10px] font-bold text-[#ad6f40] tracking-widest pt-1.5">{item.step}</span>
                <div>
                  <h4 className="font-elegant text-lg text-[#4a4542] group-hover:text-[#ad6f40] transition-colors">{item.title}</h4>
                  <p className="text-xs opacity-60 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lado Direito: Formulário de Admissão Compacto */}
      <div className="relative w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-panel p-8 bg-white/70 border-white shadow-[0_30px_60px_rgba(173,111,64,0.05)] rounded-[2rem]"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="text-center mb-8">
              <p className="font-roboto text-[9px] uppercase tracking-[0.4em] font-bold text-[#ad6f40] mb-2">Protocolo de Admissão</p>
              <h3 className="font-elegant text-2xl text-[#4a4542]">Preencha seus dados</h3>
            </div>

            <div className="relative group">
              <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7a7470]/40 group-focus-within:text-[#ad6f40] transition-colors" />
              <input 
                required 
                type="text" 
                placeholder="Seu Nome Completo"
                className="w-full h-12 pl-12 pr-6 bg-white/60 border border-white focus:bg-white focus:border-[#ad6f40]/30 rounded-xl outline-none transition-all text-sm text-[#4a4542]"
                value={formData.nome}
                onChange={(e) => setFormData({...formData, nome: e.target.value})}
              />
            </div>

            <div className="relative group">
              <Building2 size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7a7470]/40 group-focus-within:text-[#ad6f40] transition-colors" />
              <input 
                required 
                type="text" 
                placeholder="Nome da sua Marca"
                className="w-full h-12 pl-12 pr-6 bg-white/60 border border-white focus:bg-white focus:border-[#ad6f40]/30 rounded-xl outline-none transition-all text-sm text-[#4a4542]"
                value={formData.empresa}
                onChange={(e) => setFormData({...formData, empresa: e.target.value})}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative group">
                <InstagramIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-[#7a7470]/40 group-focus-within:text-[#ad6f40] transition-colors" />
                <input 
                  required 
                  type="text" 
                  placeholder="@instagram"
                  className="w-full h-12 pl-12 pr-4 bg-white/60 border border-white focus:bg-white focus:border-[#ad6f40]/30 rounded-xl outline-none transition-all text-sm text-[#4a4542]"
                  value={formData.instagram}
                  onChange={(e) => setFormData({...formData, instagram: e.target.value})}
                />
              </div>
              <div className="relative group">
                <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7a7470]/40 group-focus-within:text-[#ad6f40] transition-colors" />
                <input 
                  required 
                  type="tel" 
                  placeholder="WhatsApp"
                  className="w-full h-12 pl-12 pr-4 bg-white/60 border border-white focus:bg-white focus:border-[#ad6f40]/30 rounded-xl outline-none transition-all text-sm text-[#4a4542]"
                  value={formData.whatsapp}
                  onChange={handleWhatsappChange}
                />
              </div>
            </div>

            <div className="relative group pb-2">
              <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7a7470]/40 group-focus-within:text-[#ad6f40] transition-colors" />
              <input 
                required 
                type="email" 
                placeholder="E-mail Profissional"
                className="w-full h-12 pl-12 pr-6 bg-white/60 border border-white focus:bg-white focus:border-[#ad6f40]/30 rounded-xl outline-none transition-all text-sm text-[#4a4542]"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="premium-button w-full h-14 group"
            >
              {isSubmitting ? (
                <Loader2 className="animate-spin" />
              ) : (
                <>
                  SOLICITAR ANÁLISE DE PERFIL 
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>

            <div className="flex flex-col items-center gap-2 pt-4">
              <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-widest text-[#ad6f40]">
                <ShieldCheck size={12} /> Ambiente Criptografado
              </div>
              <p className="text-[9px] opacity-40 uppercase tracking-widest">
                A aplicação não garante aprovação.
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}