import React from "react"
import hero from "../images/hero.png"
import Pargraphcomp from "./Pargraphcomp"

const Hero = () => {
  return (
    <div className="flex md:flex-row flex-col  justify-center items-center bg-primary text-white md:px-28 pt-5 pb-14 px-10">
      <Pargraphcomp
        heading={"WELCOME "}
        about={"Lorem ipsum, dolor sit amet consectetur"}
        desc={
          " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptateculpa nesciunt delectus iste?"
        }
        btn={"Explore"}
        color={"black"}
      />
      <div className=" order-first md:order-last">
        <img src={hero} alt="" />
      </div>
    </div>
  )
}

export default Hero
