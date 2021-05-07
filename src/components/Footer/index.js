import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer id="contact" className="row mx-1 mb-4">
        <h3 col-3><pre className="h-auto p-1">Contact {"\n"}Me</pre></h3>
        <div className="row col-9 justify-content-between ml-1">
          <a href="tel:1-215-622-7838">215.622.7838</a>
          <a href="mailto:invertedrdm@gmail.com">invertedrdm@gmail.com</a>
          <a href="https://github.com/skelly1389/" target="_blank">Github</a>
          <a href="https://bandcamp.com/guilty" target="_blank">Bandcamp</a>
          <img src="https://cdn.discordapp.com/attachments/806355192898519100/808116016285876254/Sean_Running_v2.gif" height="70px" width="54px" alt="shovel sean" id="bottomgif" className="mt-1" />
        </div>
      </footer>
  );
}

export default Footer;
