import React from 'react'
import CV from '../../assets/CV.pdf'
import {FaFilePdf} from 'react-icons/fa'


const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'>Download CV <span><FaFilePdf/></span></a>
      <a href="#contact" className='btn btn-primary'> Let's Talk</a>
    </div>
  )
}

export default CTA
