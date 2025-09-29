import Sidebar from "../../components/admin/sideNavbar";
import TabelPesanan from "../../components/admin/tabelPesanan";

export default function EditPesanan({ setToken }) {
  return (
    <div className="flex">
      <Sidebar setToken={setToken} />
      <div className="flex-1 p-6 bg-white min-h-screen">
        <TabelPesanan />
      </div>
    </div>
  );
      }