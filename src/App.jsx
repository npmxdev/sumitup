import React from 'react'
import './App.css'
import Hero from './components/Hero'
import Demo from './components/Demo'
import Footers from './components/Footers'

const App = () => {
  return (
    <main className='selection:bg-orange-400 min-h-screen selection:text-white font-inter'>
      <div className='main'>
        <div className='gradient' />
      </div>

      <div className='relative z-10 flex justify-center items-center flex-col max-w-7xl mx-auto sm:px-16 px-6'>
        <Hero />
        <Demo />
        <Footers />
      </div>
    </main>
  )
}

export default App
