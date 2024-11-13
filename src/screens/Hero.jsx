
import ChatBot from '../chatbot/Chatbot'
import Carousal from '../components/Carousal'
import FAQ from '../components/FAQ'

const Hero = () => {
  return (
    <div className='w-full'>
      <Carousal/>
      <FAQ/>
      <ChatBot/>
    </div>
  )
}

export default Hero