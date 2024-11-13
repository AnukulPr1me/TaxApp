import Carousal from '../components/Carousal'
import FAQ from '../components/FAQ'
import ChatBot from "../chatbot/Chatbot"
import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Footer from '../components/Footer'
import Links from '../components/Links'

const Hero = () => {
  const [chatBotActive, setChatBotActive] = useState(false);
  const underlineRef = useRef(null);

  const handleChatBot = () => {
    setChatBotActive(!chatBotActive);
  }

  useEffect(() => {
    // Animate underline on mount
    gsap.fromTo(underlineRef.current, 
      { width: 0, marginLeft:10, }, // start with width 0
      { width: '93%', duration: 1, ease: "power2.out" } // animate to full width
    );
  }, []);

  return (
    <div className='w-full h-full'>
      {/* adding the gradients  */}
    


      <div className='w-full min-h-screen flex flex-col items-center justify-center'>
        <p className='text-[45px] md:text-[80px] font-extrabold text-center md:leading-[80px]'>
          Effortless <span className="relative">Tax 
            <span 
              ref={underlineRef} 
              className="max-md:hidden absolute bottom-3 left-0 h-[4px] bg-primary_green"
            ></span>
          </span> Management <br /> for Everyone
        </p>
        <p className='text-[20px] md:text-[30px] mt-[20px] text-center'>File, Track, and Optimize Your Taxes with Confidence</p>
      </div>
      <Links/>
      <FAQ />

      {chatBotActive && (
        <div className='fixed bottom-[100px] right-2 bg-white w-fit p-2 rounded-md chatbot_div'>
          <ChatBot />
        </div>
      )}

      <div className='flex h-[100px] w-[100px] fixed bottom-2 right-3' onClick={handleChatBot}>
        <img src='/src/assets/images/chatbot_icon.webp' />
      </div>

      

      
    </div>
  )
}

export default Hero
