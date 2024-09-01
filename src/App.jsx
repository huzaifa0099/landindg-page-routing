import React from 'react'
import { useState } from 'react'
import Background from './components/Background/Background'
import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Hero from './components/Hero/Hero'

const App = () => {

  let heroData = [
    {text1: "Dive into", text2: "What you love"},
    {text1: "Induldge", text2: "Your passions"},
    {text1: "Give in to", text2: "Your passions"}
]

const [heroCount, setHeroCount] = useState(0)
const [playStatus, setPlayStatus] = useState(false)

 
  return (
    <div>
        <Background heroCount={heroCount} playStatus={playStatus}/>
        <Navbar />
        <Outlet />
        <Hero heroData={heroData[heroCount]} heroCount={heroCount} setHeroCount={setHeroCount} playStatus={playStatus} setPlayStatus={setPlayStatus} />
    </div>
  )
}

export default App