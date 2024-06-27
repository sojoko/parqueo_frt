import { SetPassword } from "../components/SetPassword.jsx";
// import { LoggedLayout } from "../layout/LoggedLayout.tsx";

function SetPasswordView (){
    return (
        // <LoggedLayout>  
        <div className=" flex flex-col h-screen justify-center items-center bg-gray-100">
            <SetPassword/>
        </div>    
            
        /* </LoggedLayout> */
    )
}

export {SetPasswordView};