import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

type Tema = 'claro' | 'escuro';

type ThemeContextType = {
  tema: Tema;
  alternarTema: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [tema, setTema] = useState<Tema>('claro');

  const alternarTema = () => {
    setTema(prev => prev === 'claro' ? 'escuro' : 'claro');
  };

  return (
    <ThemeContext.Provider value={{ tema, alternarTema }}>
      <div className={tema === 'escuro' ? 'bg-gray-900 text-white min-h-screen' : 'bg-[#FFFFE0] text-[#333] min-h-screen'}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTema() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTema deve ser usado dentro do ThemeProvider');
  return context;
}