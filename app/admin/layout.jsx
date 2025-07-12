import Sidebar from "@/Components/AdminComponents/Sidebar";
import { CgProfile } from "react-icons/cg";
import { ToastContainer } from "react-toastify";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex">
        <ToastContainer theme="dark" />
        <Sidebar />
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-b border-black">
            <h3 className="font-medium">Admin Panel</h3>
            <CgProfile size={25} />
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
