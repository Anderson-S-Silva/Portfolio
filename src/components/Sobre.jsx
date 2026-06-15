import { Revelar } from "../hooks/useRevelar";
import { servicos } from "../data/conteudo";

export default function Sobre() {
  return (
    <section id="sobre" className="secao" aria-labelledby="titulo-sobre">
      <Revelar className="secao-titulo">
        <p className="eyebrow">// sobre</p>
        <h2 id="titulo-sobre">Sobre Mim</h2>
      </Revelar>

      <div className="sobre-grid">
        <Revelar className="sobre-foto">
          <img
            src="\Img\FotoPerfil.png"
            alt="Foto de Anderson Silva"
            loading="lazy"
          />
        </Revelar>
        <Revelar className="sobre-texto">
          <h3>Transformo ideias em soluções práticas</h3>
          <p>
            Atuo no desenvolvimento de software, com experiência em aplicações
            web, integrações entre sistemas, análise de dados e inteligência
            artificial. Meu interesse por tecnologia vai além do código: gosto
            de compreender como os sistemas funcionam, identificar oportunidades
            de melhoria e transformar desafios em soluções eficientes,
            escaláveis e bem estruturadas.
          </p>
          <p>
            Minha trajetória profissional começou no desenvolvimento back-end,
            trabalhando com APIs, integrações, automação de processos e
            processamento de dados. Atualmente, também atuo no desenvolvimento
            front-end, participando da implementação de interfaces, integrações
            com serviços backend e construção de experiências web modernas e
            responsivas.
          </p>
          <p>
            Além da minha atuação profissional, desenvolvo projetos freelance
            voltados à criação de sites, landing pages e soluções web
            personalizadas para empresas e profissionais.
          </p>
          <p>
            Em paralelo, continuo me aprofundando em clean code,
            arquitetura de software, analise de dados e desenvolvimento web,
            ampliando minha visão sobre todo o ciclo de desenvolvimento de
            produtos digitais e buscando construir soluções cada vez mais
            completas e inteligentes.
          </p>
          <ul className="sobre-info">
            <li>
              <i className="fa-solid fa-laptop-code" aria-hidden="true" />{" "}
              Freelance: Disponível
            </li>
            <li>
              <i className="fa-solid fa-location-dot" aria-hidden="true" /> São
              Paulo, Brasil
            </li>
            <li>
              <i className="fa-solid fa-globe" aria-hidden="true" /> Português,
              Espanhol, Inglês
            </li>
            <li>
              <a href="mailto:anderson.santos.silva@outlook.com.br">
                <i className="fa-solid fa-envelope" aria-hidden="true" />{" "}
                anderson.santos.silva@outlook.com.br
              </a>
            </li>
          </ul>
        </Revelar>
      </div>

      {/* .map() transforma o array de dados em componentes — nada de HTML repetido */}
      <ul className="servicos" aria-label="Áreas de atuação">
        {servicos.map((servico) => (
          <li key={servico.titulo} className="revelar visivel">
            <i className={servico.icone} aria-hidden="true" />
            <h3>{servico.titulo}</h3>
            <p>{servico.descricao}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
