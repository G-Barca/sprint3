// tipagem de objetos

export interface Integrante {
  nome: string;
  rm: string;
  turma: string;
  github: string;
  linkedin: string;
  foto: string;
}

// status de agendamento

export type StatusAgendamento = 'pendente' | 'confirmado' | 'cancelado';

// tipo de usuário

export type TipoUsuario = 'paciente' | 'voluntario' | 'admin';

// dados de contato

export type UsuarioContato = {
  nome: string;
  email: string;
} & {
  telefone: string;
  cpf: string;
};


export type ID = string | number;