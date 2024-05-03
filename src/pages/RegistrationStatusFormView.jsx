import  { RegistrationStatusForm } from "../components/RegistrationStatusForm";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

function RegistrationStatusFormView (){
    return (
        <div className="min-h-screen flex flex-col justify-between w-full dark:bg-gray-950 bg-gray-200" >
            <Header/>
            <RegistrationStatusForm/>
            <Footer/>
        </div>
    )
}




export {RegistrationStatusFormView};