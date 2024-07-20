import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

export default function CarouselModel() {
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
        removeArrowOnDeviceType={['tablet', 'mobile']}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-20-px"
      >
        <div className="flex flex-col m-2 rounded-md bg-white  h-[550px] mb-20 group relative">
          <img
            src="./images/duble.jpeg"
            alt=""
            className="p-2 h-full w-full object-cover"
          />
          <div className="absolute bottom-2 left-[50%] translate-x-[-50%] flex justify-center items-center w-40 h-10 bg-[#D74008] text-center rounded-md">
            <button className="p-2 font-bold text-white">İNCELE</button>
          </div>
        </div>

        <div className="flex flex-col m-2 rounded-md bg-white h-[550px] mb-20 group relative">
          <img
            src="./images/fransız.jpeg"
            alt=""
            className="p-2 h-full w-full object-cover"
          />
          <div className="absolute bottom-2 left-[50%] translate-x-[-50%] flex justify-center items-center w-40 h-10 bg-[#D74008] text-center rounded-md">
            <button className="p-2 font-bold text-white">İNCELE</button>
          </div>
        </div>
        <div className="flex flex-col m-2 rounded-md bg-white h-[550px] mb-20 group relative">
          <img
            src="./images/kapı.jpg"
            alt=""
            className="p-2 h-full w-full object-cover"
          />
          <div className="absolute bottom-2 left-[50%] translate-x-[-50%] flex justify-center items-center w-40 h-10 bg-[#D74008] text-center rounded-md">
            <button className="p-2 font-bold text-white">İNCELE</button>
          </div>
        </div>
        <div className="flex flex-col m-2 rounded-md bg-white h-[550px] mb-20 group relative">
          <img
            src="./images/pencere.jpg"
            alt=""
            className="p-2 h-full w-full object-cover"
          />
          <div className="absolute bottom-2 left-[50%] translate-x-[-50%] flex justify-center items-center w-40 h-10 bg-[#D74008] text-center rounded-md">
            <button className="p-2 font-bold text-white">İNCELE</button>
          </div>
        </div>
      </Carousel>
    </>
  )
}
