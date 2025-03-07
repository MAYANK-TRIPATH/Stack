import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center px-4 md:px-6 py-4 bg-slate-200 shadow-md border-b border-gray-300 md:border-none">
      
      <div className="ml-2 md:ml-4">
        <img
          src="/src/assets/novo-logo.png"
          alt="Logo"
          className="h-8 md:h-16 w-auto"
        />
      </div>


      <div className="md:hidden flex items-center gap-4">
        <button
          onClick={toggleMenu}
          className="text-gray-500 hover:text-blue-600 focus:outline-none"
          aria-label="Toggle menu"
        >

          {!isOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          ) : (

            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>


      <div
        className={`fixed md:relative top-0 right-0 h-full md:h-auto w-64 md:w-auto bg-slate-200 md:bg-transparent shadow-md md:shadow-none transform ${isOpen ? "translate-x-0" : "translate-x-full"
          } md:translate-x-0 transition-transform duration-300 ease-in-out flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 p-6 md:p-0`}
      >
        <a href="/" className="text-gray-500 hover:text-blue-600 text-md">
          HOME
        </a>
        <a href="/about" className="text-gray-500 hover:text-blue-600 text-md">
          WORK
        </a>
        <a href="/services" className="text-gray-500 hover:text-blue-600 text-md">
          SERVICES
        </a>
        <a href="/about-us" className="text-gray-500 hover:text-blue-600 text-md">
          ABOUT US
        </a>
        <a href="/careers" className="text-gray-500 hover:text-blue-600 text-md">
          CAREERS
        </a>
        <a href="/contact" className="text-gray-500 hover:text-blue-600 text-md">
          CONTACT US
        </a>
      </div>
    </nav>
  );
};

export default Navbar;