import { LoggedLayout } from "../layout/LoggedLayout.tsx";
import { EditUser } from "../components/EditUser.jsx";

function EditUserPage (){
    return (
        <LoggedLayout>
            <EditUser/>
        </LoggedLayout>

        
    )
}
export {EditUserPage};