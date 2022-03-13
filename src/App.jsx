import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'

import Services from './components/services/Services'


import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

import Gallery from './components/gallery/Gallery'
import Works from './components/works/Works'





const App = () => {
  return (
    <>
       <Header/>
       <Nav/>
       
       <Works/>
      
       <Services/>
       <Gallery/>
       <Testimonials/>
       <Contact/>
       <Footer/>
    </>
    
  )
}

export default App