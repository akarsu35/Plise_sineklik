export default function Hero() {
  return (
    <div className="">
      <div className="relative">
        <video
          controls
          loop
          muted // Videoyu otomatik olarak sessize al
          autoPlay // Videoyu otomatik olarak başlat
          playsInline // Mobil cihazlarda tam ekran olmadan oynat
          src="/videos/3.mp4"
          type="video/mp4"
          className="w-full"
        >
          <source src="/videos/3.mp4" type="video/mp4" />{' '}
          {/* Farklı formatlar için kaynak ekleme */}
          Tarayıcınız video etiketini desteklemiyor.
        </video>

        {/* <img
          src="./images/herobg.jpg"
          alt="hero-background"
          className="w-full h-[90vh]"
        /> */}
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      </div>
      <div className="absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-center">
        <h1 className=" text-3xl md:text-5xl font-bold">
          ANTALYA PLİSE SİNEKLİK
        </h1>

        <br />
        <div className="text-xl">
          <p>İşimiz Sadece Sineklik</p>
          <br />
          <p>Hızlı Montaj</p>
          <br />
          <p>Yüksek Kalite</p>
          <br />
          <p>Güvenilir Hizmet</p>
        </div>
      </div>
    </div>
  )
}
