import React from "react";
import "./style.css";

function Main(props) {
  return (
    <main id="work" className="row">
        <h3 className="col-2 mx-2 pl-4 mt-4 justify-content-center">work</h3>
        <div className="row col-md-10 col-sm-12 justify-items-around">
          <div className="card col-12" style={{width: '18rem'}}>
            <img className="card-img-top" src="./assets/screenshots/movieaoo.png" alt="screenshot of project 1 movie lister" />
            <div className="card-body">
              <h5 className="card-title text-center">Movie Bucket List</h5>
              <p className="card-text text-center">A deployed, full stack application that allows users to create accounts, search for movies, and add them to custom lists that are displayed on the home page</p>
              <div className="d-flex justify-content-center">
                <a href="https://patient-wave-6474.herokuapp.com/" target="_blank" className="btn btn-primary center-block">View the site!</a>
              </div>
            </div>
          </div>
          <div className="card col-md-6 col-sm-12" style={{width: '18rem'}}>
            <img className="card-img-top" src="./assets/screenshots/scheduler.png" alt="screenshot of work day schedule app" />
            <div className="card-body">
              <h5 className="card-title">Work Day Scheduler</h5>
              <p className="card-text">Displays date color coordinates hours left in the workday. Allows user to save tasks to each hour so that they load on refresh</p>
              <a href="https://github.com/skelly1389/Work-Day-Scheduler" target="_blank" className="btn btn-primary">View the repo!</a>
            </div>
          </div>
          <div className="card col-md-6 col-sm-12" style={{width: '18rem'}}>
            <img className="card-img-top" src="./assets/screenshots/emplgen.png" alt="screenshot of employee generator app" />
            <div className="card-body">
              <h5 className="card-title">Employee Tracker</h5>
              <p className="card-text">Allows a user to manage employees, roles, and departments through the command line</p>
              <a href="https://github.com/skelly1389/Employee-Tracker" target="_blank" className="btn btn-primary">View the repo!</a>
            </div>
          </div>
        </div>
      </main>
  );
}

export default Main;