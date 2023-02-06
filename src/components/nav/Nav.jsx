import React from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {AiOutlineUser} from 'react-icons/ai'
import {MdWork} from 'react-icons/md'
import {GiSkills} from 'react-icons/gi'
import {IoMdContact} from 'react-icons/io'
import { useState } from 'react'

const Nav = () => {
  const [activeNav ,setActiveNav] = useState("#")

  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav("#")} className={ activeNav === '#' ? "active" : "" }><FaHome/></a>
      <a href="#about" onClick={()=> setActiveNav("#about")} className={ activeNav === '#about' ? "active" : "" }><AiOutlineUser/></a>
      <a href="#mywork" onClick={()=> setActiveNav("#mywork")} className={ activeNav === '#mywork' ? "active" : "" }><MdWork/></a>
      <a href="#skill" onClick={()=> setActiveNav("#skill")} className={ activeNav === '#skill' ? "active" : "" }><GiSkills/></a>
      <a href="#contact" onClick={()=> setActiveNav("#contact")} className={ activeNav === '#contact' ? "active" : "" }><IoMdContact/></a>
    </nav>
  )
}

export default Nav
