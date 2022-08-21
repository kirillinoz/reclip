import { useState } from 'react'

import { NavLink } from 'react-router-dom'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="relative bg-white">
            <div className="px-3 py-6 sm:p-6">
                <div className="flex justify-between items-center">
                    <div className="flex">
                        <img
                            className="w-8 h-8 mr-2"
                            src="/icons/logo.svg"
                            alt="Reclipify"
                        />
                        <p className="font-pacifico text-indigo-500 text-2xl">
                            Reclip
                        </p>
                    </div>
                    <div>
                        <button
                            className="p-2 rounded-lg bg-indigo-500 sm:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <img
                                className="w-8 h-8"
                                src="/icons/menu.svg"
                                alt="Menu"
                            />
                        </button>
                    </div>
                    <div className="hidden sm:flex">
                        <NavLink
                            end
                            to="/"
                            className={({ isActive }) =>
                                (isActive && 'text-indigo-500') +
                                ' flex px-2 sm:px-6 font-bold items-center h-14 mr-5 border-gray-600 hover:bg-gray-100 rounded-lg'
                            }
                            //exact-active-className="text-indigo-500"
                        >
                            Home
                        </NavLink>

                        <NavLink
                            end
                            to="editor"
                            className={({ isActive }) =>
                                (isActive
                                    ? 'text-indigo-500'
                                    : 'bg-indigo-500 text-white hover:bg-indigo-400') +
                                ' flex px-2 sm:px-6 font-bold items-center h-14 border-gray-600 hover:bg-gray-100 rounded-lg'
                            }
                        >
                            Editor
                        </NavLink>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="flex flex-col mt-6 sm:hidden">
                        <NavLink
                            end
                            to=""
                            className={({ isActive }) =>
                                (isActive && 'text-indigo-500') +
                                ' flex px-2 font-bold items-center h-14 border-gray-600 hover:bg-gray-100 rounded-lg'
                            }
                            onClick={() => setIsMenuOpen(false)}
                            //exact-active-className="text-indigo-500"
                        >
                            Home
                        </NavLink>

                        <NavLink
                            end
                            to="/editor"
                            className={({ isActive }) =>
                                (isActive
                                    ? 'text-indigo-500'
                                    : 'bg-indigo-500 text-white hover:bg-indigo-400') +
                                ' flex px-2 font-bold items-center h-14 mt-2 border-gray-600 hover:bg-gray-100 rounded-lg'
                            }
                            onClick={() => setIsMenuOpen(false)}
                            //exact-active-className="text-indigo-500"
                        >
                            Editor
                        </NavLink>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header
