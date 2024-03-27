function RegistrationFormUser() {
  return (
    <div className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6 text-center text-white">
          Datos del aprendiz
        </h1>
        <form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
          <div className="mb-4">
            <label
              className="block text-teal-800 text-sm font-bold mb-2 text-start"
              htmlFor="name"
            >
              Nombres
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-500 invalid:border-pink-600 invalid:border-2"
              type="text"
              id="name"
              name="name"
              placeholder="Juan"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-teal-800 text-sm font-bold mb-2 text-start"
              htmlFor="name"
            >
              Apellidos
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-500 invalid:border-pink-600 invalid:border-2"
              type="text"
              id="name"
              name="name"
              placeholder="Gonzalez"
              required
            />
          </div>

          <div className="max-w-2xl mx-auto">
            <select
              id="countries"
              required
              className="bg-gray-50 border mb-2 border-gray-300 text-gray-900 text-s rounded-lg focus:ring-amber-500 focus:border-amber-500 block w-full p-2.5 dark:bg-white dark:border-gray-300 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-amber-500 dark:focus:border-amber-50 invalid:border-red-500 invalid:border-2"            >
              <option selected>Tipo de documento</option>
              <option value="CC">Cedula de ciudadania</option>
              <option value="CE">Cedula de extranjeria</option>
              <option value="TI">Tarjeta de identidad</option>
              <option value="PT">Permiso por proteccion temporal</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block text-teal-800 text-sm font-bold mb-2 text-start"
              htmlFor="name"
            >
             Numero de documento
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-500 invalid:border-pink-600 invalid:border-2"
              type="text"
              id="name"
              name="name"
              placeholder="1020304050 "
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-teal-800 text-sm font-bold mb-2 text-start"
              htmlFor="name"
            >
             Numero de ficha
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-500 invalid:border-pink-600 invalid:border-2"
              type="text"
              id="name"
              name="name"
              placeholder="2454434 "
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 mt-4 text-start"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-500 invalid:border-pink-600 invalid:border-2"
              type="email"
              id="email"
              name="email"
              placeholder="john@example.com"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-start"
              htmlFor="password"
            >
              Contraseña
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 invalid:border-pink-600 invalid:border-2"
              type="password"
              id="password"
              name="password"
              placeholder="********"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-start"
              htmlFor="confirm-password"
            >
              Confirma tu contraseña
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 invalid:border-pink-600 invalid:border-2"
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeholder="********"
              required
            />
          </div>
          <button
            className="w-full bg-amber-500 text-white text-s font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
            type="submit"
          >
            Continuar
          </button>
        </form>
      </div>
    </div>
  );
}

export { RegistrationFormUser };
