import React from 'react';
import projectCoringa from '../assets/images/coringa.png';
import projectDisney from '../assets/images/dsneyclone.png';
import projectPortoDay from '../assets/images/portoday.png';
import projectGrill from '../assets/images/portogrill.jpeg';
import projectTech from '../assets/images/portotech.png';
import projectSorteador from '../assets/images/sorteador.png';
import projectWeather from '../assets/images/weatherapp.png';
import '../Buttons/ButtonStyles.scss';
import './ProjectsStyles.scss';

function Projects() {
  return (
    <section id="projects">
        <div className="section__text">
        <p className="section__text__p1">Conheça alguns dos meus</p>
        <h1 className="title">Projetos</h1>
      </div>
      <div className="projects-list">
        <div className="project">
          <img src={projectDisney} alt="Project 1" />
          <h2>Disney+</h2>
          <div className="buttons">
            <button>Github</button>
            <button>Demo</button>
          </div>
        </div>
        <div className="project">
          <img src={projectGrill} alt="Project 1" />
          <h2>PortoGrill</h2>
          <div className="buttons">
            <button>Github</button>
            <button>Demo</button>
          </div>
        </div>
        <div className="project">
          <img src={projectTech} alt="Project 1" />
          <h2>Porto Tech</h2>
          <div className="buttons">
            <button>Github</button>
            <button>Demo</button>
          </div>
        </div>
        <div className="project">
          <img src={projectCoringa} alt="Project 1" />
          <h2>Landing Page Estreia</h2>
          <div className="buttons">
            <button>Github</button>
            <button>Demo</button>
          </div>
        </div>
        <div className="project">
          <img src={projectPortoDay} alt="Project 1" />
          <h2>Porto's Day </h2>
          <div className="buttons">
            <button>Github</button>
            <button>Demo</button>
          </div>
        </div>
        <div className="project">
          <img src={projectWeather} alt="Project 1" />
          <h2>Weather App</h2>
          <div className="buttons">
            <button>Github</button>
            <button>Demo</button>
          </div>
        </div>
        <div className="project">
          <img src={projectSorteador} alt="Project 1" />
          <h2>Sorteador Grunt</h2>
          <div className="buttons">
            <button>Github</button>
            <button>Demo</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
