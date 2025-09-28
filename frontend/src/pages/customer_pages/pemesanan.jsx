import Footer from "../../components/customer/footer";
import FormPemesanan from "../../components/customer/form_pemesanan/formPemesanan";
import TopNavbar from "../../components/customer/topNavbar";

export default function Pemesanan() {
    return (
        <div>
            <TopNavbar />
            <div className="pt-24">
                <FormPemesanan />
            </div>
            <Footer />
        </div>
    );
};