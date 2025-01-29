import { Link, Outlet } from "react-router";

function Layout() {
    return (
        <>
            <header className="bg-gradient-to-r from-indigo-800 via-purple-800 to-black text-white p-8">
                <h1 className="text-4xl font-extrabold tracking-wide text-center uppercase text-shadow-lg">
                    Persona Compendium
                </h1>
            </header>

            <nav className="bg-gray-900 text-gray-200 flex justify-center space-x-6 py-4">
                <Link
                    to={"/"}
                    className="text-lg font-semibold px-6 py-2 rounded-xl hover:bg-indigo-700 hover:text-white transition-all duration-300"
                >
                    Home
                </Link>
                <Link
                    to={"/personas"}
                    className="text-lg font-semibold px-6 py-2 rounded-xl hover:bg-indigo-700 hover:text-white transition-all duration-300"
                >
                    Personas
                </Link>
                <Link
                    to={"/personas/create"}
                    className="text-lg font-semibold px-6 py-2 rounded-xl hover:bg-indigo-700 hover:text-white transition-all duration-300"
                >
                    Create
                </Link>
            </nav>

            <main className="bg-gradient-to-b from-black via-gray-900 to-black text-gray-100 p-8 min-h-screen">
                <div className="relative">
                    <div className="absolute top-0 left-0 w-24 h-24 bg-indigo-700 rounded-full blur-lg opacity-20 animate-pulse"></div>
                    <div className="absolute bottom-0 right-0 w-24 h-24 bg-purple-700 rounded-full blur-lg opacity-20 animate-pulse"></div>
                    <div className="absolute top-1/4 right-10 w-32 h-32 bg-gradient-to-r from-indigo-900 via-purple-900 to-black rounded-full blur-3xl opacity-15 animate-pulse"></div>
                </div>
                <Outlet />
            </main>
        </>
    );
}

export default Layout;
