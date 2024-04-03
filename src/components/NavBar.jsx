import { IconName } from "react-icons/gr";
import { GrHomeRounded } from "react-icons/gr";
import { HiOutlineQrcode } from "react-icons/hi"
import { IoQrCodeOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { GrBike } from "react-icons/gr";
import { GrContact } from "react-icons/gr";
function NavBar() {
  return (

    
    <div className="flex flex-row bg-white lg:justify-end lg:h-full pb-4 pt-4">
    
    <div className="w-full max-w-md mx-auto lg:w-24 lg:mx-1 lg:justify-end lg:h-full">
        
        <div className="px-4 bg-white border-2 border-amber-500 shadow-lg rounded-md hover:border-teal-600 lg:justify-end lg:h-full">
            <div className="flex flex-row lg:flex-col lg:justify-end"> {/* Cambiado a flex-col en dispositivos grandes */}
                <div className="flex-1 group lg:justify-end lg:h-full">
                    <a href="#" className="flex items-end justify-center  lg:justify-endtext-center mx-auto px-4 pt-2 w-full text-amber-500 group-hover:text-teal-600">
                        <span className="block pt-1">
                            <div className="flex justify-center text-3xl"><GrHomeRounded /></div>
                            <span className="block text-s font-bold pb-1">Home</span>
                            <span className="block w-5 mx-auto h-1 group-hover:bg-teal-600 rounded-full"></span>
                        </span>
                    </a>
                </div>
                <div className="flex-1 group">
                    <a href="#" className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-amber-500 group-hover:text-teal-600">
                        <span className="block px-1 pt-1">
                            <div className="flex justify-center text-3xl"><IoQrCodeOutline /></div>
                            <span className="block text-s font-bold pb-1">QR</span>
                            <span className="block w-5 mx-auto h-1 group-hover:bg-teal-500 rounded-full"></span>
                        </span>
                    </a>
                </div>
                <div className="flex-1 group">
                    <a href="#" className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-amber-500 group-hover:text-teal-600">
                        <span className="block px-1 pt-1">
                            <div className="flex justify-center text-3xl"><GrBike /></div>
                            <span className="block text-s font-bold pb-1">Parking</span>
                            <span className="block w-5 mx-auto h-1 group-hover:bg-teal-600 rounded-full"></span>
                        </span>
                    </a>
                </div>
                <div className="flex-1 group">
                    <a href="#" className="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-amber-500 group-hover:text-teal-600">
                        <span className="block px-1 pt-1">
                            <div className="flex justify-center text-3xl"><GrContact /></div>
                            <span className="block text-s font-bold pb-1">Tickets</span>
                            <span className="block w-5 mx-auto h-1 group-hover:bg-teal-600 rounded-full"></span>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}

export { NavBar };
