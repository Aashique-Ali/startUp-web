import React from "react"
import { TiSocialFacebook } from "react-icons/ti"
import { FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa6"
import { FaPinterestP } from "react-icons/fa6"
import { FaTiktok } from "react-icons/fa6"
import { FaWhatsapp } from "react-icons/fa6"
import { FaYoutube } from "react-icons/fa6"

const Footer = () => {
  return (
    <div className="bg-primary flex flex-col md:flex-row  justify-between items-center px-10 gap-5 md:px-28 text-white py-10">
      <div className="flex justify-center items-center gap-5 text-white">
        <TiSocialFacebook size={20} />
        <FaInstagram size={20} />
        <FaTwitter size={20} />
        <FaPinterestP size={20} />
        <FaTiktok size={20} />
        <FaWhatsapp size={20} />
        <FaYoutube size={20} />
      </div>
      <div>
        <h1 className="text-xl">© Start, 2022. All rights reserved.</h1>
      </div>
    </div>
  )
}

export default Footer
