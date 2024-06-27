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