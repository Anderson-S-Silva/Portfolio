import { Revelar } from '../hooks/useRevelar';

export default function Contato() {
  return (
    <section id="contato" className="secao contato" aria-labelledby="titulo-contato">
      <Revelar className="secao-titulo">
        <p className="eyebrow">// contato</p>
        <h2 id="titulo-contato">Vamos conversar?</h2>
      </Revelar>
      <Revelar>
        <p className="contato-texto">
          Estou aberto a oportunidades, projetos freelance e boas ideias. A forma mais rápida de me
          encontrar é por e-mail ou LinkedIn.
        </p>
        <div className="hero-acoes" style={{ justifyContent: 'center' }}>
          <a className="botao botao-primario" href="mailto:anderson.santos.silva@outlook.com.br">
            <i className="fa-solid fa-envelope" aria-hidden="true" /> Enviar e-mail
          </a>
          <a className="botao botao-secundario" href="https://www.linkedin.com/in/anderson-silva-597b78167/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin-in" aria-hidden="true" /> LinkedIn
          </a>
        </div>
      </Revelar>
    </section>
  );
}
