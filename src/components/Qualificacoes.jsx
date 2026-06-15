import { Revelar } from '../hooks/useRevelar';
import { experiencias, formacoes, habilidades } from '../data/conteudo';

// Componente reutilizável: a mesma Timeline serve para
// experiência E formação — só mudam os dados (props).
function Timeline({ icone, titulo, itens }) {
  return (
    <Revelar className="timeline">
      <h3><i className={icone} aria-hidden="true" /> {titulo}</h3>
      <ol>
        {itens.map((item) => (
          <li key={item.cargo}>
            <span className="periodo">{item.periodo}</span>
            <h4>{item.cargo}</h4>
            <p>{item.descricao}</p>
          </li>
        ))}
      </ol>
    </Revelar>
  );
}

export default function Qualificacoes() {
  return (
    <section id="qualificacoes" className="secao" aria-labelledby="titulo-qualificacoes">
      <Revelar className="secao-titulo">
        <p className="eyebrow">// trajetória</p>
        <h2 id="titulo-qualificacoes">Qualificações</h2>
      </Revelar>

      <div className="timeline-grid">
        <Timeline icone="fa-solid fa-briefcase" titulo="Experiência" itens={experiencias} />
        <Timeline icone="fa-solid fa-graduation-cap" titulo="Formação Acadêmica" itens={formacoes} />
      </div>

      <Revelar className="habilidades">
        <h3><i className="fa-solid fa-code" aria-hidden="true" /> Tecnologias que utilizo</h3>
        <div className="habilidades-grupos">
          {habilidades.map((grupo) => (
            <div key={grupo.grupo}>
              <h4>{grupo.grupo}</h4>
              <ul className="tags">
                {grupo.itens.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Revelar>
    </section>
  );
}
