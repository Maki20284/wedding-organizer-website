import PaintIcon from "../../../assets/icon_usp/art-design-paint-pallet-format-text-svgrepo-com.svg";
import WeddingRing from "../../../assets/icon_usp/wedding-rings-svgrepo-com.svg";
import FastTime from "../../../assets/icon_usp/time-fast-svgrepo-com.svg";
import WeddingBell from "../../../assets/icon_usp/wedding-bells-svgrepo-com.svg";

export default function USP() {
    const uspItems = [
    {
      icon:<img src={WeddingRing} alt="Ring" className="w-12 h-12 mx-auto" />,
      title: "Pernikahan Impian",
      description: "Mewujudkan setiap detail hari istimewa Anda dengan sempurna.",
    },
    {
      icon: <img src={PaintIcon} alt="Paint" className="w-12 h-12 mx-auto" />,
      title: "Desain Eksklusif",
      description: "Tema dan dekorasi yang disesuaikan dengan kepribadian Anda.",
    },
    {
      icon: <img src={FastTime} alt="Paint" className="w-12 h-12 mx-auto" />,
      title: "Manajemen Waktu",
      description: "Tim profesional memastikan semua berjalan tepat waktu.",
    },
    {
      icon: <img src={WeddingBell} alt="Paint" className="w-12 h-12 mx-auto" />,
      title: "Layanan All-in-One",
      description: "Mulai dari dekorasi, katering, dokumentasi, hingga hiburan.",
    },
  ];
    
    return (
        <div className="bg-ivory text-white font-cormorant p-4">
            <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-allison text-center text-black mb-12">
            Kenapa Memilih Kami
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {uspItems.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl text-center hover:scale-105 transition-transform"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-[24px] font-semibold font-cormorant mb-2 text-burgundy">
                  {item.title}
                </h3>
                <p className="text-[20px] font-cormorant text-burgundy">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
        </div>
    )
}