import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Dashboard } from "../components/Dashboard";
import { DashboardGeneral } from "../components/DashboardGeneral";
import { DashboardBici } from "../components/DashboardBici";
import { DashboardMoto } from "../components/DashboardMoto";

function DashboardPage (){

    const roll = localStorage.getItem('userRoll')

    return (
        <div>
            <Header/>
            <div className="py-12 bg-gray-200 flex flex-col items-center justify-center w-full">
                {roll == 1 && (
                 <>
                    <div className="w-4/5 rounded-md shadow-md mb-4">
                        <Dashboard/>
                    </div>
                    <div className="w-4/5 rounded-md shadow-md mb-4">
                        <DashboardGeneral/>
                    </div>
                 </>   
                )}
                <div className="w-4/5 rounded-md shadow-md mb-4">
                    <DashboardBici/>
                </div>
                <div className="w-4/5 rounded-md shadow-md">
                    <DashboardMoto/>
                </div>
            </div>
            <NavBar/>
            <Footer/>
        </div>
    )
}

export {DashboardPage};