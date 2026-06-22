import React, { useEffect, useMemo, useRef, useState } from 'react'
import {useTransform, motion, useScroll, color} from "framer-motion"
import ParticlesBackground from '../components/ParticlesBackground';



const educations = [
  {
    degree:"10th(Matriculation)",
    college: "Sanjay Gandhi High School",
    Duration: "2019",
    LineColor:"#ff0000",
    description:"Completed 10th from Bihar School Examination Board(BSEB) in 2019."
  },
  {
    degree:"12th(Intermediate)",
    college: "PPG College",
    Duration: "2019 - 2021",
    LineColor:"#0000ff",
    description:"Completed 12th from Bihar School Examination Board(BSEB) in 2021."
  },
    {
    degree:"Bachelor of Computer Application(BCA)",
    college: "Sri Sharda Group Of Institutions",
    Duration: "2021 - 2024",
    LineColor:"#ffff00",
    description:"Completed BCA from Lucknow University in 2024 with focus on computer programming and software development."
  },
    {
    degree:"Master of Computer Application (MCA)",
    college: "DPG Degree College",
    Duration: "2025 - Present",
    LineColor:"#00ff00",
    description:"Currently pursuing MCA to enhance knowledge in software development, cloud computing and modern technologies."
  },
];


function EducationItem({edu, idx, start, end, scrollYProgress, layout, activeIndex}){
  const scale = useTransform(scrollYProgress, [start, end], [0,1])
  const opacity = useTransform(scrollYProgress, [start, end], [0,1])
  const y = useTransform(scrollYProgress, [start, end], [idx%2 === 0 ? 30 : -30 , 0])
  const x = useTransform(scrollYProgress, [start, end], [-24, 0])
  const isActive = idx === activeIndex;
const color = isActive ? edu.LineColor : edu.LineColor; // active = color, inactive = faded
  


  if(layout === "desktop"){
    return(
      <div className='relative flex flex-1 justify-center items-center min-w-0'>
        <motion.div className=' z-10 w-7 h-7 rounded-full bg-white shadow-[0_0_0_8px_rgba(255,255,255,0.1)]' style={{scale, opacity,
          backgroundColor:color
        }}></motion.div>
        <motion.div className={`absolute ${idx%2 === 0 ? "-top-8" : "-bottom-8"} w-[3px] bg-white/40`} style={{height:40, opacity,
          backgroundColor:color
        }}></motion.div>
        <motion.article className={` absolute ${idx%2 === 0 ? "bottom-12" : "top-12"} bg-gray-900/80 backdrop-blur border  rounded-xl p-7 w-[320px] shadow-lg`} style={{opacity, y, maxWidth: "90vw", borderColor:color}}
        transition={{duration : 0.4, delay: idx*0.15}}>
          <h3 className='text-xl font-semibold' style={{color:color}}>{edu.degree}</h3>
          <p className='text-md text-gray-400 mb-3'>{edu.college} | {edu.Duration}</p>
          <p className='text-md text-gray-300 break-words'>{edu.description}</p>
        </motion.article>
      </div>
    )
  }
  

  return(
    <div className=' relative flex items-start'>
      <motion.div className=' absolute -left-[34px] top-3 z-10 w-7 h-7 rounded-full bg-white shadow-[0_0_0_8px_rgba(255,255,255,0.1)]' style={{scale, opacity,
        backgroundColor:color
      }}></motion.div>
<motion.div
  className="absolute  h-[3px]"
  style={{
    left:"-26px",
    top: "calc(0.75rem + 14px)", // 👈 circle center
    width: "48px", // 👈 bas box ko touch kare (adjust based on gap)
    opacity,
    backgroundColor: color
  }}
></motion.div>
      <motion.article className=' bg-gray-900/80 backdrop-blur border  rounded-xl p-5 w-[90vw] max-w-sm ml-6 shadow-lg'
      style={{opacity, x, borderColor:color}}
      transition={{duration: 0.4, delay: idx*0.15}}>
        <h3 className=' text-lg font-semibold break-words' style={{color:color}}>{edu.degree}</h3>
        <p className='text-sm text-gray-400 mb-2 break-words'>{edu.college} | {edu.Duration}</p>
        <p className='text-sm text-gray-300 break-words'>{edu.description}</p>
      </motion.article>
    </div>
  )



}

