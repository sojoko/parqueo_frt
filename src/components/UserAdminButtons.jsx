
import { HiOutlineUserPlus } from "react-icons/hi2";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";
import { HiOutlineUserGroup } from "react-icons/hi2";

function UserAdminButtons() {
   
  return (

    <div className="flex w-100 flex-col gap-8 p-8">   
      <a href="">
          <div className="flex shadow-lg shadow-amber-800/50 items-center justify-center  text-4xl text-amber-800 hover:text-white border-2 border-amber-800
           hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg px-5 
           py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white
            dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">
            <HiOutlineUserPlus className="mr-4" />
            <h3 className="text-2xl">Crear usuarios</h3>
          </div>
      </a>
      <a href="">
          <div className="flex shadow-lg shadow-purple-700/50  items-center justify-center  text-4xl text-purple-700 hover:text-white border-2 border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">
          <HiOutlineClipboardDocumentCheck className="mr-4"  /> 
            <h3 className="text-2xl">Solicitudes de registro</h3>
          </div>
      </a>     
      <a href="/users-administration-list">
          <div className="flex shadow-lg shadow-purple-700/50 items-center justify-center  text-4xl text-purple-700 hover:text-white border-2 border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">
          <HiOutlineUserGroup  className="mr-4" />
            <h3 className="text-2xl">Lista de usuario</h3>
          </div>
      </a>

    </div>
    

  );
}

export { UserAdminButtons };
