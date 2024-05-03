
import { HiOutlineUserPlus } from "react-icons/hi2";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { useState } from 'react';
import { Navigate } from "react-router-dom";


function UserAdminButtons() {
   
  const [rollSender, setRollSender] = useState("");
  
  function handleRoll1() {
    setRollSender(1);
  }
  function handleRoll2() {
    setRollSender(3);
  }
  if (rollSender) {
    const route = `/user-registration-employees?rollSender=${rollSender}`;
    return <Navigate to={route} />;
  }

  return (

    <div className="flex w-100 flex-col gap-8 p-2">   
      <button onClick={handleRoll1}>
          <div className="flex shadow-lg shadow-amber-800/50 items-center justify-center text-4xl text-amber-800 hover:text-white border-2 border-amber-800
           hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg px-5 
           py-2.5 text-center mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white
            dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">
            <HiOutlineUserPlus className="mr-4" />
            <h3 className="text-2xl">Crear usuarios (Admins)</h3>
          </div>
      </button>
      <button onClick={handleRoll2}>
          <div className="flex shadow-lg shadow-amber-800/50 items-center justify-center  text-4xl text-amber-800 hover:text-white border-2 border-amber-800
           hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg px-5 
           py-2.5 text-center mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white
            dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">
            <HiOutlineUserPlus className="mr-4" />
            <h3 className="text-2xl">Crear usuarios (Vigilantes)</h3>
          </div>
      </button>
      <a href="/user-registration-request">
          <div className="flex shadow-lg shadow-purple-700/50  items-center justify-center  text-4xl text-purple-700 hover:text-white border-2
           border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg px-5 py-2.5 text-center 
            mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">
          <HiOutlineClipboardDocumentCheck className="mr-4"  /> 
            <h3 className="text-2xl">Solicitudes de registro</h3>
          </div>
      </a>     
      <a href="/users-administration-list">
          <div className="flex shadow-lg shadow-purple-700/50 items-center justify-center  text-4xl text-purple-700 hover:text-white border-2
           border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg px-5 py-2.5 text-center
            mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">
          <HiOutlineUserGroup  className="mr-4" />
            <h3 className="text-2xl">Lista de usuario</h3>
          </div>
      </a>

    </div>
    

  );
}

export { UserAdminButtons };
