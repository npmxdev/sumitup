import React, {useState, useEffect} from 'react'
import './App.css'
import Hero from './components/Hero'
import Demo from './components/Demo'
import Footers from './components/Footers'

const LoadingScreen = () => {
  return (
    <div className='selection:bg-red-600 selection:text-white'>
        <div className='fixed w-full h-screen overflow-hidden opacity-30 bg-gradient-to-l from-blue-800 via-yellow-700 to-blue-600 z-20'></div>
        <div className="fixed inset-0 bg-gradient-to-l from-gray-100 via-slate-100 to-white flex items-center justify-center overflow-hidden z-50">
          <h1 className="fixed mb-20 text-3xl text-center md:text-6xl font-extrabold text-orange-500 drop-shadow-2xl tracking-wider px-8 py-4 rounded-lg animate-logoFade">
            LetsSumItUp
          </h1>
          <div className="fixed bottom-56 h-12 w-12 border-t-4 border-orange-600 border-solid rounded-full animate-spin"></div>

          <div className="absolute bottom-6 w-full text-center px-4">
            <p className="text-blue-500 text-sm font-medium opacity-80">
              built with passion by
            </p>
            <h1 className="font-bold text-md sm:text-4xl md:text-2xl tracking-wider text-orange-500 transform transition-all duration-500 ease-in-out hover:scale-110 z-20 animate-floating">
              &lt;npmdev/&gt;
            </h1>
          </div>
        </div>
      </div>
  );
};


const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen/>
  }

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
