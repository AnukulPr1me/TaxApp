import Carousal from '../components/Carousal'
import FAQ from '../components/FAQ'
import ChatBot from "../chatbot/Chatbot"
import { useState } from 'react'

const Hero = () => {
  const [chatBotActive, setChatBotActive] = useState(false);
  const handleChatBot = () => {
    setChatBotActive(!chatBotActive);
  }
  
  return (
    <div className='w-full'>
      <Carousal />
      <FAQ />

      {chatBotActive && (
        <div className='fixed bottom-[100px] right-2 bg-white w-fit p-2 rounded-md'>
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
