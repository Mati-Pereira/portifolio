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
  { id: "html", name: "HTML5", icon: <DiHtml5 />, content: "HTML (HyperText Markup Language) is the most basic building block of the web." },
  { id: "css", name: "CSS", icon: <DiCss3 />, content: "CSS is a style language used to describe the presentation of a document written in HTML" },
  { id: "js", name: "JavaScript", icon: <DiJsBadge />, content: "JavaScript is a lightweight, interpreted, object-based language with first-class functions" },
  { id: "ts", name: "TypeScript", icon: <SiTypescript />, content: "TypeScript is a JavaScript 'superset' designed to add static typing capabilities to the original language." },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall />, content: "Node.js is a JavaScript runtime built on top of Chrome's V8 JavaScript engine." },
  { id: "react", name: "React", icon: <DiReact />, content: "A JavaScript library for creating user interfaces" }
]

function TecnologiesContainerEnglish() {
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

export default TecnologiesContainerEnglish;