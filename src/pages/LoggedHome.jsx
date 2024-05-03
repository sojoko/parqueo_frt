import { Header } from "../components/Header.jsx";
import { NavBar } from "../components/NavBar.jsx";
import { LoggedLayout } from "../layout/LoggedLayout.tsx";

function LoggedHome (){
    return (
        <LoggedLayout>
            <h1 className="text-2xl text-amber-800" >Hola mundo</h1>
        </LoggedLayout>
    )
}

export {LoggedHome};