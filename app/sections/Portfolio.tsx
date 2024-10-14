"use client"
import React from "react"
import Image from "next/image"
import project1 from "../assets/proj6.png"
import project2 from "../assets/proj7.png"
import project3 from "../assets/proj8.png"
import project4 from "../assets/proj9.png"
import { motion } from "framer-motion"
import { AiOutlineCheck } from "react-icons/ai"

const projects = [
    {
      id: 1,
      title: "DesignCube Framer Website",
      category: "Web Design",
      imageSrc: project1,
      bulletPoint1: "Enhanced user experience by 40%",
      bulletPoint2: "Improved site speed by 50%",
      bulletPoint3: "Increased mobile traffic by 35%",
    },
    {
      id: 2,
      title: "HealthWell Website in Framer",
      category: "Web Design",
      imageSrc: project2,
      bulletPoint1: "Enhanced user experience by 40%",
      bulletPoint2: "Improved site speed by 50%",
      bulletPoint3: "Increased mobile traffic by 35%",
    },
    {
      id: 3,
      title: "Thelist Framer Website",
      category: "Web Design",
      imageSrc: project3,
      bulletPoint1: "Enhanced user experience by 40%",
      bulletPoint2: "Improved site speed by 50%",
      bulletPoint3: "Increased mobile traffic by 35%",
    },
    {
      id: 4,
      title: "Reify Website in Framer",
      category: "Web Design",
      imageSrc: project4,
      bulletPoint1: "Enhanced user experience by 40%",
      bulletPoint2: "Improved site speed by 50%",
      bulletPoint3: "sdasdfdcas",
    },
  ];

export const Portfolio = () => {
  return (
    <section className="py-16 container mx-auto min-h-[300vh]" id="portfolio">
        {projects.map((project, index) => (
            <motion.div
                key={project.id}
                className="border mx-auto border-white/20 flex flex-col md:flex-row text-white rounded-3xl bg-gradient-to-r from-[#0d0d0e] via-[#303131] to-[#212122]
                            p-12 justify-between space-x-4 items-start mb-24 w-[300px] md:w-[1100px] sticky top-28"
                initial={{ opacity: 0, y: 50}}
                whileInView={{ opacity: 1, y: 0}}
                transition={{ duration: 0.5, delay: index * 0.2}}
                viewport={{ once: true }}
            >
                <div className="space-y-6">
                    <p className="text-sky-300 text-lg font-bold">{project.category}</p>
                    <h2 className="text-2xl font-bold md:text-4xl">{project.title}</h2>
                    <ul className="space-y-2">
                        <li className="flex items-center space-x-4">
                            <AiOutlineCheck className="w-5 h-5 text-emerald-400" />
                            <p>{project.bulletPoint1}</p>
                        </li>
                        <li className="flex items-center space-x-4">
                            <AiOutlineCheck className="w-5 h-5 text-emerald-400" />
                            <p>{project.bulletPoint2}</p>
                        </li>
                        <li className="flex items-center space-x-4">
                            <AiOutlineCheck className="w-5 h-5 text-emerald-400" />
                            <p>{project.bulletPoint3}</p>
                        </li>
                    </ul>
                </div>
                
                <Image 
                    src={project.imageSrc}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="rounded-3xl"
                />

            </motion.div>
        ))}


    </section>
  )
}