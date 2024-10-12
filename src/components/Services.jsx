import React from "react"
import service from "../images/service.png"
import Pargraphcomp from "./Pargraphcomp"

const Services = () => {
  return (
    <div className="flex justify-center items-center gap-5 md:gap-16 pt-10 flex-col md:flex-row ">
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
      <div className="order-first md:order-last">
        <img src={service} alt="" className="w-[380px] md:w-[550px] " />
      </div>
    </div>
  )
}

export default Services
