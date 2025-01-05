import React from 'react'

const Header = () => {
    return (
        <div>
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-xl font-bold text-gray-800">Landing Page</h1>
                    <nav>
                        <ul className="flex space-x-4">
                            <li><a href="#features" className="text-gray-600 hover:text-gray-800">Features</a></li>
                            <li><a href="#about" className="text-gray-600 hover:text-gray-800">About</a></li>
                            <li><a href="#contact" className="text-gray-600 hover:text-gray-800">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header