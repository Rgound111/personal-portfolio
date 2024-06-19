import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Headersocial = () => {
  return (
    <div className="header__social">
      <a href="http://linkedin.com" rel="noreferrer" target="_blank"><BsLinkedin/></a>
      <a href="http://github.com" rel="noreferrer" target="_blank"><FaGithub/></a>
    </div>
  )
}

export default Headersocial
