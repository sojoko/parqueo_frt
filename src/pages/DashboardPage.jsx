import { LoggedLayout } from "../layout/LoggedLayout.tsx";
// import { Dashboard } from "../components/Dashboard";
import { DashboardGeneral } from "../components/DashboardGeneral";
import { DashboardBici } from "../components/DashboardBici";
import { DashboardMoto } from "../components/DashboardMoto";

function DashboardPage (){

    const roll = localStorage.getItem('userRoll')

    return (
        
        <LoggedLayout>
            <div className="my-12 bg-gray-200 flex flex-col items-center justify-center w-full ">
                {(roll === 1 || roll === 3) && (
                 <>
                    {/* <div className="w-4/5 rounded-md shadow-md mb-4">
                        <Dashboard/>
                    </div> */}
                    <div className="w-4/5 rounded-md shadow-md mb-4">
                        <DashboardGeneral/>
                    </div>
                 </>   
                )}
                <div className="w-4/5 rounded-md shadow-md mb-4">
                    <DashboardBici/>
                </div>
                <div className="w-4/5 rounded-md ">
                    <DashboardMoto/>
                </div>
            </div>
            </LoggedLayout>
       
    )
}

export {DashboardPage};