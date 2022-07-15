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
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "ts", name: "TypeScript", icon: <SiTypescript />},
  { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
  { id: "react", name: "React", icon: <DiReact /> }
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
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis nemo voluptatem cupiditate </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TecnologiesContainer;