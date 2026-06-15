import Header from './components/Header';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Qualificacoes from './components/Qualificacoes';
import Projetos from './components/Projetos';
import Contato from './components/Contato';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <a className="pular-conteudo" href="#inicio">Pular para o conteúdo</a>
      <Header />
      <Hero />
      <main>
        <Sobre />
        <Qualificacoes />
        <Projetos />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
