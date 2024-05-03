import { AprendizCardInfo } from "../components/AprendizCardInfo.jsx";
import { LoggedLayout } from "../layout/LoggedLayout.tsx";

function AprendizCardInfoView(){
    return (
        <LoggedLayout>        
            <AprendizCardInfo/>  
        </LoggedLayout>
    )
}
export {AprendizCardInfoView};