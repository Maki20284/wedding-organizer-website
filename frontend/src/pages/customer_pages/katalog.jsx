import Navbar from '../../components/customer/topNavbar';
import Footer from '../../components/customer/footer';
import DaftarKatalog from '../../components/customer/katalog/daftarKatalog';
import SectionPemesanan from '../../components/customer/katalog/sectionPemesanan';

export default function Katalog() {
    return (
        <div>
            <Navbar />
            <div className="pt-24">
                <DaftarKatalog />
                <SectionPemesanan />
            </div>
            <Footer />
        </div>
    )
}