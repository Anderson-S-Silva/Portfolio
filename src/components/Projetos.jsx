import { useState } from 'react';
import { Revelar } from '../hooks/useRevelar';
import { projetos, categorias } from '../data/conteudo';

// Card de um projeto individual — recebe os dados via props.
function CardProjeto({ projeto }) {
  return (
    <li className="projeto">
      <img src={projeto.imagem} alt={`Captura de tela do projeto ${projeto.titulo}`} loading="lazy" />
      <div className="projeto-corpo">
        <h3>{projeto.titulo}</h3>
        <p>{projeto.descricao}</p>
        <ul className="tags" aria-label="Tecnologias">
          {projeto.tecnologias.map((tec) => (
            <li key={tec}>{tec}</li>
          ))}
        </ul>
        <div className="projeto-links">
          {projeto.links.online && (
            <a href={projeto.links.online} target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" /> Ver online
            </a>
          )}
          {projeto.links.github && (
            <a href={projeto.links.github} target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github" aria-hidden="true" /> Repositório
            </a>
          )}
        </div>
      </div>
    </li>
  );
}

export default function Projetos() {
  // useState guarda o filtro selecionado; trocar o estado re-renderiza a lista.
  const [filtroAtivo, setFiltroAtivo] = useState('todos');

  // Estado derivado: a lista filtrada é calculada a partir do estado.
  const projetosFiltrados =
    filtroAtivo === 'todos'
      ? projetos
      : projetos.filter((p) => p.categoria === filtroAtivo);

  return (
    <section id="projetos" className="secao" aria-labelledby="titulo-projetos">
      <Revelar className="secao-titulo">
        <p className="eyebrow">// trabalhos</p>
        <h2 id="titulo-projetos">Projetos</h2>
      </Revelar>

      <Revelar className="filtros">
        {categorias.map((cat) => (
          <button
            key={cat.id}
            className={`filtro ${filtroAtivo === cat.id ? 'ativo' : ''}`}
            onClick={() => setFiltroAtivo(cat.id)}
          >
            {cat.rotulo}
          </button>
        ))}
      </Revelar>

      <ul className="projetos-grid">
        {projetosFiltrados.map((projeto) => (
          <CardProjeto key={projeto.id} projeto={projeto} />
        ))}
      </ul>

      <Revelar className="projetos-mais">
        <a className="botao botao-secundario" href="https://github.com/Anderson-S-Silva" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-github" aria-hidden="true" /> Ver mais no GitHub
        </a>
      </Revelar>
    </section>
  );
}
