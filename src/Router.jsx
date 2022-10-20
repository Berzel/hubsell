import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./Pages/Home"
import PageOne from "./Pages/PageOne"
import PageTwo from "./Pages/PageTwo"

export default function Router() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '/page-one',
            element: <PageOne />
        },
        {
            path: '/page-two',
            element: <PageTwo />
        }
    ])

    return (
        <RouterProvider router={router} />
    )
}