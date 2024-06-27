import { RegistrationFormTicket } from "../components/RegistrationFormTicket";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

function CreateTicketFormView (){
    return (
        <div>
            <Header/>
            <RegistrationFormTicket/>
            <Footer/>
        </div>
    )
}

export {CreateTicketFormView};