// src/app/api/apply/route.ts
import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabase';

/**
 * Endpoint: POST /api/apply
 * 
 * Objetivo: Receber, validar e processar de forma segura os dados 
 * do formulário de admissão do protocolo VALORE.
 */
export async function POST(request: Request) {
  try {
    // 1. Recebemos e abrimos o "pacote" de dados enviado pelo formulário
    const body = await request.json();
    const { nome, empresa, instagram, email } = body;

    // 2. Validação Básica: Verificamos se todos os campos obrigatórios vieram
    if (!nome || !empresa || !instagram || !email) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios para a auditoria.' },
        { status: 400 } // 400 significa "Bad Request" (Pedido Inválido)
      );
    }

    // 3. Limpeza de Dados (Sanitização)
    // Removemos espaços vazios e garantimos que o Instagram começa com '@'
    let cleanInstagram = instagram.trim();
    if (!cleanInstagram.startsWith('@')) {
      cleanInstagram = `@${cleanInstagram}`;
    }

    // 4. Inserção Segura no Supabase (Backend para Backend)
    const { data, error } = await supabase
      .from('applications')
      .insert([
        {
          nome: nome.trim(),
          empresa: empresa.trim(),
          instagram: cleanInstagram,
          email: email.trim().toLowerCase(), // Guardamos o email em letras minúsculas
          status: 'pending',
          applied_at: new Date().toISOString()
        }
      ]);

    // Se o banco de dados reportar um erro, lançamos esse erro para o bloco 'catch'
    if (error) {
      throw error;
    }

    // 5. Resposta de Sucesso ao Formulário
    return NextResponse.json(
      { success: true, message: 'Protocolo recebido com sucesso.' },
      { status: 201 } // 201 significa "Created" (Criado com sucesso)
    );

  } catch (error) {
    // Se algo correr mal, registamos no servidor (console) e enviamos um erro genérico
    console.error("Erro interno no processamento da aplicação:", error);
    return NextResponse.json(
      { error: 'Erro interno no servidor. Tente novamente mais tarde.' },
      { status: 500 } // 500 significa "Internal Server Error"
    );
  }
}