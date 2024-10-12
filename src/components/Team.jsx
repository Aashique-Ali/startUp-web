import React from "react"
import Team4 from "../images/team4.png"
import Team3 from "../images/team3.png"
import Team2 from "../images/team2.png"
import Team1 from "../images/team1.png"

const Team = () => {
  return (
    <div className="flex justify-center items-center flex-col text-center gap-10 pt-10 pb-10">
      <div className="flex flex-col justify-center items-center gap-5">
        <h2 className="text-primary text-xl tracking-widest uppercase font-semibold">
          Team
        </h2>
        <h1 className="text-3xl font-semibold">Our Talents</h1>
        <p className="w-[400px] text-xl">
          Lorem ipsum, dolor sit amet consectetur Suscipit nemo hic quos, ab,
        </p>
      </div>
      <div className="flex justify-center items-center flex-col md:flex-row">
        <img src={Team4} alt="" className="w-[280px]" />
        <img src={Team1} alt="" className="w-[250px]" />
        <img src={Team2} alt="" className="w-[250px]" />
        <img src={Team3} alt="" className="w-[250px]" />
      </div>
      <div>
        <button className="py-2 px-10 rounded text-white text-xl bg-gray-800">
          View Team
        </button>
      </div>
    </div>
  )
}

export default Team
