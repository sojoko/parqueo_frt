import { AprendizDataTab } from "../components/AprendizDataTab.jsx";
import { LoggedLayout } from "../layout/LoggedLayout.tsx";

function AprendizDataTabView (){
    return (
        <LoggedLayout>        
            <AprendizDataTab/>  
        </LoggedLayout>
    )
}
export {AprendizDataTabView};