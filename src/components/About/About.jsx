import React from "react";
import ReactTypingEffect from "react-typing-effect";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/myself.png";

export const About = () => {
  return (
    <section
      id="about"
      className="py-4 pb-22 px-[7vw] md:px[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greating */}
          <div className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
            Hey, I am
          </div>
          {/* Name */}
          <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Harry Jindal
          </div>
          {/* typing effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-gray-400 leading-tight">
            <span className="text-white">
              I am a<br />
            </span>
            <Typewriter
              words={[
                "Full Stack Developer",
                "React.js Enthusiast",
                "Node.js Backend Developer",
                "MongoDB & Express Expert",
                "Tailwind CSS Designer",
                "JavaScript Programmer",
                "C & C++ Coder",
                "Problem Solver",
                "Git & GitHub User",
                "Open Source Contributor",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
            {/* <ReactTypingEffect>
                text=
                {[
                  "Full Stack Developer",
                  "React.js Enthusiast",
                  "Node.js Backend Developer",
                  "MongoDB & Express Expert",
                  "Tailwind CSS Designer",
                  "JavaScript Programmer",
                  "C & C++ Coder",
                  "Problem Solver",
                  "Git & GitHub User",
                  "Open Source Contributor",
                ]}
                speed ={100}
                eraseSpeed={50}
                typingDelay={500}
                cursorRenderer=
                {(cursor) => <span className="text-[#8245ec]">{cursor}</span>}
              </ReactTypingEffect> */}
          </h3>

          {/* About me para */}
          <p className="text-base sm:text-lg md:text:lg text-[#91a7ff] mb-10">
            I am a full-stack developer focused on building practical projects
            and strengthening my programming skills through hands-on
            development. Proficient in both front-end and back-end technologies,
            I specialize in the MERN stack, Java, and C programming. I've worked
            on personal and academic projects involving object-oriented design
            in Java, C and RESTful API development with Node.js and Express. I
            enjoy building responsive UIs with React and creating clean,
            maintainable, and scalable solutions. I'm passionate about
            continuous learning and exploring new technologies to grow as a
            developer.
          </p>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1e5Dm6aK9UVPvlLkxgHfi6s7cAvngdNqc/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #000814, #0f172a)",
              boxShadow: "0 0 6px #1e293b, 0 0 12px #1e293b, 0 0 24px #1e293b",
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-[#070f22] rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Harry Jindal"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(109,40,217,0.45)]
"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};
export default About;
