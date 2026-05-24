import { useForm } from "react-hook-form";
import { useEffect } from 'react';

type CadastroFormData = {
  nome: string;
  nascimento: string;
  email: string;
};

export function Cadastro() {

  //  React Hook Form

  const { register, handleSubmit, formState: { errors }, reset } = useForm<CadastroFormData>();

  const onSubmit = (data: CadastroFormData) => {
    console.log(data);
    alert("Cadastro realizado com sucesso!");
    reset();
  };
useEffect(() => {
  document.title = 'Cadastro | Turma do Bem';
}, []);
  return (
    <main className="flex-grow max-w-[1100px] mx-auto my-12 px-5 pb-24">
      <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <article>
          <h1 className="text-3xl font-bold text-[#F68B1E] mb-2">Cadastro</h1>
          <h2 className="text-1g text-gray-600 mb-8">Insira seus dados:</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-lg">

            {/* Nome */}

            <div className="flex flex-col">
              <label htmlFor="nome" className="font-semibold mb-2 text-[#333]">Nome:</label>
              <input 
                {...register("nome", { 
                  required: "O nome é obrigatório", 
                  minLength: { value: 3, message: "O nome deve ter pelo menos 3 caracteres." } 
                })}
                className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#66C845] outline-none transition-all"
                placeholder="Seu nome completo"
              />
              {errors.nome && <p className="text-red-600 text-sm font-bold mt-1">{errors.nome.message}</p>}
            </div>

            {/* Nascimento */}

            <div className="flex flex-col">
              <label htmlFor="nascimento" className="font-semibold mb-2 text-[#333]">Data de Nascimento:</label>
              <input 
                type="date"
                {...register("nascimento", { required: "A data de nascimento é obrigatória" })}
                className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#66C845] outline-none transition-all"
              />
              {errors.nascimento && <p className="text-red-600 text-sm font-bold mt-1">{errors.nascimento.message}</p>}
            </div>

            {/* Email */}
            
            <div className="flex flex-col">
              <label htmlFor="email" className="font-semibold mb-2 text-[#333]">Email:</label>
              <input 
                type="email"
                {...register("email", { 
                  required: "O email é obrigatório", 
                  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Digite um email válido." } 
                })}
                className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#66C845] outline-none transition-all"
                placeholder="exemplo@email.com"
              />
              {errors.email && <p className="text-red-600 text-sm font-bold mt-1">{errors.email.message}</p>}
            </div>

            <button 
              type="submit" 
              className="bg-[#F68B1E] text-white font-bold py-3 px-10 rounded-full hover:bg-[#66C845] transition-all duration-300 shadow-md"
            >
              Enviar
            </button>
          </form>
        </article>
      </section>
    </main>
  );
}