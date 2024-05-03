import { UserList } from "../components/UserList.jsx";
import { LoggedLayout } from "../layout/LoggedLayout.tsx";

function UserListView (){
    return (
        <LoggedLayout>      
            <UserList />
        </LoggedLayout>
    )
}

export {UserListView};