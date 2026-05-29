// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

/**
 * Inicialização do Cliente Supabase - Infraestrutura VALORE
 * 
 * Utilizamos variáveis de ambiente NEXT_PUBLIC para garantir que o cliente
 * possa ser acessado tanto no lado do servidor quanto no lado do cliente (browser).
 */

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
// Atualizado para a nova chave de publicação padrão
const supabasePublishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY || '';

if (!supabaseUrl || !supabasePublishableKey) {
  if (process.env.NODE_ENV !== 'production') {
    console.warn(
      "Aviso: Credenciais do Supabase não encontradas. Verifique se NEXT_PUBLIC_SUPABASE_URL e " +
      "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY estão definidas no seu .env.local"
    );
  }
}

export const supabase = createClient(supabaseUrl, supabasePublishableKey);