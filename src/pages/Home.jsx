import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import miFoto from '../assets/miFoto.png'
function Home() {

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <section className="bg-white px-6 pt-20 pb-24 overflow-x-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

          {/* Izquierda: Nombre + texto */}
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-4xl font-bold text-blue-950 mb-4">Hola, soy Ángel Pastrana</h1>
            <p className="text-gray-700 text-lg">
              Soy desarrollador full stack en formación, apasionado por la tecnología, el diseño web y la creación de soluciones digitales que impacten de forma positiva. Bienvenido/a a mi portfolio.
            </p>
          </div>

          {/* Derecha: Foto */}
          <div className="relative w-72 h-72 flex items-center justify-center">
            {/* Anillo giratorio */}
            <div className="absolute  w-72 h-72  rounded-full border-6 border-blue-500 border-t-transparent animate-spin [animation-duration:3s] "></div>

            {/* Foto */}
            <img
              src={miFoto}
              alt="Ángel Pastrana"
              className="w-64 h-64 rounded-full object-cover shadow-lg z-10 transition-all duration-300 transform hover:scale-110 active:scale-110"
            />
          </div>

          


        </div>
        {/* boton de descarga CV */}
          <div className="flex justify-center mt-10 pb-5">
            <a 
            href="/Angel_Daniel_Pastrana_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          
            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-300 hover:bg-blue-800 hover:scale-105 active:scale-105"
            >
              Descargar CV
            </a>

          </div>
      </section>
  
      <Footer />

   

    </div>
  )
}

export default Home