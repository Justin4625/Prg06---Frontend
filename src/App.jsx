import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Layout.jsx";
import Home from "./Home.jsx";
import Persona from "./Persona.jsx";
import Personas from "./Personas.jsx";
import CreatePersona from "./CreatePersona.jsx";
import UpdatePersona from "./UpdatePersona.jsx";
import NotFound from "./NotFound.jsx";

const router = createBrowserRouter([{
    element: <Layout />,
    children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/personas",
            element: <Personas />
        },
        {
            path: "/personas/create",
            element: <CreatePersona />
        },
        {
            path: "/personas/:id",
            element: <Persona />
        },
        {
            path: "/personas/:id/edit",
            element: <UpdatePersona />
        },
        {
            path: "*",
            element: <NotFound />
        }
    ]
}]);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
