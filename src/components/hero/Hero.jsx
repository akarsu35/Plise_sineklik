import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshakeAngle } from '@fortawesome/free-solid-svg-icons'
import { faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { faRankingStar } from '@fortawesome/free-solid-svg-icons'
import Social from '../social/Social'
export default function Hero() {
  return (
    <div className="bg-hero-bg bg-cover min-h-[90vh]">
      {/* <div className="relative">
        <img
          src="./images/herobg.jpg"
          alt="hero-background"
          className="w-full h-[90vh]"
        />
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      </div> */}
      <div className=" text-white text-center">
        <h1 className="text-2xl flex flex-col md:flex-row justify-center items-center md:text-5xl font-bold text-wrap text-[#58E2EB] p-10">
          AKAY PLİSE PERDE <span className="mx-2">&</span> SİNEKLİK
        </h1>

        <div className="flex flex-col  md:gap-3 mt-0">
          {/* <p className="text-2xl sm:text-3xl">İşimiz Sadece Sineklik</p> */}
          <br />

          <FontAwesomeIcon
            icon={faTruckFast}
            className="text-5xl text-[#D74008]"
          />
          <p className="text-2xl">Hızlı Montaj</p>
          <br />
          <FontAwesomeIcon
            icon={faRankingStar}
            className="text-5xl text-[#D74008]"
          />
          <p className="text-2xl">Yüksek Kalite</p>
          <br />
          <FontAwesomeIcon
            icon={faHandshakeAngle}
            className="text-5xl text-[#D74008]"
          />
          <p className="text-2xl">Güvenilir Hizmet</p>
        </div>
      </div>
      <div className="relative sm:-bottom-20 -bottom-2 ml-10 sm:ml-28 1920x1080:ml-[50%] 1920x1080:transform 1920x1080:translate-x-[-50%]">
        <Social />
      </div>
    </div>
  )
}
