import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Apa saja layanan yang ditawarkan JeWePe Wedding Organizer?",
      answer:
        "Kami menyediakan berbagai layanan mulai dari perencanaan pernikahan, dekorasi, katering, dokumentasi, hingga koordinasi acara agar hari istimewa Anda berjalan lancar.",
    },
    {
      question: "Bagaimana cara melakukan pemesanan paket?",
      answer:
        "Anda dapat melakukan pemesanan melalui website kami di halaman Pemesanan, atau langsung menghubungi tim admin kami melalui WhatsApp dan email.",
    },
    {
      question: "Apakah bisa request konsep pernikahan sesuai keinginan?",
      answer:
        "Tentu saja! Kami sangat terbuka untuk menyesuaikan konsep pernikahan dengan tema impian Anda, mulai dari dekorasi, warna, hingga susunan acara.",
    },
    {
      question: "Apakah ada layanan konsultasi sebelum memilih paket?",
      answer:
        "Ya, kami menyediakan sesi konsultasi gratis untuk membantu Anda memilih paket yang sesuai dengan kebutuhan dan budget.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-b from-ivory to-burgundy/30 py-16 px-6 font-cormorant">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-allison text-gray-800 mb-6">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 mb-10">
          Temukan jawaban dari pertanyaan yang sering diajukan oleh calon
          pengantin.
        </p>

        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg shadow-sm bg-white overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
              >
                <span className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="text-pink-500" />
                ) : (
                  <ChevronDown className="text-pink-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
