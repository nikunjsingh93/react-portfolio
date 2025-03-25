import { TypeAnimation } from "react-type-animation";
import profilepic from "../assets/nik.png";

function Home() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] h-[70vh] mx-auto py-8 bg-black">
      <div className="my-auto mx-auto w-[300px] h-auto lg:w-[400px]">
        <img src={profilepic} alt="profile Picture" />
      </div>

      <div className="col-span-2 px-5 my-auto">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold">
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
        </h1>
      </div>
    </div>
  );
}
export default Home;
