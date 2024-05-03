import { LoginForm } from "../components/LoginForm.tsx";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";


function Home (){
    const auth = localStorage.getItem('isAuthenticated')    
    if (auth){
       window.location.href = '/home'
    }
    
    return (
        <div className="min-h-screen flex flex-col justify-between w-full bg-gray-200" >
            <Header/>
            <LoginForm/>
            <Footer/>
        </div>
    )
}




export {Home};