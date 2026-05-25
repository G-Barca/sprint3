import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

type CadastroFormData = {
  nome: string;
  nascimento: string;
  email: string;
  cep: string;
  rua: string;
  bairro: string;
  cidade: string;
  estado: string;
};

export function Cadastro() {
  const { register, handleSubmit, formState: { errors }, reset, setValue, watch } = useForm<CadastroFormData>();
  const [loadingCep, setLoadingCep] = useState(false);
  const [erroCep, setErroCep] = useState('');

  const cep = watch('cep');

  useEffect(() => {
    document.title = 'Cadastro | Turma do Bem';
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

  const onSubmit = (data: CadastroFormData) => {
    console.log(data);
    alert('Cadastro realizado com sucesso!');
    reset();
  };

  return (
    <main className="flex-grow max-w-[1100px] mx-auto my-12 px-5 pb-24">
      <section className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <article>
          <h1 className="text-3xl font-bold text-[#F68B1E] mb-2">Cadastro</h1>
          <h2 className="text-lg text-gray-600 mb-8">Insira seus dados:</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-lg">

            {/* Nome */}
            <div className="flex flex-col">
              <label className="font-semibold mb-2 text-[#333]">Nome:</label>
              <input
                {...register('nome', {
                  required: 'O nome é obrigatório',
                  minLength: { value: 3, message: 'Mínimo 3 caracteres.' }
                })}
                className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#66C845] outline-none transition-all"
                placeholder="Seu nome completo"
              />
              {errors.nome && <p className="text-red-600 text-sm font-bold mt-1">{errors.nome.message}</p>}
            </div>

            {/* Nascimento */}
            <div className="flex flex-col">
              <label className="font-semibold mb-2 text-[#333]">Data de Nascimento:</label>
              <input
                type="date"
                {...register('nascimento', { required: 'A data de nascimento é obrigatória' })}
                className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#66C845] outline-none transition-all"
              />
              {errors.nascimento && <p className="text-red-600 text-sm font-bold mt-1">{errors.nascimento.message}</p>}
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="font-semibold mb-2 text-[#333]">Email:</label>
              <input
                type="email"
                {...register('email', {
                  required: 'O email é obrigatório',
                  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Digite um email válido.' }
                })}
                className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#66C845] outline-none transition-all"
                placeholder="exemplo@email.com"
              />
              {errors.email && <p className="text-red-600 text-sm font-bold mt-1">{errors.email.message}</p>}
            </div>

            {/* CEP */}
            <div className="flex flex-col">
              <label className="font-semibold mb-2 text-[#333]">CEP:</label>
              <input
                {...register('cep', {
                  required: 'O CEP é obrigatório',
                  pattern: { value: /^\d{8}$/, message: 'Digite 8 números sem traço.' }
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
            <div className="flex flex-col">
              <label className="font-semibold mb-2 text-[#333]">Rua:</label>
              <input
                {...register('rua')}
                className="border border-gray-300 p-3 rounded-lg bg-gray-50 outline-none"
                placeholder="Preenchido automaticamente"
                readOnly
              />
            </div>

            {/* Bairro e Cidade */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="font-semibold mb-2 text-[#333]">Bairro:</label>
                <input
                  {...register('bairro')}
                  className="border border-gray-300 p-3 rounded-lg bg-gray-50 outline-none"
                  placeholder="Preenchido automaticamente"
                  readOnly
                />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold mb-2 text-[#333]">Estado:</label>
                <input
                  {...register('estado')}
                  className="border border-gray-300 p-3 rounded-lg bg-gray-50 outline-none"
                  placeholder="UF"
                  readOnly
                />
              </div>
            </div>

            {/* Cidade */}
            <div className="flex flex-col">
              <label className="font-semibold mb-2 text-[#333]">Cidade:</label>
              <input
                {...register('cidade')}
                className="border border-gray-300 p-3 rounded-lg bg-gray-50 outline-none"
                placeholder="Preenchido automaticamente"
                readOnly
              />
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