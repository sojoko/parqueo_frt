import { PiSignOut } from "react-icons/pi";
import { PiWrench } from "react-icons/pi";



function UserButtons() {
   
  function clearLocalStorage() {
    localStorage.clear();
    window.location.href = '/';
  }

  return (

    <div className="flex w-100 flex-col gap-8 p-2">   
      <button onClick={clearLocalStorage}>
          <div className="flex shadow-lg shadow-amber-800/50 items-center justify-center text-4xl text-amber-800 hover:text-white border-2 border-amber-800
           hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg px-5 
           py-2.5 text-center mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white
            dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">
           <PiSignOut className="mr-4" />
            <h3 className="text-2xl">Cerrar Sesion</h3>
          </div>
      </button>    
      <a href="#">
          <div className="flex shadow-lg shadow-purple-700/50  items-center justify-center  text-4xl text-purple-700 hover:text-white border-2
           border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg px-5 py-2.5 text-center 
            mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">
          <PiWrench className="mr-4" /> 
            <h3 className="text-2xl">Modificar mis datos</h3>
          </div>
      </a>     

    </div>
    

  );
}
export { UserButtons };
