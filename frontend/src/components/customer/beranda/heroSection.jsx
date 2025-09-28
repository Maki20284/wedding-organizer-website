import ArrowUpBlack from "../../../assets/icon_usp/arrow-right-up-svgrepo-com.svg";
import ArrowUpIvory from "../../../assets/icon_usp/arrow-right-up-svgrepo-com-ivory.svg";

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
            href="/katalog"
            className="group inline-flex items-center gap-2 bg-ivory text-black px-6 py-3 text-[14px] rounded-full font-cormorant font-bold hover:bg-burgundy hover:text-ivory transition focus-visible:outline-none focus:ring-0">
            Jelajahi Katalog
            <img src={ArrowUpBlack} alt="Arrow" className="w-[16px] h-[16px] group-hover:hidden" />
            <img src={ArrowUpIvory} alt="Hover" className="w-[16px] h-[16px] hidden group-hover:block" />
          </a>
        </div>
      </div>
    </section>
  );
}
