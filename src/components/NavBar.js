import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{links.map((components) => <a href={"#"+ components} key={components}>{components}</a>)}</nav>;
}

export default NavBar;
