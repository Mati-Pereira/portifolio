import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiReact
} from 'react-icons/di'
import {
  SiTypescript
} from 'react-icons/si'

import '../styles/components/tecnologies.scss'

const tecnologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 />, content: "HTML (Linguagem de Marcação de HiperTexto) é o bloco de construção mais básico da web." },
  { id: "css", name: "CSS", icon: <DiCss3 />, content: "CSS é uma linguagem de estilo usada para descrever a apresentação de um documento escrito em HTML" },
  { id: "js", name: "JavaScript", icon: <DiJsBadge />, content: "JavaScript é uma linguagem leve, interpretada e baseada em objetos com funções de primeira classe" },
  { id: "ts", name: "TypeScript", icon: <SiTypescript />, content: "TypeScript é um “superset” do Javascript, criado para adicionar recursos de tipagem estáticas à linguagem original." },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall />, content: "Node.js® é um JavaScript runtime construído sobre o motor JavaScript V8 da Chrome." },
  { id: "react", name: "React", icon: <DiReact />, content: "Uma biblioteca JavaScript para criar interfaces de usuário" }
]

function TecnologiesContainer() {
  return (
    <section id="tecnologies-container">
      <h2>Tecnologias</h2>
      <div className="tecnologies-grid">
        {tecnologies.map((tecnology, index) => (
          <div id={tecnology.id} className="tecnology-card" key={index}>
            <div className="icon">
              {tecnology.icon}
            </div>
            <div className="tecnology-info">
              <h3>{tecnology.name}</h3>
              <p>{tecnology.content} </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TecnologiesContainer;