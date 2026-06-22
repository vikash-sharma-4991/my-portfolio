import React from 'react'
import {motion} from "framer-motion"
import m1 from "../assets/men1.jpg";
import m2 from "../assets/men2.jpg";
import w1 from "../assets/women1.avif";
import w2 from "../assets/women2.jpg";
import ParticlesBackground from '../components/ParticlesBackground';

const testimonials = [
   {
    name: "Rahul Sharma",
    role: "Frontend Developer at TechNova",
    review:
      "Vikash is an exceptional developer. His React expertise and attention to detail helped us build a modern and highly responsive web application.",
    image: m1,
  },
  {
    name: "Priya Verma",
    role: "UI/UX Designer at DesignHub",
    review:
      "Working with Vikash was a fantastic experience. He transformed our designs into a beautiful and user-friendly interface with pixel-perfect accuracy.",
    image: w1,
  },
  {
    name: "Amit Kumar",
    role: "Software Engineer at Infosys",
    review:
      "Vikash consistently delivered high-quality code and solved challenges efficiently. His professionalism and dedication are truly impressive.",
    image: m2,
  },
  {
    name: "Sneha Gupta",
    role: "Project Manager at DigitalEdge",
    review:
      "From planning to deployment, Vikash handled everything smoothly. The final product exceeded our expectations in both performance and design.",
    image: w2,
  },
];


const Testimonials = () => {
  return (
    <section id='testimonials' className='relative min-h-screen bg-gradient-to-br from-[#581c87] via-[#1e1b4b] to-[#111827] text-white flex flex-col items-center justify-between px-6 py-20'>
      <ParticlesBackground/>
      <motion.h2 className='text-4xl font-bold mb-16'
      initial={{opacity:0, y:-50}}
      animate={{opacity:1, y:0}}
      transition={{duration:0.6}}
      >
        What People Say
      </motion.h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl w-full'>{testimonials.map((t,i) => (
        <motion.div 
        key={t.name + 1}
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        
        transition={{duration:0.5, delay:i*0.2}}
        viewport={{once:true}}
        className='bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 flex flex-col items-center text-center transform transition duration-500 hover:scale-105 hover:rotate-1'
       
        >
            <ParticlesBackground/>
          <img src={t.image} alt={t.name} className='w-20 h-20 rounded-full border-2 border-white/40 mb-4 object-cover' />
          <p className='text-gray-200 italic mb-4'>{t.review}</p>
          <h3 className='text-lg font-semibold'>{t.name}</h3>
          <p className='text-sm text-gray-400'>{t.role}</p>
        </motion.div>
      ))}</div>
    </section>
  )
}

export default Testimonials
