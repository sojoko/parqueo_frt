import { RegistrationFormEmployers } from "../components/RegistrationFormEmployers";
import { LoggedLayout } from "../layout/LoggedLayout.tsx";

function RegistrationEmployers (){
    return (
        <LoggedLayout>
            <RegistrationFormEmployers/>   
        </LoggedLayout>

        
    )
}
export {RegistrationEmployers};