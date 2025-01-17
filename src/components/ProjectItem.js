import React from "react";
import ProjectList from "./ProjectList";

function ProjectItem({ name, about, technologies }) {

  const items = technologies.map(langnframe => <span key={langnframe}>{langnframe}</span>)

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {items}
      </div>
    </div>
  );
  
}

export default ProjectItem;
