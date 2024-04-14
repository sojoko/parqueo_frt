import { UserButtons } from "../components/UserButtons.jsx";
import { LoggedLayout } from "../layout/LoggedLayout.tsx";

function UserAdminSection (){
    return (
        <LoggedLayout>      
             <UserButtons/>
        </LoggedLayout>
    )
}

export {UserAdminSection};