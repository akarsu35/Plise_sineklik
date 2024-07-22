import { FaPhone } from 'react-icons/fa6'
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaEnvelope,
} from 'react-icons/fa'
export default function Social() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center w-[90%]">
      <div className="relative w-56 h-12 rounded-full">
        <div className="absolute w-56 h-12 rounded-full bg-[#F7BC3B] opacity-90 blur-[0.1rem]"></div>
        <a href="tel:+905519614009" target="_blank" className="mt-3">
          <span className="relative top-3 text-white font-bold ml-16">
            +905519614009
          </span>
          <div className="absolute -top-4 -left-4 w-[5rem] h-[5rem] rounded-full bg-[#F7BC3B] animate-ping border-2"></div>
          <div className="absolute -top-2 -left-2 w-[4rem] h-[4rem] rounded-full bg-[#F7BC3B] animate-ping border-2"></div>

          <div className="absolute top-0 w-12 h-12 rounded-full bg-[#F7BC3B] border-2"></div>
        </a>
        <FaPhone className="text-3xl text-white relative -top-4 left-[0.5rem] animate-spin" />
      </div>
      <div className="flex justify-center items-center my-4">
        <a
          href="https://wa.me/905519614009"
          className="bg-green-800 rounded-full p-[0.5rem] w-[3.3rem] h-[3.3rem] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
        >
          <FaWhatsapp className="text-white text-4xl" />
        </a>
      </div>
    </div>
  )
}
