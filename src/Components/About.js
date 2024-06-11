import React from 'react'
import profilePic from '../Images/profilepic2.png'
import {TypeAnimation } from "react-type-animation"
import resume from "../Resume/Resume.pdf"

export default function About() {
  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] mx-auto py-8 bg-black">

      <div className=" col-span-1 my-auto mx-auto">
        <div className="h-auto w-[300px] lg:w-[400px]">
        <img 
              style={{ borderRadius: "50%" ,  animation: "float 3s ease-in-out infinite" }} 
              src={profilePic} 
              alt="profile" 
              
            />
        </div>
      </div>

      <div className="col-span-2 px-5 my-auto">

        <h1 className="text-white text-4xl sm:text-4xl lg:text-6xl font-extrabold">
          <span className="primary-color py-4">
            I am a 
            </span>
              <br />
              <TypeAnimation 
              sequence={["Programmer" ,1000 ,"Web Developer",1000 , "MERN Stack Developer" ,1000 ,"Aspiring SDE" ,1000 , "ML Enthusiast" , 1000, "CSE(AIML)'26 Student" , 1000]} wrapper="span" speed={50} repeat={Infinity}/>
        </h1>

        <p className="text-white sm:text-lg my-6 lg:text-xl">
         Hey! I am Pretisha Sahoo.
         I am a dedicated Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning. With a strong foundation in full-stack development and hands-on experience with the MERN stack, Firebase,  I thrive on learning and tackling new challenges and contribute to innovative Projects and opportunities. I’m always curious about learning new skills, tools, languages and programming languages.
        </p>

        <div className="my-8">
          <a href={resume} target="blank" className="px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white"> Download Resume </a>
        </div>

      </div>
    </div>
    </>
  )
}
