import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider.tsx";


export default function Dashboard() {
    
    const auth = localStorage.getItem('isAuthenticated')
    useAuth().isAuthenticated = auth
   
    return useAuth().isAuthenticated ? <Outlet /> : <Navigate to="/" />  
    
}