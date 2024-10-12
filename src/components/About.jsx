import React from "react"
import Pargraphcomp from "./Pargraphcomp"
import about from "../images/about.png"

const About = () => {
  return (
    <div className="flex justify-center items-center gap-5 md:gap-16 pt-10 flex-col md:flex-row ">
      <div>
        <img src={about} alt="" className="w-[380px] md:w-[550px] " />
      </div>
      <Pargraphcomp
        about={"Lorem ipsum dolor sit amet consectetur"}
        desc={
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpanesciunt delectus iste?"
        }
        btn={"Learn More"}
        bgColor="bg-gray-800"
        textColor="text-white"
        pColor="text-gray-400"
      />
    </div>
  )
}

export default About
