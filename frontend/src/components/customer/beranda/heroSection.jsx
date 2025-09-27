export default function HeroSection() {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: "url('/beatriz-perez-moya-M2T1j-6Fn8w-unsplash.jpg')",
      }}
    >
      {/* Overlay hitam transparan */}
      <div className="absolute inset-0 bg-burgundy/30"></div>

      {/* Konten hero */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="text-center text-white max-w-3xl">
          <h1 className="text-[64px] md:text-6xl mb-4 font-allison text-ivory">
            Mewujudkan Pernikahan Impian Anda
          </h1>
          <p className="text-[24px] md:text-2xl mb-8 font-cormorant text-ivory">
            Bersama kami, setiap momen berkesan dan setiap detail sempurna untuk hari istimewa Anda.
          </p>
          <a
            href="#services"
            className="bg-ivory text-black px-6 py-3 rounded-full font-cormorant font-bold hover:bg-burgundy hover:text-champagne transition">
            Jelajahi Katalog
          </a>
        </div>
      </div>
    </section>
  );
}
