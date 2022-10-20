import { NavLink } from "react-router-dom";

export default function App({children}) {

    return (
        <div className="container mx-auto">
            <div className="flex items-center space-x-16 py-4 border-b">
                <NavLink to={'/'} className="font-semibold flex items-center space-x-1">
                    <span className="h-8 w-8 rounded-full bg-sky-500 block"></span>
                    <span>Dashboard</span>
                </NavLink>
                
                <nav className="flex space-x-4">
                    <NavLink to={'/page-one'} className={({isActive}) => `text-sky-500 hover:underline ${isActive ? 'font-semibold':''}`}>
                        Page 1
                    </NavLink>
                    <NavLink to={'/page-two'} className={({isActive}) => `text-sky-500 hover:underline ${isActive ? 'font-semibold':''}`}>
                        Page 2
                    </NavLink>
                </nav>
            </div>

            <div className="mt-4">
                {children}
            </div>
        </div>
    )
}