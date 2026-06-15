import { useEffect, useState } from 'react';

const LINKS = [
  { href: '#inicio', rotulo: 'Início' },
  { href: '#sobre', rotulo: 'Sobre' },
  { href: '#qualificacoes', rotulo: 'Qualificações' },
  { href: '#projetos', rotulo: 'Projetos' },
  { href: '#contato', rotulo: 'Contato' },
];

export default function Header() {
  // useState: estado do menu mobile (aberto/fechado)
  const [menuAberto, setMenuAberto] = useState(false);

  // Fecha o menu com a tecla Esc
  useEffect(() => {
    const aoTeclar = (e) => e.key === 'Escape' && setMenuAberto(false);
    document.addEventListener('keydown', aoTeclar);
    return () => document.removeEventListener('keydown', aoTeclar);
  }, []);

  return (
    <header>
      <a className="logo" href="#inicio">
        Anderson<span>.dev</span>
      </a>
      <nav aria-label="Navegação principal">
        <ul className={`navegacao-primaria ${menuAberto ? 'ativado' : ''}`} id="menu">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMenuAberto(false)}>
                {link.rotulo}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="menu-toggle"
          aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuAberto}
          aria-controls="menu"
          onClick={() => setMenuAberto(!menuAberto)}
        >
          <i className={`fa-solid ${menuAberto ? 'fa-xmark' : 'fa-bars'}`} aria-hidden="true" />
        </button>
      </nav>
    </header>
  );
}
