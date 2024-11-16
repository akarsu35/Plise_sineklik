import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { Helmet } from 'react-helmet'
const CustomLeftArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute left-0 z-10 p-2 bg-[#C0A55E] text-white text-3xl rounded-full hover:bg-gray-800 focus:outline-none"
      style={{ top: '50%', transform: 'translateY(-50%)' }}
    >
      <FaArrowLeft />
    </button>
  )
}

const CustomRightArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute right-0 z-10 p-2 bg-[#B756A0] text-white text-3xl rounded-full hover:bg-gray-800 focus:outline-none"
      style={{ top: '50%', transform: 'translateY(-50%)' }}
    >
      <FaArrowRight />
    </button>
  )
}

export default function CamBalkonPerdesi() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  }
  return (
    <>
      <Helmet>
        <title>Cam Balkon Perdesi | Plise-Sineklik</title>
        <meta
          name="description"
          content="Kapı uygulamamız hakkında bilgi edinin"
        />
        <meta
          name="keywords"
          content="kapı, plise, sineklik,hurma sineklik,hurma,konyaaltı sineklik,lara sineklik"
        />
      </Helmet>
      <div className="m-8 flex flex-col">
        <h1 className="text-3xl sm:text-4xl font-bold text-center">
          CAM BALKON PERDESİ
        </h1>
        <div className="flex items-center justify-center">
          <div className="w-[22rem] h-2 bg-red-500 rounded-md"></div>
        </div>

        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={[]} // remove this line to always show arrows
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-20-px"
        >
          <div className="flex flex-col m-2 rounded-md bg-white  h-[550px] mb-20 group relative">
            <img
              src="./images/cam-balkon-perdesi/cam-balkon.jpeg"
              alt=""
              className="p-2 h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col m-2 rounded-md bg-white h-[550px] mb-20 group relative">
            <img
              src="./images/cam-balkon-perdesi/cam-balkon2.jpeg"
              alt=""
              className="p-2 h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col m-2 rounded-md bg-white h-[550px] mb-20 group relative">
            <img
              src="./images/cam-balkon-perdesi/cam-balkon3.jpeg"
              alt=""
              className="p-2 h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col m-2 rounded-md bg-white h-[550px] mb-20 group relative">
            <img
              src="./images/cam-balkon-perdesi/cam-balkon3.jpeg"
              alt=""
              className="p-2 h-full w-full object-cover"
            />
          </div>
          
        </Carousel>
      </div>
    </>
  )
}

