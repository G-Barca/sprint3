import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import type { StatusAgendamento } from '../types';

type Voluntario = {
  id: number;
  nome: string;
  especialidade: string;
  status: StatusAgendamento;
  descricao: string;
};

const voluntarios: Voluntario[] = [
  {
    id: 1,
    nome: 'Dr. Carlos Silva',
    especialidade: 'Ortodontia',
    status: 'confirmado',
    descricao: 'Especialista em ortodontia',
  },
  {
    id: 2,
    nome: 'Dra. Ana Souza',
    especialidade: 'Pediatria Dentária',
    status: 'confirmado',
    descricao: 'Dedicada ao atendimento infantil, atua voluntariamente há 5 anos',
  },
  {
    id: 3,
    nome: 'Dr. Rafael Lima',
    especialidade: 'Cirurgia Oral',
    status: 'pendente',
    descricao: 'Cirurgião experiente, aguardando disponibilidade.',
  },
];

const corStatus: Record<StatusAgendamento, string> = {
  confirmado: 'bg-green-100 text-green-700',
  pendente: 'bg-yellow-100 text-yellow-700',
  cancelado: 'bg-red-100 text-red-700',
};

export function VoluntarioDetalhe() {
  const { id } = useParams<{ id: string }>();
  const voluntario = voluntarios.find((v) => v.id === Number(id));

  useEffect(() => {
    document.title = voluntario
      ? `${voluntario.nome} | Turma do Bem`
      : 'Voluntário não encontrado | Turma do Bem';
  }, [voluntario]);

  if (!voluntario) {
    return (
      <main className="flex-grow max-w-[1100px] mx-auto my-12 px-5 pb-24">
        <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
          <h2 className="text-2xl font-bold text-[#F68B1E] mb-4">Voluntário não encontrado</h2>
          <Link to="/voluntario" className="text-[#F68B1E] font-bold hover:text-[#66C845] transition-colors">
             Voltar
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="flex-grow max-w-[1100px] mx-auto my-12 px-5 pb-24">
      <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <article>
          <Link to="/voluntario" className="text-[#F68B1E] font-bold hover:text-[#66C845] transition-colors text-sm mb-6 inline-block">
            Voltar
          </Link>
          <h1 className="text-3xl font-bold text-[#F68B1E] mb-2">{voluntario.nome}</h1>
          <p className="text-lg text-gray-600 mb-4">{voluntario.especialidade}</p>
          <span className={`text-sm font-semibold px-3 py-1 rounded-full ${corStatus[voluntario.status]}`}>
            {voluntario.status.charAt(0).toUpperCase() + voluntario.status.slice(1)}
          </span>
          <p className="text-gray-700 leading-relaxed mt-6 text-lg">{voluntario.descricao}</p>
        </article>
      </section>
    </main>
  );
}