import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Kanban} from './kanban/Kanban'

function App() {
 

  return (
    <div className='' >
    <a href="" title='Home'> <h1 className='text-white font-bold text-6xl text-start mt-5 '>Task Board<span className=' text-indigo-600 font-montserrat text-[90px] '>.</span></h1></a>
     <div className='flex justify-center items-center'>
      <div className='  lg:max-w-5xl md:max-w-3xl sm:max-w-xl xs:max-w-[240px] '><Kanban/></div>
     </div>
    </div>
  )
}

export default App
