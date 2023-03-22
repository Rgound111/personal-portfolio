import React from 'react'
import './skill.css'
import {FaHtml5} from 'react-icons/fa'
import {FaCss3Alt} from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io'
import {SiBootstrap} from 'react-icons/si'
import {SiReact} from 'react-icons/si'
import {BsGithub} from 'react-icons/bs'
import {BiGitBranch} from 'react-icons/bi'
import {FiDatabase} from 'react-icons/fi'


const Skill = () => {
  return (
    <section id='skill'>
      <div className=" container skill__container">
        <div className="skill__head">
          <div className="head__title">Skills⚡</div>
          <p>Take a look at some of the technologies I know</p>
        </div>

        <div className="skills__list">
        <div className="skill__list">
              <div className="skill__icon-R"><SiReact/></div>
              <p>React</p>
          </div>
          <div className="skill__list">
              <div className="skill__icon-S"><FiDatabase/></div>
              <p>SQL</p>
          </div>
          <div className="skill__list">
              <div className="skill__icon-J"><IoLogoJavascript/></div>
              <p>JavaScript</p>
          </div>
          <div className="skill__list">
              <div className="skill__icon-G"><BiGitBranch/></div>
              <p>Git</p>
          </div>
          <div className="skill__list">
              <div className="skill__icon-Gh"><BsGithub/></div>
              <p>Github</p>
          </div>
          <div className="skill__list">
              <div className="skill__icon-B"><SiBootstrap/></div>
              <p>Bootstrap</p>
          </div>
          <div className="skill__list">
              <div className="skill__icon-H"><FaHtml5/></div>
              <p >HTML</p>
          </div>
          <div className="skill__list">
              <div className="skill__icon-C"><FaCss3Alt/></div>
              <p>CSS</p>
          </div>
          
          
          
          
          
          
          
        </div>
      </div>
    </section>
  )
}

export default Skill
