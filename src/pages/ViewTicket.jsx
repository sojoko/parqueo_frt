import { ViewTickets } from "../components/ViewTickets";
import { LoggedLayout } from "../layout/LoggedLayout.tsx";

function ViewTicket (){
    return (
        <div>
            <LoggedLayout> 
                <ViewTickets/>
            </LoggedLayout>
        </div>
    )
}

export {ViewTicket};