const Education = () => {
  const sceneRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const [activeIndex, setActiveIndex] = useState(0);

    const {scrollYProgress} = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"]
  })

  const thresholds = useMemo(() => educations.map((_, i) => (i+1)/educations.length),[])


useEffect(() => {
  return scrollYProgress.on("change", (v) => {
    const index = thresholds.findIndex((t) => v <= t);
    setActiveIndex(index === -1 ? educations.length - 1 : index);
  });
}, [scrollYProgress, thresholds]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile)
    return() => window.removeEventListener("resize", checkMobile)
  },[])

  const SCENE_HEIGHT_VH = isMobile ? 180*educations.length : 120*educations.length;


  const lineSize = useTransform(scrollYProgress, (v) => `${v*100}%`)


  return (
    <section id='education' className='relative  bg-gradient-to-br from-[#111827] via-[#1e1b4b] to-[#581c87] text-white'>
      {/* Top Glow */}
<div
  className="
  absolute -top-32 -left-32
  w-[70vw] sm:w-[50vw] md:w-[40vw]
  h-[70vw] sm:h-[50vw] md:h-[40vw]
  max-w-[500px] max-h-[500px]
  rounded-full
  bg-gradient-to-r
  from-[#7f1d1d]
  via-[#dc2626]
  to-[#f97316]
  opacity-30 sm:opacity-20 md:opacity-10
  blur-[100px] sm:blur-[130px] md:blur-[150px]
  animate-pulse
  "
></div>

{/* Bottom Glow */}
<div
  className="
  absolute bottom-0 right-0
  w-[70vw] sm:w-[50vw] md:w-[40vw]
  h-[70vw] sm:h-[50vw] md:h-[40vw]
  max-w-[500px] max-h-[500px]
  rounded-full
  bg-gradient-to-r
  from-[#f97316]
  via-[#dc2626]
  to-[#7f1d1d]
  opacity-30 sm:opacity-20 md:opacity-10
  blur-[100px] sm:blur-[130px] md:blur-[150px]
  animate-pulse delay-500
  "
></div>

      <div ref={sceneRef} style={{height: `${SCENE_HEIGHT_VH}vh`, minHeight:"120vh"}} className='relative z-10'>
        <div className='sticky top-0 min-h-screen flex flex-col '>
                <div className="absolute inset-0 h-screen">
  <ParticlesBackground />
</div>
          <h2 className='text-4xl sm:text-5xl font-semibold mt-5 text-center'>Education</h2>
          <div className='flex flex-1 items-center justify-center px-6 pb-10'>
            {!isMobile && (
              <div className=' relative w-full max-w-7xl' >
                <div className=' relative h-[6px]  bg-amber-500 rounded'  >
                  <motion.div className=' absolute left-0 top-0 h-[6px] bg-white  rounded origin-left' style={{width: lineSize,
                  }}></motion.div>
                </div>
                <div className='relative flex justify-between mt-0'>
                  {educations.map((edu, idx) => (
                    <EducationItem
                    key={idx}
                    edu={edu}
                    idx={idx}
                    start={idx === 0 ? 0 : thresholds[idx-1]}
                    end={thresholds[idx]}
                    scrollYProgress={scrollYProgress}
                    layout="desktop"
                    activeIndex={activeIndex}
                    />
                  ))}
                </div>
              </div>
            )}
            {isMobile && (
              <div className=' relative w-full max-w-md'>
                <div className='absolute left-0 top-0 bottom-0 w-[6px] bg-amber-500 rounded'>
                  <motion.div className='absolute top-0 left-0 w-[6px] bg-white rounded origin-top' style={{height: lineSize}}></motion.div>
                </div>
                <div className='relative flex flex-col gap-10 ml-10
                 mt-6 pb-10'>
                  {educations.map((edu, idx) => (
                      <EducationItem
                    key={idx}
                    edu={edu}
                    idx={idx}
                    start={idx === 0 ? 0 : thresholds[idx-1]}
                    end={thresholds[idx]}
                    scrollYProgress={scrollYProgress}
                    layout="mobile"
                    />
                    
                  ))}
                 </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
