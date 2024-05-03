import { UserAdminButtons } from "../components/UserAdminButtons.jsx";
import { LoggedLayout } from "../layout/LoggedLayout.tsx";

function UserAdminSection (){
    return (
        <LoggedLayout>      
             <UserAdminButtons/>
        </LoggedLayout>
    )
}

export {UserAdminSection};