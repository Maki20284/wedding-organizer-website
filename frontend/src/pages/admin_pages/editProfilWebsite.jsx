// frontend/src/pages/admin/editProfil.jsx
import FormProfil from "../../components/admin/formProfil";
import Sidebar from "../../components/admin/sideNavbar";

export default function EditProfil() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6 bg-white min-h-screen">
        <FormProfil />
      </div>
    </div>
  );
};
