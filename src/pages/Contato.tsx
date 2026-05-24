import { useForm } from "react-hook-form";
import { useEffect } from 'react';

type ContatoFormData = {
  nome: string;
  cpf: string;
  email: string;
};

export function Contato() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContatoFormData>();

  const onSubmit = (data: ContatoFormData) => {
    console.log(data);
    alert("Informações enviadas com sucesso!");
    reset();
  };
useEffect(() => {
  document.title = 'Contato | Turma do Bem';
}, []);
  return (
    <main className="flex-grow max-w-[1100px] mx-auto my-12 px-5 pb-24">
      <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <article>
          <h2 className="text-2xl font-bold text-[#333] mb-8">Insira suas informações de contato:</h2>
      
          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Nome */}
            <div className="flex flex-col">
              <label htmlFor="nome" className="font-semibold mb-2 text-[#333]">Nome:</label>
              <input 
                {...register("nome", { 
                  required: "O nome é obrigatório", 
                  minLength: { value: 3, message: "Mínimo 3 caracteres" } 
                })}
                className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#66C845] focus:border-transparent outline-none transition-all"
                placeholder="Seu nome completo"
              />
              {errors.nome && <p className="text-red-600 text-sm font-bold mt-1">{errors.nome.message}</p>}
            </div>

            {/* CPF */}
            <div className="flex flex-col">
              <label htmlFor="cpf" className="font-semibold mb-2 text-[#333]">CPF:</label>
              <input 
                {...register("cpf", { 
                  required: "O CPF é obrigatório", 
                  pattern: { value: /^\d{11}$/, message: "Digite 11 números sem pontos ou traços." } 
                })}
                className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#66C845] focus:border-transparent outline-none transition-all"
                placeholder="00000000000"
              />
              {errors.cpf && <p className="text-red-600 text-sm font-bold mt-1">{errors.cpf.message}</p>}
            </div>

            {/* Email */}
            <div className="flex flex-col md:col-span-2">
              <label htmlFor="email" className="font-semibold mb-2 text-[#333]">Email:</label>
              <input 
                type="email"
                {...register("email", { 
                  required: "O email é obrigatório", 
                  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Email inválido" } 
                })}
                className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#66C845] focus:border-transparent outline-none transition-all"
                placeholder="exemplo@email.com"
              />
              {errors.email && <p className="text-red-600 text-sm font-bold mt-1">{errors.email.message}</p>}
            </div>

            <div className="md:col-span-2">
              <button 
                type="submit" 
                className="bg-[#F68B1E] text-white font-bold py-3 px-10 rounded-full hover:bg-[#66C845] transition-all duration-300 shadow-md"
              >
                Enviar
              </button>
            </div>
          </form>

          <div className="mt-16 border-t pt-10">
            <h2 className="text-3xl font-bold text-[#F68B1E] mb-6">Fale Conosco</h2>
            <div className="flex flex-col lg:flex-row gap-10 items-start">
              <img 
                src="/img/tratamento.jpg" 
                alt="Tratamento Odontológico" 
                className="w-full lg:w-1/2 rounded-2xl shadow-lg border-2 border-[#66C845]"
              />

              <address className="not-italic bg-[#FFFFE0] p-6 rounded-lg border-l-8 border-[#F68B1E] w-full lg:w-1/2">
                <p className="mb-4 text-lg">
                  <strong>| Rua Maurício Francisco Klabin, 449 Vila Mariana, São Paulo – SP, 04120-020 |</strong>
                </p>
                <div className="space-y-2 text-[#333]">
                  <p><strong>Fone:</strong> +55 (11) 5084-7276</p>
                  <p><strong>Presidente:</strong> turmadobem@tdb.org.br</p>
                  <p><strong>Comunicação:</strong> comunicacao@tdb.org.br</p>
                </div>
              </address>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}