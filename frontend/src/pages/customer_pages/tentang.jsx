import Footer from "../../components/customer/footer";
import LittleHeroSection from "../../components/customer/tentang_kami/littleHeroSection";
import ProfilWebsite from "../../components/customer/tentang_kami/profilWebsite";
import TopNavbar from "../../components/customer/topNavbar";

export default function Tentang() {
  return (
    <div>
        <TopNavbar />
        <LittleHeroSection />
        <ProfilWebsite />
        <Footer />
    </div>
  );
}