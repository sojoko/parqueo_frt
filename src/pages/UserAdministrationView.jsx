import { UserButtons } from "../components/UserButtons.jsx";
import { LoggedLayout } from "../layout/LoggedLayout.tsx";

function UserAdministrationView (){
    return (
        <LoggedLayout>      
            <UserButtons/>
        </LoggedLayout>
    )
}

export { UserAdministrationView };