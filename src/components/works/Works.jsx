import CarouselModel from '../carousel/CarouselModel'
import Work from '../work/Work'

export default function Works() {
  return (
    <div id="works" className="w-full bg-blue-gray-900 flex flex-col">
      <div className="w-full flex flex-col justify-center items-center text-4xl my-4 text-white font-bold">
        <p>UYGULAMALARIMIZ</p>
        <div className="w-[22rem] h-2 bg-red-500 rounded-md"></div>
      </div>
      <CarouselModel />
    </div>
  )
}
