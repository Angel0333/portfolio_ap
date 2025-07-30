import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import miFoto from '../assets/miFoto.png'
function Home() {

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <section className="bg-white px-6 pt-20 pb-24 ">
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
            <div className="absolute w-[300px] h-[300px] rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>

            {/* Foto */}
            <img
              src={miFoto}
              alt="Ángel Pastrana"
              className="w-64 h-64 rounded-full object-cover shadow-lg z-10 transition-all duration-300 transform hover:scale-110"
            />
          </div>


        </div>
      </section>
  
      <Footer className="bg-blue-950 text-white sticky bottom-0 py-4 px-6 shadow-md w-full" />

   

    </div>
  )
}

export default Home