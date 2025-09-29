import TabelKatalog from "../../components/admin/tabelKatalog";
import Sidebar from "../../components/admin/sideNavbar";

export default function EditKatalog({ setToken }) {
  return (
    <div className="flex">
      <Sidebar setToken={setToken} />
      <div className="flex-1 p-6 bg-white min-h-screen">
        <TabelKatalog />
      </div>
    </div>
  );
      }