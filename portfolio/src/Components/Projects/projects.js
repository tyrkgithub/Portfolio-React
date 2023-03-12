import React from "react";
import Project from "./project";

// Import Pictures
import App1 from "../../Assets/wasa.png";
import App2 from "../../Assets/bootstrap.png";
import App3 from "../../Assets/jsQuiz.png";
import App4 from "../../Assets/passwordGenerator.png";

// Skills Lists
const app1Skills = [1, 2, 3, 4, 5];
const app1list = app1Skills.map((skill) => <li>{skill}</li>);

const app2Skills = [1, 2, 3, 4, 5];
const app2list = app2Skills.map((skill) => <li>{skill}</li>);

const app3Skills = [1, 2, 3, 4, 5];
const app3list = app3Skills.map((skill) => <li>{skill}</li>);

const app4Skills = [1, 2, 3, 4, 5];
const app4list = app4Skills.map((skill) => <li>{skill}</li>);

const app5Skills = [1, 2, 3, 4, 5];
const app5list = app5Skills.map((skill) => <li>{skill}</li>);

const app6Skills = [1, 2, 3, 4, 5];
const app6list = app6Skills.map((skill) => <li>{skill}</li>);

// Projects
function Projects() {
  return (
    <section className="gridArea container-fluid justify-content-center">
      <h2 className="h2">Projects</h2>
      <div className="row">
        <div className="col-sm-4">
          <Project
            imgsrc={App1}
            title="WASA"
            href="https://tyrkgithub.github.io/Weather-Activity-Suggester-Application/"
            p="Weather Activity Suggestion Application"
            li={app1list}
          />
        </div>
        <div className="col-sm-4">
          <Project
            imgsrc={App3}
            title="JS Knowledge Quiz"
            href=""
            p="Test out your Javascript knowledge"
            li={app2list}
          />
        </div>
        <div className="col-sm-4">
          <Project
            imgsrc={App4}
            title="Password Generator"
            href=""
            p="Generates a random character password"
            li={app3list}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <Project
            imgsrc={App2}
            title="Bootstrap Portfolio"
            href=""
            p=""
            li={app4list}
          />
        </div>
        <div className="col-sm-4">
          <Project
            imgsrc={App2}
            title="Bootstrap Portfolio"
            href=""
            p=""
            li={app5list}
          />
        </div>
        <div className="col-sm-4">
          <Project
            imgsrc={App2}
            title="Bootstrap Portfolio"
            href=""
            p=""
            li={app6list}
          />
        </div>
      </div>
      <div className="row">
        <h2 className="h2">Resume</h2>
        <div className="col-sm-12">
          <Project imgsrc={App2} title="Bootstrap Portfolio" href="" />
        </div>
      </div>
    </section>
  );
}

export default Projects;
