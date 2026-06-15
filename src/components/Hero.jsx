import { useDigitacao } from '../hooks/useDigitacao';

const FRASES = [
  'Desenvolvedor Full Stack',
  'Analista de Dados',
  'Entusiasta de IA',
  'Freelancer em Sites e Landing Pages',
];

export default function Hero() {
  const texto = useDigitacao(FRASES);

  return (
    <section id="inicio" className="hero" aria-label="Apresentação">
      <div className="hero-conteudo">
        <p className="hero-saudacao">Olá! Eu sou</p>
        <h1>Anderson Silva</h1>
        <h2 className="digitando" aria-live="polite">{texto}</h2>
        <p className="hero-frase">"A melhor forma de prever o futuro é criá-lo."</p>
        <div className="hero-acoes">
          <a className="botao botao-primario" href="public\curriculo\Anderson-Silva-CV.pdf" target="_blank" rel="noopener noreferrer">
            <i className="fa-solid fa-file-pdf" aria-hidden="true" /> Vizualizar CV
          </a>
          <a className="botao botao-secundario" href="#projetos">Ver projetos</a>
        </div>
        <ul className="hero-sociais" aria-label="Redes sociais">
          <li>
            <a href="https://www.linkedin.com/in/anderson-silva-597b78167/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin-in" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="https://github.com/Anderson-S-Silva" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fa-brands fa-github" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>

      <div className="hero-terminal" aria-hidden="true">
        <div className="terminal-barra">
          <span /><span /><span />
          <p>anderson@dev: ~</p>
        </div>
        <div className="terminal-corpo">
          <p><span className="prompt">$</span> whoami</p>
          <p className="saida">Desenvolvedor Back-End Jr · São Paulo, BR</p>
          <p><span className="prompt">$</span> cat stack.txt</p>
          <p className="saida">Python · SQL · JavaScript · React · AWS</p>
          <p><span className="prompt">$</span> cat foco.txt</p>
          <p className="saida">APIs · Automação · Dados · IA</p>
          <p><span className="prompt">$</span> <span className="cursor-terminal" /></p>
        </div>
      </div>
    </section>
  );
}
