import FAQ from "../components/FAQ";
import ChatBot from "../chatbot/Chatbot";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Links from "../components/Links";
import money1 from "../assets/images/money1.webp";
import money2 from "../assets/images/money2.png";
import Carousal from "../components/Carousal"

const Hero = () => {
  const [chatBotActive, setChatBotActive] = useState(false);
  const underlineRef = useRef(null);
  const chatBotLogoRef = useRef(null);

  const handleChatBot = () => {
    setChatBotActive(!chatBotActive);
  };

  useEffect(() => {
    // Animate underline on mount
    gsap.fromTo(
      underlineRef.current,
      { width: 0, marginLeft: 10 }, // start with width 0
      { width: "93%", duration: 1, ease: "power2.out" } // animate to full width
    );

    // Animate the chatbot logo up and down
    const chatBotAnimation = gsap.to(chatBotLogoRef.current, {
      y: "-10px", // Moves the logo up by 10px
      duration: 0.5,
      repeat: -1, // Infinite loop
      yoyo: true, // Makes the animation reverse back
      ease: "power2.inOut", // Smooth easing
      delay: 1, // Initial delay before starting animation
    });

    // Cleanup animation when the component is unmounted
    return () => {
      chatBotAnimation.kill();
    };
  }, []);

  return (
    <div className="w-full h-full">
      {/* adding the gradients */}

      <div className="w-full min-h-screen flex flex-col items-center justify-center">
        <p className="text-[45px] md:text-[80px] font-extrabold text-center md:leading-[80px] relative">
          Effortless{" "}
          <span className="relative">
            <img
              src={money1}
              className="max-md:w-[50px] max-md:h-[50px] max-md:hidden w-[80px] h-[80px] absolute top-[-55px] left-[30px] z-10" // Adjust this based on how you want the money logo to overlay
              alt="money icon"
            />
            Tax
            <span
              ref={underlineRef}
              className="max-md:hidden absolute bottom-3 left-0 h-[4px] bg-primary_green"
            ></span>
          </span>{" "}
          Management <br /> for Everyone
        </p>
        <p className="text-[20px] md:text-[30px] mt-[20px] text-center">
          File, Track, and Optimize Your Taxes with Confidence
        </p>
      </div>

      <Carousal/>


      <Links />
      <FAQ />

      {chatBotActive && (
        <div className="fixed bottom-[100px] right-2 bg-white w-fit p-2 rounded-md chatbot_div">
          <ChatBot />
        </div>
      )}

      <div
        className="flex h-[100px] w-[100px] fixed bottom-2 right-3 cursor-pointer"
        onClick={handleChatBot}
        ref={chatBotLogoRef} // Reference to the chatbot logo for animation
      >
        <img src="/src/assets/images/chatbot_icon.webp" />
      </div>
    </div>
  );
};

export default Hero;
