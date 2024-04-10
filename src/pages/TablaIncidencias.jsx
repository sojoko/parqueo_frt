import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { TicketsTable } from "../components/TicketsTable";

function TablaIncidencias (){
    return (
        <div>
            <Header/>
            <TicketsTable/>
            <Footer/>
        </div>
    )
}

export {TablaIncidencias};