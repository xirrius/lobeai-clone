import { useState } from "react";
import { videoCover, close } from "../assets"
import "../styles.css"

const Hero = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <div className="flex flex-col items-center mb-10 md:mt-14 mt-10 gap-4">
      <h1 className="font-extrabold md:text-6xl ss:text-5xl text-4xl text-primary">
        Lobe <span className="text-highlight">Tour</span>
      </h1>
      <p className="text-primary text-center md:text-2xl ss:text-xl text-md">
        Build your first machine learning model in ten <br /> minutes. No code
        or experience required.
      </p>

      {/* THUMBNAIL */}

      <div className="my-12 lg:w-[65%] md:w-[80%] w-[80%]">
        <img
          src={videoCover}
          alt="demo-video"
          className="rounded-3xl hover:scale-105 transition-all duration-500 hover:drop-shadow-2xl object-cover cursor-pointer"
          onClick={() => setToggle(true)}
        />
      </div>

      {/* IFRAME */}
      {toggle && (
        <div className="overlay backdrop-blur-custom-more flex items-center justify-center">
          <img
            src={close}
            alt="close-icon"
            className="fixed right-5 top-4 w-5 h-5 hover:scale-125 transition-all duration-200 cursor-pointer"
            onClick={() => setToggle(false)}
          />
          <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1" className="ss:w-[75vw] w-[100%] h-[50vw] ss:rounded-3xl"></iframe>
        </div>
      )}
    </div>
  );
}
export default Hero