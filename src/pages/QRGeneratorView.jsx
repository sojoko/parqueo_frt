import { QRGenerated } from "../components/QRGenerated";
import { LoggedLayout } from "../layout/LoggedLayout.tsx";

function QRGeneratorView (){
    return (
        <LoggedLayout>        
             <QRGenerated/>   
        </LoggedLayout>
    )
}
export {QRGeneratorView};