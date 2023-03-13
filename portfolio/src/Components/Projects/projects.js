import React from "react";
import Project from "./project";
import GithubL from "../github/github";
import AppUrl from "../AppUrl/appUrl";
// Import Pictures
import App1 from "../../Assets/wasa.png";
import App2 from "../../Assets/bootstrap.png";
import App3 from "../../Assets/jsQuiz.png";
import App4 from "../../Assets/passwordGenerator.png";
import App5 from "../../Assets/weatherDashboard.png";
import App6 from "../../Assets/consoleFinances.png";

// Skills Lists
const app1Skills = ["API", "Bootstrap", "Javascript"];
const app1list = app1Skills.map((skill) => <li>{skill}</li>);

const app2Skills = ["Javascript", "HTML", "CSS"];
const app2list = app2Skills.map((skill) => <li>{skill}</li>);

const app3Skills = ["Javascript", "UX", "CSS"];
const app3list = app3Skills.map((skill) => <li>{skill}</li>);

const app4Skills = ["Bootstrap", "CSS", "HTML"];
const app4list = app4Skills.map((skill) => <li>{skill}</li>);

const app5Skills = ["API", "CSS", "Javascript"];
const app5list = app5Skills.map((skill) => <li>{skill}</li>);

const app6Skills = ["Logic", "Git", "Javascript"];
const app6list = app6Skills.map((skill) => <li>{skill}</li>);

// Projects
function Projects() {
  return (
    <section className="gridArea container-fluid justify-content-center">
      <div className="row">
        <div className="col-sm-4">
          <Project
            imgsrc={App1}
            title="WASA"
            p="A fun Weather Activity Suggestion Application"
            li={app1list}
          />
          <div className="btnRow justify-content-center">
            <AppUrl
              href="https://tyrkgithub.github.io/Weather-Activity-Suggester-Application/"
              a="Try WASA"
            />
            <GithubL
              href="https://github.com/tyrkgithub/Weather-Activity-Suggester-Application"
              a="WASA gitHub"
            />
          </div>
        </div>
        <div className="col-sm-4">
          <Project
            imgsrc={App3}
            title="JS Knowledge Quiz"
            p="Test out your Javascript knowledge"
            li={app2list}
          />
          <div className="btnRow justify-content-center">
            <AppUrl
              href="https://tyrkgithub.github.io/Javascript-Knowledge-Quiz/"
              a="Test yourself"
            />
            <GithubL
              href="https://github.com/tyrkgithub/Javascript-Knowledge-Quiz"
              a="JS Quiz gitHub"
            />
          </div>
        </div>
        <div className="col-sm-4">
          <Project
            imgsrc={App4}
            title="Password Generator"
            p="Generates a random character password"
            li={app3list}
          />

          <div className="btnRow justify-content-center">
            <AppUrl
              href="https://tyrkgithub.github.io/Password-Generator/"
              a="Create password"
            />
            <GithubL
              href="https://github.com/tyrkgithub/Password-Generator"
              a="Generator gitHub"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <Project
            imgsrc={App2}
            title="Bootstrap Portfolio"
            p="Web Developer portfolio using Bootstrap"
            li={app4list}
          />
          <div className="btnRow justify-content-center">
            <AppUrl
              href="https://tyrkgithub.github.io/Portfolio-Bootstrap/"
              a="Check it out"
            />
            <GithubL
              href="https://github.com/tyrkgithub/Portfolio-Bootstrap"
              a="Portfolio gitHub"
            />
          </div>
        </div>
        <div className="col-sm-4">
          <Project
            imgsrc={App5}
            title="Weather Dashboard"
            p="An application which uses the OpenWeather API"
            li={app5list}
          />
          <div className="btnRow justify-content-center">
            <AppUrl
              href="https://tyrkgithub.github.io/API-Weather-Dashboard/"
              a="Get the weather"
            />
            <GithubL
              href="https://github.com/tyrkgithub/API-Weather-Dashboard"
              a="Weather gitHub"
            />
          </div>
        </div>
        <div className="col-sm-4">
          <Project
            imgsrc={App6}
            title="Console Finances"
            x
            p="An application which automates business finances"
            li={app6list}
          />
          <div className="btnRow justify-content-center">
            <AppUrl
              href="https://github.com/tyrkgithub/Console-Finances"
              a="See the code"
            />
            <GithubL
              href="https://github.com/tyrkgithub/Console-Finances"
              a="Finances gitHub"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
