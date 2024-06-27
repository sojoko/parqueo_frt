import { LoggedLayout } from "../layout/LoggedLayout.tsx";
import { TicketsTable } from "../components/TicketsTable";
import { ApredizTicketsTable } from "../components/ApredizTicketsTable";


function TicketsListView (){
    const roll = localStorage.getItem('userRoll');
    return (
        <LoggedLayout>        
            {(roll == 2 || roll == 3) &&(
                <ApredizTicketsTable/>
            )}
            {roll == 1 &&(
                <TicketsTable/>
            )}
        </LoggedLayout>
    )
}

export {TicketsListView};