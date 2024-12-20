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
export default function Pencere() {
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
        <title>Pencere | Plise-Sineklik</title>
        <meta
          name="description"
          content="Pencere uygulamamız hakkında bilgi edinin"
        />
        <meta
          name="keywords"
          content="pencere, plise, sineklik,hurma sineklik,hurma,konyaaltı sineklik,lara sineklik"
        />
      </Helmet>
      <div className="m-8 flex flex-col">
        <h1 className="text-3xl sm:text-4xl font-bold text-center">
          PENCERE SİNEKLİĞİ
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
              src="./images/pencere-sineklik/ozel4.jpeg"
              alt=""
              className="p-2 h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col m-2 rounded-md bg-white  h-[550px] mb-20 group relative">
            <img
              src="./images/pencere-sineklik/ozel2.jpeg"
              alt=""
              className="p-2 h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col m-2 rounded-md bg-white  h-[550px] mb-20 group relative">
            <img
              src="./images/pencere-sineklik/ozel3.jpeg"
              alt=""
              className="p-2 h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col m-2 rounded-md bg-white  h-[550px] mb-20 group relative">
            <img
              src="./images/pencere-sineklik/ozel1.jpeg"
              alt=""
              className="p-2 h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col m-2 rounded-md bg-white  h-[550px] mb-20 group relative">
            <img
              src="./images/pencere-sineklik/ozel5.jpeg"
              alt=""
              className="p-2 h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col m-2 rounded-md bg-white  h-[550px] mb-20 group relative">
            <img
              src="./images/pencere-sineklik/ozel6.jpeg"
              alt=""
              className="p-2 h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col m-2 rounded-md bg-white  h-[550px] mb-20 group relative">
            <img
              src="./images/pencere-sineklik/ozel7.jpeg"
              alt=""
              className="p-2 h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col m-2 rounded-md bg-white  h-[550px] mb-20 group relative">
            <img
              src="./images/pencere-sineklik/ozel8.jpeg"
              alt=""
              className="p-2 h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col m-2 rounded-md bg-white  h-[550px] mb-20 group relative">
            <img
              src="./images/pencere-sineklik/ozel9.jpeg"
              alt=""
              className="p-2 h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col m-2 rounded-md bg-white  h-[550px] mb-20 group relative">
            <img
              src="./images/pencere-sineklik/ozel10.jpeg"
              alt=""
              className="p-2 h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col m-2 rounded-md bg-white  h-[550px] mb-20 group relative">
            <img
              src="./images/pencere-sineklik/ozel11.jpeg"
              alt=""
              className="p-2 h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col m-2 rounded-md bg-white  h-[550px] mb-20 group relative">
            <img
              src="./images/pencere-sineklik/ozel12.jpeg"
              alt=""
              className="p-2 h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col m-2 rounded-md bg-white  h-[550px] mb-20 group relative">
            <img
              src="./images/pencere-sineklik/1.jpeg"
              alt=""
              className="p-2 h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col m-2 rounded-md bg-white h-[550px] mb-20 group relative">
            <img
              src="./images/pencere-sineklik/2.jpeg"
              alt=""
              className="p-2 h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col m-2 rounded-md bg-white h-[550px] mb-20 group relative">
            <img
              src="./images/pencere-sineklik/3.jpeg"
              alt=""
              className="p-2 h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col m-2 rounded-md bg-white h-[550px] mb-20 group relative">
            <img
              src="./images/pencere-sineklik/4.jpeg"
              alt=""
              className="p-2 h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col m-2 rounded-md bg-white h-[550px] mb-20 group relative">
            <img
              src="./images/pencere-sineklik/5.jpeg"
              alt=""
              className="p-2 h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col m-2 rounded-md bg-white h-[550px] mb-20 group relative">
            <img
              src="./images/pencere-sineklik/6.jpeg"
              alt=""
              className="p-2 h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col m-2 rounded-md bg-white h-[550px] mb-20 group relative">
            <img
              src="./images/pencere-sineklik/7.jpeg"
              alt=""
              className="p-2 h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col m-2 rounded-md bg-white h-[550px] mb-20 group relative">
            <img
              src="./images/pencere-sineklik/8.jpeg"
              alt=""
              className="p-2 h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col m-2 rounded-md bg-white h-[550px] mb-20 group relative">
            <img
              src="./images/pencere-sineklik/9.jpeg"
              alt=""
              className="p-2 h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col m-2 rounded-md bg-white h-[550px] mb-20 group relative">
            <img
              src="./images/pencere-sineklik/10.jpeg"
              alt=""
              className="p-2 h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col m-2 rounded-md bg-white h-[550px] mb-20 group relative">
            <img
              src="./images/pencere-sineklik/11.jpeg"
              alt=""
              className="p-2 h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col m-2 rounded-md bg-white h-[550px] mb-20 group relative">
            <img
              src="./images/pencere-sineklik/12.jpeg"
              alt=""
              className="p-2 h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col m-2 rounded-md bg-white h-[550px] mb-20 group relative">
            <img
              src="./images/pencere-sineklik/13.jpeg"
              alt=""
              className="p-2 h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col m-2 rounded-md bg-white h-[550px] mb-20 group relative">
            <img
              src="./images/pencere-sineklik/14.jpeg"
              alt=""
              className="p-2 h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col m-2 rounded-md bg-white h-[550px] mb-20 group relative">
            <img
              src="./images/pencere-sineklik/15.jpeg"
              alt=""
              className="p-2 h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col m-2 rounded-md bg-white h-[550px] mb-20 group relative">
            <img
              src="./images/pencere-sineklik/16.jpeg"
              alt=""
              className="p-2 h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col m-2 rounded-md bg-white h-[550px] mb-20 group relative">
            <img
              src="./images/pencere-sineklik/17.jpeg"
              alt=""
              className="p-2 h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col m-2 rounded-md bg-white h-[550px] mb-20 group relative">
            <img
              src="./images/pencere-sineklik/17.jpeg"
              alt=""
              className="p-2 h-full w-full object-cover"
            />
          </div>
        </Carousel>
      </div>
    </>
  )
}
