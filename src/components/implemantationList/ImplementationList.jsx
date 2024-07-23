import implementations from '../../datas/implementations'
import Implementation from '../implemantation/Implemantation'

export default function ImplementationList() {
  return (
    <div
      id="healylist"
      className="flex flex-col justify-center items-center my-10"
    >
      <h1 className="text-3xl sm:text-5xl font-bold mb-2">UYGULAMARIMIZ</h1>
      <div className="w-[22rem] h-2 bg-red-500 rounded-md mb-6"></div>
      <div className="md:ml-5 w-[90%] flex">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:mx-auto">
          {implementations.map((i, index) => {
            const { id, img, title, path } = i
            return (
              <div key={index}>
                <Implementation id={id} title={title} img={img} path={path} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
