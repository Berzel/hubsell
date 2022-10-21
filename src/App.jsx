import { NavLink } from "react-router-dom";

export default function App({children}) {

    const pages = [
        {
            to: '/page-one',
            label: 'Page One'
        },
        {
            to: '/page-two',
            label: 'Page Two'
        }
    ]

    return (
        <div className="container mx-auto">
            <div className="flex items-center space-x-16 py-4 border-b">
                <NavLink to={'/'} className="font-semibold flex items-center space-x-1">
                    <span className="h-8 w-8 rounded-full bg-sky-500 block"></span>
                    <span>Dashboard</span>
                </NavLink>
                
                <nav className="flex space-x-4">
                    {
                        pages.map(page => (
                            <NavLink to={page.to} className={({isActive}) => `text-sky-500 hover:underline ${isActive ? 'font-semibold':''}`}>
                                { page.label }
                            </NavLink>
                        ))
                    }
                </nav>
            </div>

            <div className="mt-4">
                {children}
            </div>
        </div>
    )
}