import React from 'react'
import {motion} from "framer-motion"

import {FaGithub, FaLinkedin, FaInstagram} from "react-icons/fa6";






const socials = [
  {Icons:FaGithub, label:"GitHub", href:"https://github.com/vikash-sharma-4991"},
  {Icons:FaLinkedin, label:"LinkedIn", href:"https://www.linkedin.com/in/vikash-sharma-19006b254/"},
  {Icons:FaInstagram, label:"Instagram", href:"https://https://www.instagram.com/vikash__null"}
]



const glowVariants ={
  initial:{scale:1, y:0, filter: "drop-shadow(0 0 0 rgba(0, 0, 0, 0))"},
  hover:{scale: 1.2, y:-3, filter: "drop-shadow(0 0 8px rgba(13, 88, 204, 0.9)) drop-shadow(0 0 18px rgba(16, 185, 129, 0.8))",
    transition:{type:"spring", stiffness:300, damping:15}
  },
  tap:{scale:0.95, y:0, transition:{duration:0.08}}
}


const Footer = () => {
  return (
    <footer className='relative overflow-hidden bg-black'>

<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_60%_at_70%_35%,rgba(124,58,237,0.50),transparent_70%)]" />

        <div className='
        absolute -top-32 -left-32
        w-[70vw] sm:w-[50vw] md:w-[40vw]
        h-[70vw] sm:h-[50vw] md:h-[40vw]
        max-w-[500px] max-h-[500px] rounded-full
        bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse'></div>
        <div className='
        absolute bottom-0 right-0
        w-[70vw] sm:w-[50vw] md:w-[40vw]
        h-[70vw] sm:h-[50vw] md:h-[40vw]
        max-w-[500px] max-h-[500px] rounded-full
        bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
        opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse delay-500'></div>

<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_55%_at_30%_70%,rgba(236,72,153,0.35),transparent_70%)]" />

      <motion.div className='relative z-10 px-4 sm:px-8 lg:px-10 py-16 md:py-20 flex flex-col items-center text-center space-y-6'
      initial={{opacity:0,y:30}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.8}}>
        <h1 className='font-semibold leading-none text-white text-center select-none' 
        style={{
          fontSize:"clamp(3rem,5vw,14rem)",
          letterSpacing:"0.02em",
          lineHeight:0.9,
          padding:"0 3vw",
          whiteSpace:'nowrap',
          textShadow:'0 2px 18px rgba(0,0,0,0.45)'
        }}>Vikash Sharma</h1>
        
        <div className='h-[3px] w-24 md:w-32 rounded-full bg-gradient-to-r from-[#d50d0d] via-cyan-300 to-emerald-400'/>
          <div className='flex gap-5 text-2xl md:text-3xl'>
            {socials.map(({Icons, label, href})=> (
              <motion.a href={href} 
              key={label}
              aria-label={label}
              target='_blank'
              rel='nonopener noreferrer'
              variants={glowVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className='text-gray-300 transition-colors duration-200 inline-flex items-center justify-center'>
                <Icons/>
              </motion.a>
            ))}
          </div>

          <p className='text-gray-300 italic max-w-xl'>"Success is not luck; it's preparation, persistence, and patience combined."</p>
          <p className='text-xs text-gray-400'>&copy; {new Date().getFullYear()} Vikash Sharma. All right reserved.</p>
        
      </motion.div>
    </footer>
  )
}

export default Footer
