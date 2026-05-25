import { useForm } from "react-hook-form";
import { useEffect, useState } from 'react';

type ContatoFormData = {
  nome: string;
  cpf: string;
  email: string;
  cep: string;
  rua: string;
  bairro: string;
  cidade: string;
  estado: string;
};

export function Contato() {
  const { register, handleSubmit, formState: { errors }, reset, setValue, watch } = useForm<ContatoFormData>();
  const [loadingCep, setLoadingCep] = useState(false);
  const [erroCep, setErroCep] = useState('');

  const cep = watch('cep');

  useEffect(() => {
    document.title = 'Contato | Turma do Bem';
  }, []);

  useEffect(() => {
    const cepLimpo = cep?.replace(/\D/g, '');
    if (cepLimpo?.length === 8) {
      setLoadingCep(true);
      setErroCep('');
      fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)
        .then(res => res.json())
        .then(data => {
          if (data.erro) {
            setErroCep('CEP não encontrado.');
          } else {
            setValue('rua', data.logradouro);
            setValue('bairro', data.bairro);
            setValue('cidade', data.localidade);
            setValue('estado', data.uf);
          }
        })
        .catch(() => setErroCep('Erro ao buscar CEP.'))
        .finally(() => setLoadingCep(false));
    }
  }, [cep, setValue]);

  const onSubmit = (data: ContatoFormData) => {
    console.log(data);
    alert("Informações enviadas com sucesso!");
    reset();
  };

  return (
    <main className="flex-grow max-w-[1100px] mx-auto my-12 px-5 pb-24">
      <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <article>
          <h2 className="text-2xl font-bold text-[#333] mb-8">Insira suas informações de contato:</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Nome */}
            <div className="flex flex-col">
              <label className="font-semibold mb-2 text-[#333]">Nome:</label>
              <input
                {...register("nome", {
                  required: "O nome é obrigatório",
                  minLength: { value: 3, message: "Mínimo 3 caracteres" }
                })}
                className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#66C845] outline-none transition-all"
                placeholder="Seu nome completo"
              />
              {errors.nome && <p className="text-red-600 text-sm font-bold mt-1">{errors.nome.message}</p>}
            </div>

            {/* CPF */}
            <div className="flex flex-col">
              <label className="font-semibold mb-2 text-[#333]">CPF:</label>
              <input
                {...register("cpf", {
                  required: "O CPF é obrigatório",
                  pattern: { value: /^\d{11}$/, message: "Digite 11 números sem pontos ou traços." }
                })}
                className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#66C845] outline-none transition-all"
                placeholder="00000000000"
              />
              {errors.cpf && <p className="text-red-600 text-sm font-bold mt-1">{errors.cpf.message}</p>}
            </div>

            {/* Email */}
            <div className="flex flex-col md:col-span-2">
              <label className="font-semibold mb-2 text-[#333]">Email:</label>
              <input
                type="email"
                {...register("email", {
                  required: "O email é obrigatório",
                  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Email inválido" }
                })}
                className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#66C845] outline-none transition-all"
                placeholder="exemplo@email.com"
              />
              {errors.email && <p className="text-red-600 text-sm font-bold mt-1">{errors.email.message}</p>}
            </div>

            {/* CEP */}
            <div className="flex flex-col md:col-span-2">
              <label className="font-semibold mb-2 text-[#333]">CEP:</label>
              <input
                {...register("cep", {
                  required: "O CEP é obrigatório",
                  pattern: { value: /^\d{8}$/, message: "Digite 8 números sem traço." }
                })}
                className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#66C845] outline-none transition-all"
                placeholder="00000000"
                maxLength={8}
              />
              {loadingCep && <p className="text-gray-500 text-sm mt-1">Buscando endereço...</p>}
              {erroCep && <p className="text-red-600 text-sm font-bold mt-1">{erroCep}</p>}
              {errors.cep && <p className="text-red-600 text-sm font-bold mt-1">{errors.cep.message}</p>}
            </div>

            {/* Rua */}
            <div className="flex flex-col md:col-span-2">
              <label className="font-semibold mb-2 text-[#333]">Rua:</label>
              <input
                {...register("rua")}
                className="border border-gray-300 p-3 rounded-lg bg-gray-50 outline-none"
                placeholder="Preenchido automaticamente"
                readOnly
              />
            </div>

            {/* Bairro e Estado */}
            <div className="flex flex-col">
              <label className="font-semibold mb-2 text-[#333]">Bairro:</label>
              <input
                {...register("bairro")}
                className="border border-gray-300 p-3 rounded-lg bg-gray-50 outline-none"
                placeholder="Preenchido automaticamente"
                readOnly
              />
            </div>

            <div className="flex flex-col">
              <label className="font-semibold mb-2 text-[#333]">Estado:</label>
              <input
                {...register("estado")}
                className="border border-gray-300 p-3 rounded-lg bg-gray-50 outline-none"
                placeholder="UF"
                readOnly
              />
            </div>

            {/* Cidade */}
            <div className="flex flex-col md:col-span-2">
              <label className="font-semibold mb-2 text-[#333]">Cidade:</label>
              <input
                {...register("cidade")}
                className="border border-gray-300 p-3 rounded-lg bg-gray-50 outline-none"
                placeholder="Preenchido automaticamente"
                readOnly
              />
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