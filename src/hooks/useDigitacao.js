import { useEffect, useState } from 'react';

// Hook customizado: efeito de máquina de escrever alternando frases.
export function useDigitacao(frases, velocidade = 75, pausa = 2000) {
  const [texto, setTexto] = useState('');

  useEffect(() => {
    const reduzido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduzido) {
      setTexto(frases[0]);
      return;
    }

    let indiceFrase = 0;
    let indiceLetra = 0;
    let apagando = false;
    let timer;

    function passo() {
      const frase = frases[indiceFrase];
      if (!apagando) {
        indiceLetra++;
        setTexto(frase.slice(0, indiceLetra));
        if (indiceLetra === frase.length) {
          apagando = true;
          timer = setTimeout(passo, pausa);
          return;
        }
        timer = setTimeout(passo, velocidade);
      } else {
        indiceLetra--;
        setTexto(frase.slice(0, indiceLetra));
        if (indiceLetra === 0) {
          apagando = false;
          indiceFrase = (indiceFrase + 1) % frases.length;
        }
        timer = setTimeout(passo, 40);
      }
    }

    passo();
    return () => clearTimeout(timer); // limpeza ao desmontar o componente
  }, [frases, velocidade, pausa]);

  return texto;
}
