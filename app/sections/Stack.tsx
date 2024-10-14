"use client"
import React, { useEffect } from "react"
import { SiFramer, SiFigma, SiReact, SiNodedotjs, SiMongodb, SiDocker } from "react-icons/si"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const stackItems = [
    { id: 1, name: 'Framer', icon: <SiFramer size={100} />, color: 'text-sky-300' },
    { id: 2, name: 'Figma', icon: <SiFigma size={100} />, color: 'text-sky-300' },
    { id: 3, name: 'React', icon: <SiReact size={100} />, color: 'text-sky-300' },
    { id: 4, name: 'Node.js', icon: <SiNodedotjs size={100} />, color: 'text-sky-300' },
    { id: 5, name: 'MongoDB', icon: <SiMongodb size={100} />, color: 'text-sky-300' },
    { id: 6, name: 'Docker', icon: <SiDocker size={100} />, color: 'text-sky-300' },
]

const itemVariants = {
    hidden: (index: number) => ({
        opacity: 0,
        x: index % 2 === 0 ? -100 : 100
    }),
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 3,
        }
    }
}

export const Stack = () => {
    const controls = useAnimation()
    const [ref, inView] = useInView({
        threshold: 0.1
    })

    useEffect(() => {
        if (inView) {
            controls.start('visible')
        } else {
            controls.start('hidden')
        }
    }, [controls, inView])

  return (
    <section className="" id="stack">
        <div className="max-w-[250px] mx-auto text-center">
            <h2 className="text-7xl text-gray-200 font-bold mb-10">My Stack</h2>
            <div className="grid gap-8" ref={ref}>
                {stackItems.map((item, index) => (
                    <motion.div
                        key={item.id}
                        custom={index}
                        initial="hidden"
                        animate={controls}
                        variants={itemVariants}
                        className="bg-white/10 flex justify-center items-center flex-row rounded-xl shadow-lg p-4 hover:shadow-2xl"
                    >
                        <div className={`mb-4 ${item.color}`}>
                            {item.icon}
                        </div>
                        <p className="text-white/20 text-3xl transform rotate-[-90deg]">{item.name}</p>

                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  )
}