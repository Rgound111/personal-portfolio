import React from 'react'
import './skill.css'
import {FaHtml5} from 'react-icons/fa'
import {FaCss3Alt} from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io'
import {SiBootstrap} from 'react-icons/si'
import {SiReact} from 'react-icons/si'
import {SiRedux} from 'react-icons/si'
import {BsGithub} from 'react-icons/bs'
import {BiGitBranch} from 'react-icons/bi'
import {TbApi} from 'react-icons/tb'
import {VscJson} from 'react-icons/vsc'
import {SiTailwindcss} from 'react-icons/si'


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
              <div className="skill__icon-R"><SiRedux/></div>
              <p>React-Redux</p>
          </div>
          <div className="skill__list">
              <div className="skill__icon-Ra"><TbApi/></div>
              <p>Rest Api</p>
          </div>
          <div className="skill__list">
              <div className="skill__icon-Js"><VscJson/></div>
              <p>Json-server</p>
          </div>
          <div className="skill__list">
              <div className="skill__icon-J"><IoLogoJavascript/></div>
              <p>JavaScript</p>
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
          <div className="skill__list">
              <div className="skill__icon-C"><SiTailwindcss/></div>
              <p>Tailwind CSS</p>
          </div>
          <div className="skill__list">
              <div className="skill__icon-G"><BiGitBranch/></div>
              <p>Git</p>
          </div>
          <div className="skill__list">
              <div className="skill__icon-Gh"><BsGithub/></div>
              <p>Github</p>
          </div>
          
          
          
          
          
          
          
          
        </div>
      </div>
    </section>
  )
}

export default Skill
