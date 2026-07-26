// import React from 'react'


import About from "./components/About.jsx"
import BookingForm from "./components/booking.jsx"
import Contact from "./components/Con.jsx"
import Loading from "./components/Loading.jsx"
import Navbar from "./components/Navbar.jsx"
import Services from "./components/Services.jsx"
import ImageSlider from "./components/Slider.jsx"

const App = () => {
  return (
    <Loading>

    <>
    <Navbar />
    <div className="main">
      <div id="home">
        <ImageSlider />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="booking">
        <BookingForm />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
    </>
    </Loading>
  )
}

export default App