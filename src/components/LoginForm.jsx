import React from 'react';

function LoginForm() {
    return (
        <div className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
            <div className="bg-white  shadow-md rounded-lg px-8 py-6 max-w-md">
                <h1 className="text-3xl font-bold text-center mb-4 dark:text-amber-500">PARQUEO</h1>
                <form action="#">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-s font-medium text-start text-black dark:white mb-2">Documento de identidad</label>
                        <input type="email" id="email" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 invalid:border-pink-600 invalid:border-2" placeholder="1020304050" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-s font-medium text-start text-gray-700 dark:text-black mb-2">Contraseña</label>
                        <input type="password" id="password" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 invalid:border-pink-600 invalid:border-2"  placeholder="**********" required />
                        <a href="#"
                            className="text-s text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">   </a>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                           
                            <label htmlFor="remember" className=" block text-s text-gray-700 dark:text-indigo-700 mr-16">¿Olvidaste tu Contraseña?</label>
                        </div>
                        <a href="/RegistroAprendiz"
                            className="text-s text-indigo-700 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Registrarme</a>
                    </div>
                    <button onClick={() => alert("hello")} type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</button>
                </form>
            </div>
        </div>
    );
}
export {LoginForm}
