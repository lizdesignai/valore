// src/components/forms/ApplicationForm.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Send, 
  Loader2, 
  CheckCircle, 
  ChevronRight, 
  User, 
  Building2, 
  Mail,
  ShieldCheck
} from "lucide-react";
import { cn } from "../../lib/utils";

/**
 * Ícone Instagram Customizado (SVG)
 * Substitui o membro removido da biblioteca lucide-react para garantir estabilidade.
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    instagram: "",
    email: ""
  });

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Em vez de chamar o Supabase, usamos a função 'fetch' do JavaScript
      // para enviar os dados para a nossa nova API segura.
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // Transformamos os nossos dados num formato de texto (JSON) para viajar pela rede
        body: JSON.stringify(formData),
      });

      // Lemos a resposta da API
      const result = await response.json();

      if (!response.ok) {
        // Se o status não for 200/201, lançamos um erro para o bloco catch
        throw new Error(result.error || "Erro desconhecido");
      }

      // Se tudo correu bem, mostramos a tela de sucesso
      setIsSuccess(true);
      
    } catch (error) {
      console.error("Erro no Protocolo de Aplicação:", error);
      alert("Sistema em manutenção ou erro de conexão. Por favor, tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="application-section" className="relative py-24 md:py-48 bg-[#fbf4e4] overflow-hidden">
      <div className="vrtice-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          
          {/* Lado Esquerdo: Copy e Estratégia */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="font-elegant text-[clamp(2.5rem,5vw,4.5rem)] leading-[1] text-[#4a4542]">
                A decisão de abandonar o <br />
                <span className="text-[#ad6f40] italic font-medium">amadorismo é sua.</span>
              </h2>
              
              <p className="text-lg md:text-xl font-light leading-relaxed text-[#7a7470]">
                Escolha instalar a infraestrutura que fará a sua marca vender no silêncio da sua nova autoridade.
              </p>

              <div className="space-y-6 pt-6">
                {[
                  { step: "01", title: "Auditoria", desc: "Análise do seu momento atual de negócio." },
                  { step: "02", title: "O Crivo", desc: "Avaliação criteriosa da nossa diretoria." },
                  { step: "03", title: "A Reunião", desc: "Diagnóstico e viabilidade financeira." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <span className="font-roboto text-xs font-bold text-[#ad6f40] tracking-widest pt-1">{item.step}</span>
                    <div>
                      <h4 className="font-elegant text-xl text-[#4a4542] group-hover:text-[#ad6f40] transition-colors">{item.title}</h4>
                      <p className="text-sm opacity-60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Lado Direito: Formulário de Admissão */}
          <div className="relative">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05, filter: "blur(20px)" }}
                  className="glass-panel p-8 md:p-12 bg-white/60 border-white shadow-[0_50px_100px_rgba(173,111,64,0.08)]"
                >
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="text-center mb-10">
                      <p className="font-roboto text-[10px] uppercase tracking-[0.4em] font-bold text-[#ad6f40] mb-2">Formulário de Admissão</p>
                      <h3 className="font-elegant text-2xl text-[#4a4542]">Protocolo VALORE</h3>
                    </div>

                    <div className="relative group">
                      <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7a7470]/40 group-focus-within:text-[#ad6f40] transition-colors" />
                      <input 
                        required 
                        type="text" 
                        placeholder="Seu Nome Completo"
                        className="w-full h-14 pl-12 pr-6 bg-white/50 border border-white focus:bg-white focus:border-[#ad6f40]/30 rounded-2xl outline-none transition-all text-sm text-[#4a4542]"
                        value={formData.nome}
                        onChange={(e) => setFormData({...formData, nome: e.target.value})}
                      />
                    </div>

                    <div className="relative group">
                      <Building2 size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7a7470]/40 group-focus-within:text-[#ad6f40] transition-colors" />
                      <input 
                        required 
                        type="text" 
                        placeholder="Nome da sua Marca"
                        className="w-full h-14 pl-12 pr-6 bg-white/50 border border-white focus:bg-white focus:border-[#ad6f40]/30 rounded-2xl outline-none transition-all text-sm text-[#4a4542]"
                        value={formData.empresa}
                        onChange={(e) => setFormData({...formData, empresa: e.target.value})}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="relative group">
                        <InstagramIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-[#7a7470]/40 group-focus-within:text-[#ad6f40] transition-colors" />
                        <input 
                          required 
                          type="text" 
                          placeholder="@instagram"
                          className="w-full h-14 pl-12 pr-6 bg-white/50 border border-white focus:bg-white focus:border-[#ad6f40]/30 rounded-2xl outline-none transition-all text-sm text-[#4a4542]"
                          value={formData.instagram}
                          onChange={(e) => setFormData({...formData, instagram: e.target.value})}
                        />
                      </div>
                      <div className="relative group">
                        <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7a7470]/40 group-focus-within:text-[#ad6f40] transition-colors" />
                        <input 
                          required 
                          type="email" 
                          placeholder="E-mail Profissional"
                          className="w-full h-14 pl-12 pr-6 bg-white/50 border border-white focus:bg-white focus:border-[#ad6f40]/30 rounded-2xl outline-none transition-all text-sm text-[#4a4542]"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="premium-button w-full h-16 mt-4 group"
                    >
                      {isSubmitting ? (
                        <Loader2 className="animate-spin" />
                      ) : (
                        <>
                          SOLICITAR ANÁLISE DE PERFIL 
                          <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>

                    <p className="text-[10px] text-center opacity-40 uppercase tracking-widest pt-4">
                      A aplicação não garante aprovação.
                    </p>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="glass-panel p-12 bg-white/80 border-white text-center flex flex-col items-center"
                >
                  <div className="w-20 h-20 rounded-full bg-[#ad6f40]/10 flex items-center justify-center text-[#ad6f40] mb-8">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="font-elegant text-3xl text-[#4a4542] mb-4">Protocolo Enviado.</h3>
                  <p className="text-[#7a7470] font-light leading-relaxed mb-8">
                    Sua aplicação entrou em nossa fila de auditoria. Caso aprovada, entraremos em contato para o agendamento da reunião de diagnóstico.
                  </p>
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#ad6f40]">
                    <ShieldCheck size={14} /> Ambiente Criptografado
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}