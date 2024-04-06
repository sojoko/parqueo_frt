import { MainSection } from "../components/MainSection";
import { Header } from "../components/Header";
import { NavBar } from "../components/NavBar";
import { QRGenerated } from "../components/QRGenerated";
import { LoggedLayout } from "../layout/LoggedLayout.tsx";

function QRGeneratorView (){
    return (
        <LoggedLayout>          
            <div className="min-h-screen flex flex-col w-full justify-between items-center dark:bg-gray-950" >
                <QRGenerated/>   
            </div>         
        </LoggedLayout>
    )
}




export {QRGeneratorView};