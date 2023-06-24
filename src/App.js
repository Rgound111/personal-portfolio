import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Mywork from './components/mywork/Mywork'
import Skill from './components/skill/Skill'
import Testimonial from './components/testimonial/Testimonial'
import Counterup from './components/Counterup/Counterup'



const App = () => {
  return (
    <div>
      <Header/>
      <Nav/>
      <About/>
      <Mywork/>
      <Skill/>
      <Testimonial/>
      <Counterup/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
