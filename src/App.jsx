import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Services from './components/services/Services'

import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Tabs from './components/tabs/Tabs'
import Gallery from './components/gallery/Gallery'




const App = () => {
  return (
    <>
       <Header/>
       <Nav/>
       
       <Tabs/>
       <Services/>
       <Gallery/>
       <Testimonials/>
       <Contact/>
       <Footer/>
    </>
    
  )
}

export default App