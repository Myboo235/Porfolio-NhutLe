import './App.css'
import About from './component/About'
import Contact from './component/Contact'
import Hero from './component/Hero'
import Navbar from './component/Navbar'
import Work from './component/Work'


function App() {

  return (
    <section className='w-full bg-gradient-to-b from-blue-200 to-cyan-800'>
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Contact />
    </section>
  )
}

export default App
