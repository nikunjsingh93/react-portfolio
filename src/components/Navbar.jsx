import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const handleNavbar = () => {
    setNavbar(!navbar);
  };

  return (
    <div className="bg-black text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center">
      <h1 className="text-3xl font-bold ml-4 primary-color">Nikunj Singh</h1>
      <ul className="hidden md:flex">
        <li className="p-5">
          <a href="#about">About</a>
        </li>
        <li className="p-5">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div onClick={handleNavbar} className="block md:hidden mr-6">
        {navbar ? (
          <X size={25} color="#ffffff" />
        ) : (
          <Menu size={25} color="#ffffff" />
        )}
      </div>

      <div
        className={
          navbar
            ? "fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-300"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="text-3xl primary-color m-4">Nikunj Singh</h1>
        <ul className="text-2xl p-8">
          <li className="p-3">
            <a href="#about">About</a>
          </li>
          <li className="p-3">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
