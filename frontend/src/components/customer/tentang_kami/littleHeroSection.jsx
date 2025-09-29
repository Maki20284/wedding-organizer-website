export default function LittleHeroSection() {
  return (
    <section className="relative h-[338px] w-full bg-cover bg-center"
      style={{
        backgroundImage: "url('/kerri-shaver-xepikEyPgmI-unsplash.jpg')",
      }}>
        {/* Overlay hitam transparan */}
        <div className="absolute inset-0 bg-burgundy/30"></div>
        
        {/* Konten hero */}
        <div className="relative z-10 flex items-center justify-center h-full px-4">
            <div className="container mx-auto text-ivory text-center">
                <h2 className="text-[64px] font-allison mb-4">Tentang Kami</h2>
                <div className="flex justify-center gap-2">
                    <a href="/beranda" className="text-lg font-cormorant">
                    Beranda
                    </a>
                    <p></p>
                    <a href="/tentang" className="text-lg font-cormorant">
                    &nbsp;Tentang
                    </a>
                </div>
            </div>
        </div>
    </section>
  );
}