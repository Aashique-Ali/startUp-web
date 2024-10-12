import React, { useState } from "react"
import logo from "../images/startupLogo.png"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import { NavLink } from "react-router-dom"

const Header = () => {
  const [nav, setNav] = useState(false)
  return (
    <div className="bg-primary flex justify-between items-center md:px-28 px-10 md:pt-10 pt-6 pb-5 ">
      <div>
        <img src={logo} alt="" className="w-[150px]" />
      </div>
      <div>
        <ul className="hidden md:flex justify-center items-center text-white gap-10 text-[18px] ">
          <NavLink>
            <li>Home</li>
          </NavLink>
          <NavLink>
            <li>Portfolio</li>
          </NavLink>
          <NavLink>
            <li>Services</li>
          </NavLink>
          <NavLink>
            <li>Contact</li>
          </NavLink>
        </ul>
      </div>
      <div
        onClick={() => setNav(!nav)}
        className="block md:hidden cursor-pointer text-white"
      >
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
      <ul
        className={
          nav
            ? "fixed md:hidden right-0 top-[15%] w-[60%] h-full bg-primary ease-in-out duration-500"
            : "w-[60%] fixed top-[10%] bottom-0 right-[-100%] ease-in-out duration-500"
        }
      >
        <li className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 text-white">
          <NavLink>Home</NavLink>
        </li>
        <li className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 text-white">
          <NavLink>Portfolio</NavLink>
        </li>
        <li className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 text-white">
          <NavLink>Services</NavLink>
        </li>

        <li className="p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 text-white">
          <NavLink>Contact</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Header
