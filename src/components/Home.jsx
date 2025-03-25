import { TypeAnimation } from "react-type-animation";
import profilepic from "../assets/nik.png";

function Home() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black">
      <div className="my-auto mx-auto w-[300px] h-auto lg:w-[400px]">
        <img src={profilepic} alt="profile Picture" />
      </div>

      <div className="col-span-2 px-5 my-auto">
        <div className="text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold">
          <span className="primary-color"> I am a</span> <br></br>
          <TypeAnimation
            sequence={[
              "Frontend Dev",
              1000,
              "WebDesigner",
              1000,
              "Engineer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>

        <p className="text-white sm:text-lg my-6 lg:text-xl">
          I have 5+ years of experience in Web development
        </p>

        <div className="my-8">
          <a
            href="/"
            className="px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white"
          >
            {" "}
            Download CV
          </a>
          <a
            href="#contact"
            className="px-6 py-3 w-full rounded-xl mr-4 border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none"
          >
            {" "}
            Contact{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
export default Home;
