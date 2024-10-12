import React from "react"

const Pargraphcomp = ({
  heading,
  about,
  desc,
  btn,
  bgColor = "bg-white",
  textColor = "text-black",
  pColor = "text-gray-300",
}) => {
  return (
    <div className="flex flex-col justify-start items-start gap-4  pl-20  md:pl-0">
      <h2 className="font-bold pt-5 tracking-[0.5em] uppercase ">{heading}</h2>
      <h1 className="text-4xl font-semibold w-[450px]">{about}</h1>
      <p className={` md:text-sm ${pColor} md:w-[340px] w-[370px]`}>{desc}</p>
      <button className={`${bgColor} ${textColor} py-2 px-10 text-xl rounded`}>
        {btn}
      </button>
    </div>
  )
}

export default Pargraphcomp
