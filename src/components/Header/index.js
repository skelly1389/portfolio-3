import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Header() {
  return (
    <div>
        <header className="row">
          <h1 className="row-4 ml-1">Sean Kelly</h1>
          <nav className="row-8">
            <a href="#work">work</a>
            <a href="https://www.linkedin.com/in/sean-kelly-2b7818bb/" target="_blank">linkedIn</a>
            <a href="./assets/Sean-Kelly.pdf" target="_blank">resume</a>
            <a href="#contact">contact me</a>
          </nav>
        </header>
        <figure id="backgroundhead" className="pl-1 m-1 mt-4">
          <img src="./assets/himg.jfif" height={250} width={250} alt="hero shot of sean" className="profilepic rounded-circle" />
          <h3>fullstack web developer</h3>
        </figure>
      </div>
  );
}

export default Header;
