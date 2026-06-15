import { useEffect, useRef, useState } from 'react';

// Hook customizado: revela o elemento quando ele entra na tela.
// Uso: const { ref, visivel } = useRevelar();
export function useRevelar() {
  const ref = useRef(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const reduzido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduzido || !('IntersectionObserver' in window)) {
      setVisivel(true);
      return;
    }
    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisivel(true);
          observador.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    if (ref.current) observador.observe(ref.current);
    return () => observador.disconnect();
  }, []);

  return { ref, visivel };
}

// Componente auxiliar que aplica a revelação em qualquer conteúdo.
export function Revelar({ children, className = '' }) {
  const { ref, visivel } = useRevelar();
  return (
    <div ref={ref} className={`revelar ${visivel ? 'visivel' : ''} ${className}`}>
      {children}
    </div>
  );
}
