import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IntroAnimation = ({onFinish}) => {
  

  const greetings = useMemo(() => [
    "Hello", "नमस्ते", "Hola", "Bonjour", "Hallo", "Ciao", "Olá", "こんにちは", "你好", "안녕하세요", "مرحبا", "Привет", "নমস্কার", "ਸਤ ਸ੍ਰੀ ਅਕਾਲ", "नमस्कार", "નમસ્તે", "வணக்கம்", "నమస్తే", "ನಮಸ್ಕಾರ", "നമസ്കാരം"
  ], [])

  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if(index < greetings.length - 1){
      const id = setInterval(() => setIndex ((i) => i+1), 180);
      return () => clearInterval(id)
    }else{
      const t = setTimeout (() => setVisible(false), 300);
    return () => clearTimeout(t)    
  }
  }, [index, greetings.length])

  return (
    <AnimatePresence onExitComplete = {onFinish}>
      {visible && (
        <motion.div
        className = "fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white overflow-hidden"
        initial = {{y:0}}
        exit = {{y:"-100%",
          transition:{
            duration: 1.05,
            ease: [0.22, 1, 0.36, 1],
          }
        }} >


          <motion.h1 
          key={index}
          className = "text-5xl md:text-7xl lg:text-8xl font-bold"
          initial = {{opacity: 0, y:20}}
          animate = {{opacity:1, y:0}}
          exit = {{opacity:0, y:-20}}
          transition = {{duration : 0.12}} >
            {greetings[index]}
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default IntroAnimation
