import { useState } from "react";
import logo from '../assets/logo.png'
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 w-full bg-blue-950  shadow-md  z-50">
        <div className="w-full px-6 flex justify-between items-center h-20 ">
          {/* Logo */}
          <a href="#">
            <img src={logo} alt="Logo" className="transition-all duration-300 transform hover:scale-125 h-12 w-12 rounded-full object-cover " />
          </a>

          {/* Botón hamburguesa */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-amber-50 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Links en desktop */}
          <div className="hidden md:flex space-x-6">
            <a href="#inicio" className="text-amber-50 hover:text-blue-600 transition-all duration-300 transform hover:scale-110">
              Inicio
            </a>
            <a href="#servicios" className="text-amber-50 hover:text-blue-600 transition-all duration-300 transform hover:scale-110">
              Servicios
            </a>
            <a href="#habilidades" className="text-amber-50 hover:text-blue-600 transition-all duration-300 transform hover:scale-110">
              Habilidades
            </a>
            <a href="#Contacto" className="text-amber-50 hover:text-blue-600 transition-all duration-300 transform hover:scale-110">
              Contacto
            </a>
          </div>
        </div>

        {/* Menú móvil */}
        {isOpen && (
          <div className="md:hidden px-4 pb-4 space-y-2  bg-blue-950  shadow">
            <a href="#inicio" className="block text-amber-50 hover:text-blue-600">
              Inicio
            </a>
            <a href="#servicios" className="block text-amber-50 hover:text-blue-600">
              Sobre mí
            </a>
            <a href="#habilidades" className="block text-amber-50 hover:text-blue-600">
              Habilidades
            </a>
            <a href="#Contacto" className="block text-amber-50 hover:text-blue-600">
              Contacto
            </a>
          </div>
        )}
      </nav>

    </>
  )
}

export default Navbar