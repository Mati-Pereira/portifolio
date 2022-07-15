import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiReact
} from 'react-icons/di'

import '../styles/components/tecnologies.scss'

const tecnologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
  { id: "react", name: "React", icon: <DiReact /> }
]

function TecnologiesContainer() {
  return (
    <section id="tecnologies-container">
      <h2>Tecnologias</h2>
      {tecnologies.map((tecnology, index) => (
        <div id={tecnology.id} className="tecnology-card" key={index}>
          {tecnology.icon}
          <div className="tecnology-info">
            <h3>{tecnology.name}</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis nemo voluptatem cupiditate tenetur hic repellendus laborum, odit amet nihil sunt rerum suscipit, quos officia nostrum sint beatae distinctio excepturi nisi.</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default TecnologiesContainer;