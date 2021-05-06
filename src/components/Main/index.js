import React from "react";
import "./style.css";

function Main(props) {
  return (
          <div className="card col-md-6 col-sm-12" style={{width: '18rem'}}>
            <img className="card-img-top" src={props.screenshot} alt={"Screen shot of " + props.title} />
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.description}</p>
              <a href={props.deployed} target="_blank" className="btn btn-primary">View the live site!</a>
              <a href={props.repo} target="_blank" className="btn btn-primary">View the repo!</a>
            </div>
          </div>
  );
}

export default Main;