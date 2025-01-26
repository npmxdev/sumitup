import React from 'react'

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full p-4'>
            <a href='https://letssumitup.vercel.app/' className='flex'>
                <img src="/favicon.ico" alt="App Logo" className='h-8 object-contain'/>
                <h3 className='ml-2 text-2xl bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent font-extrabold'>Sum It Up!</h3>
            </a>
            <button type='button' onClick={() => window.open('https://github.com/npmxdev')} className='rounded-full border border-black bg-black py-1.5 px-5 text-sm text-white transition-all hover:bg-white hover:text-black'>Github</button>
        </nav>
        <h1 className='mt-16 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl text-center'>Summarize Articles with <br className='max-md:hidden'/>
        <span className='bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent'>OpenAI GPT4</span>
        </h1>
        <h2 className='mt-5 text-lg text-gray-600 sm:text-xl text-center max-w-2xl'>Tired of reading through endless articles? <span className='font-bold text-orange-500'>LetsSumItUp</span> makes life easier by turning long content into simple, clear summaries. Save time, understand more, and focus on what matters most—all with just a click.</h2>
    </header>
  )
}

export default Hero
