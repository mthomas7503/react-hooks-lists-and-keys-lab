import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  
  const list = projects.map(projInfo => <ProjectItem key={projInfo.id} name={projInfo.name} about={projInfo.about} technologies={projInfo.technologies}/>)
  
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{list}</div>
    </div>
  );
}

export default ProjectList;
