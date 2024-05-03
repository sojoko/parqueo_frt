import {AprendizRegistrationRequest} from "../components/AprendizRegistrationRequest.jsx";
import { LoggedLayout } from "../layout/LoggedLayout.tsx";

function RegistrationRequestList (){
    return (
        <LoggedLayout>
            <AprendizRegistrationRequest/>
        </LoggedLayout>

        
    )
}
export {RegistrationRequestList};