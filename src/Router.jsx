import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ErrorPage from "./Pages/ErrorPage"
import Home from "./Pages/Home"
import PageOne from "./Pages/PageOne"
import PageTwo from "./Pages/PageTwo"

export default function Router() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />,
            errorElement: <ErrorPage />
        },
        {
            path: '/pages/1',
            element: <PageOne />
        },
        {
            path: '/pages/2',
            element: <PageTwo />
        }
    ])

    return (
        <RouterProvider router={router} />
    )
}