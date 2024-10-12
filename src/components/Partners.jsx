import React from "react"
import google from "../images/google.png"
import microsoft from "../images/microsoft.png"
import airbnb from "../images/airbnb.png"
import facebook from "../images/facebook.png"
import spotify from "../images/spotify.png"

const Partners = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center pt-10 gap-8">
      <div className="flex justify-center items-center flex-col gap-5">
        <h2 className="text-xl text-primary font-semibold tracking-widest uppercase">
          partners
        </h2>
        <h1 className="text-4xl font-semibold">Lorem ipsum dolor</h1>
        <p className="text-xl w-[400px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className=" flex-col md:flex-row flex justify-center items-center gap-10">
        <img src={google} alt="google logo" className="w-[170px]" />
        <img src={microsoft} alt="microsoft logo" className="w-[170px]" />
        <img src={airbnb} alt="airbnb logo" className="w-[170px]" />
        <img src={facebook} alt="facebook logo" className="w-[170px]" />
        <img src={spotify} alt="spotify logo" className="w-[170px]" />
      </div>
      <dir>
        <button className="py-2 px-7 rounded text-xl bg-gray-800 text-white text-center">
          Learn More
        </button>
      </dir>
    </div>
  )
}

export default Partners
