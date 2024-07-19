export default function AboutUs() {
  return (
    <div
      id="aboutus"
      className="flex justify-center min-h-[40vh] bg-gray-500 "
    >
      <div className="w-[80%] flex flex-col  items-center text-white p-4">
        <div className="md:my-4">
          <h2 className="text-3xl">HAKKIMIZDA</h2>
        </div>
        <div className="text-center ">
          <h3 className="text-xl">
            Antalya Plise Sineklik olarak, kurulduğumuz günden bu yana müşteri
            memnuniyetini hedeflemekte ve garanti etmekteyiz. Katlanır, pileli
            ve akordeon sineklik çeşitleri için güvenilir hizmet ve hızlı montaj
            sunuyoruz.{' '}
            <span className="text-red-400">Pazar günleri hariç her gün 08:00 - 18:00 saatleri </span>
            arasında hizmet vermekteyiz.
          </h3>
        </div>
      </div>
    </div>
  )
}