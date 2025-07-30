import { FaLinkedin, FaGithub, FaWhatsapp, FaInstagram } from "react-icons/fa"
import logo from '../assets/logo.png'
function Footer() {

  return (
   
      <footer className="bg-blue-950 text-white w-full py-4 px-6">
        <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* izquierda */}
          <div className="mb-2 md:mb-0">
            <p className="text-sm">&copy; 2025 Angel Pastrana</p>
          </div>

          {/* centro */}
          <div className="mb-2 md:mb-0">
            <a href="#">
              <img src={logo} alt="Logo" className="transition-all duration-300 transform hover:scale-125 h-12 w-12 rounded-full object-cover " />
            </a>
          </div>

          {/* derecha */}
          <div className="flex space-x-4 text-xl">
            <a href="https://www.linkedin.com/in/angel-pastrana-b7856223b/" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 transform hover:scale-125 hover:text-blue-400 ">
              <FaLinkedin />
            </a>

            <a href="https://github.com/Angel0333" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 transform hover:scale-125 hover:text-gray-400" >
              <FaGithub />
            </a>

            <a href="https://wa.me/+5493812060571" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 transform hover:scale-125 hover:text-green-400">
              <FaWhatsapp />
            </a>

            <a href="https://www.instagram.com/angelpastrana_15?igsh=bTV5bWY5cTBsbnh1" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 transform hover:scale-125 hover:text-pink-400">
              <FaInstagram />
            </a>

          </div>
        </div>

      </footer>
    
  )
}

export default Footer