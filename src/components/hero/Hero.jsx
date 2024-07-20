import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshakeAngle } from '@fortawesome/free-solid-svg-icons'
import { faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { faRankingStar } from '@fortawesome/free-solid-svg-icons'
export default function Hero() {
  return (
    <div className="">
      <div className="relative">
        <img
          src="./images/herobg.jpg"
          alt="hero-background"
          className="w-full h-[90vh]"
        />
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      </div>
      <div className="absolute top-[45%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-center z-0">
        <h1 className=" text-3xl md:text-5xl font-bold">
          ANTALYA PLİSE SİNEKLİK
        </h1>

        <br />
        <div className="">
          <p className="text-3xl">İşimiz Sadece Sineklik</p>
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
    </div>
  )
}
