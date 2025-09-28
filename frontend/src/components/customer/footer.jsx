import ArrowUpBlack from "../../assets/icon_usp/arrow-right-up-svgrepo-com.svg";
import ArrowUpRed from "../../assets/icon_usp/arrow-right-up-svgrepo-com-red.svg";

export default function Footer() {
  return (
        <footer className="bg-ivory text-black font-cormorant backdrop-blur-md shadow-inner">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Left Section */}
                    <div className="mb-6 md:mb-0 text-center md:text-left">
                        <h2 className="text-2xl font-semibold mb-2">W.O.</h2>
                        <p className="text-sm">
                            &copy; {new Date().getFullYear()} W.O. All rights reserved.
                        </p>
                    </div>
                    {/* Right Section */}
                    <div className="flex space-x-4">
                        <a href="#top" className="group flex items-center text-sm font-semibold hover:text-burgundy transition">
                            Kembali ke Atas
                            <img src={ArrowUpBlack} alt="Arrow Up" className="w-4 h-4 ml-1 block group-hover:hidden" />
                            <img src={ArrowUpRed} alt="Arrow Up Red Hover" className="w-4 h-4 ml-1 hidden group-hover:block" />
                        </a>
                        <a href="/kontak" className="group flex items-center text-sm font-semibold hover:text-burgundy transition">
                            Hubungi Kami
                            <img src={ArrowUpBlack} alt="Arrow Up" className="w-4 h-4 ml-1 block group-hover:hidden" />
                            <img src={ArrowUpRed} alt="Arrow Up Red Hover" className="w-4 h-4 ml-1 hidden group-hover:block" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
};