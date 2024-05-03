import { ViewTickets } from "../components/ViewTickets";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

function ViewTicket (){
    return (
        <div>
            <Header/>
            <ViewTickets/>
            <Footer/>
        </div>
    )
}

export {ViewTicket};