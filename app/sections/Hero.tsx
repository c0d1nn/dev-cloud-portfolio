"use client"
import Image from "next/image"
import profilepic from "../assets/profilepic.png"
import { TypeAnimation } from "react-type-animation"
import React, { useRef } from "react"
import { Clouds } from "../components/Clouds"

export const Hero = () => {
    const parallaxRef = useRef(null)

    return (
        <div className="overflow-x-clip relative min-h-screen pt-12 flex items-center justify-center bg-[linear-gradient(180deg,#557BAD,#8BAAC4,#5D97C9,#0F62AB,#0a0a0a)]">
            <div className="container mx-auto  space-y-6 flex items-center justify-center flex-col text-center" ref={parallaxRef}>
                <Image 
                    src={profilepic}
                    alt="profile pic"
                    className="mx-auto"
                    width={250}
                />
                <h1 className="text-blue-200 font-extrabold text-7xl">Lets create</h1>
                <TypeAnimation 
                    sequence={[
                        "experience", 1000,
                        "websites", 1000,
                        "designs", 1000,
                    ]}
                    className="text-7xl text-white inline-block font-extrabold"
                    wrapper="h1"
                    cursor={true}
                    repeat={Infinity}
                />
                <p className="text-blue-200 text-2xl font-semibold max-w-[500px]">My name is John Doe. I am a Fullstack Developer with 5+ years experience.</p>
                <Clouds parallaxRef={parallaxRef}/>
            </div>
        </div>
            
    )
}