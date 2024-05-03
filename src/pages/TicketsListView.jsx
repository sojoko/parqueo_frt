import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { TicketsTable } from "../components/TicketsTable";

function TicketsListView (){
    return (
        <div>
            <Header/>
            <TicketsTable/>
            <NavBar/>
            <Footer/>
        </div>
    )
}

export {TicketsListView};