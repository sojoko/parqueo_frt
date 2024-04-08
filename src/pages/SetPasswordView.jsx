import { SetPassword } from "../components/SetPassword.jsx";
import { LoggedLayout } from "../layout/LoggedLayout.tsx";

function SetPasswordView (){
    return (
        <LoggedLayout>      
            <SetPassword/>
        </LoggedLayout>
    )
}

export {SetPasswordView};