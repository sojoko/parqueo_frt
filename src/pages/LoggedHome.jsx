import { Header } from "../components/Header.jsx";
import { NavBar } from "../components/NavBar.jsx";
import { LoggedLayout } from "../layout/LoggedLayout.tsx";
import { NewsCard } from "../components/NewsCard.jsx";

function LoggedHome (){
    return (
        <LoggedLayout>
            <NewsCard/>
        </LoggedLayout>
    )
}

export {LoggedHome};