import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                
                <div className="space-x-4 ml-auto">
                    <a href="/" className="text-white hover:bg-blue-700 px-3 py-2 rounded">
                        Home
                    </a>
                    <a href="/about" className="text-white hover:bg-blue-700 px-3 py-2 rounded">
                        About
                    </a>
                    <a href="/services" className="text-white hover:bg-blue-700 px-3 py-2 rounded">
                        Sign Up
                    </a>
                    <a href="/contact" className="text-white hover:bg-blue-700 px-3 py-2 rounded">
                        Log In
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;