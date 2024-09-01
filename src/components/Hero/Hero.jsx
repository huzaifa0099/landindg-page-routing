import React from 'react'
import arrow_btn from "../../assets/arrow_btn.png"
import play_icon from "../../assets/play_icon.png"
import pause_icon from "../../assets/pause_icon.png"

const Hero = ({heroData, heroCount, setHeroCount, playStatus, setPlayStatus}) => {
  return (
    <div className='containetr ml-24 mt-20'>
      <div className="hero-text text-white  font-light  text-6xl mt-24 ml-10">
        <p>{heroData.text1}</p>
        <br />
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-explore flex items-center pl-4 text-xs cursor-pointer gap-8 w-fit mt-28 pr-1 py-[2px] bg-white rounded-full size-  ">
        <p>Explore the features</p>
        <img className='h-10' src={arrow_btn} alt="" />
      </div>
      <div className="hero-dot-play flex justify-between mb-10">
        <ul className='flex gap-5 text-white text-lg mt-12 items-center '>
          <li onClick={() => setHeroCount(0)} className={` size-3 cursor-pointer bg-white rounded-full ${heroCount === 0 ? "bg-orange-700" : ""}`} ></li>
          <li onClick={() => setHeroCount(1)} className={` size-3 cursor-pointer bg-white rounded-full ${heroCount === 1 ? "bg-orange-700" : ""}`}></li>
          <li onClick={() => setHeroCount(2)} className={` size-3 cursor-pointer bg-white rounded-full ${heroCount === 2 ? "bg-orange-700" : ""}`}></li>
        </ul>
      <div className="hero-play flex items-center mr-14 gap-4">
        <img onClick={()=> setPlayStatus(!playStatus)} src={playStatus? pause_icon: play_icon} alt="" className='w-14' />
        <p className='text-white mr-3'>See the video</p>
      </div>
      </div>
    </div>
  )
}

export default Hero