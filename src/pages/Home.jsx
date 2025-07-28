import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function Home() {

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">

        <p> hola soy el home</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus alias amet velit veniam ipsum aliquam earum cum ab molestias perferendis inventore nesciunt voluptas recusandae, laudantium ipsa praesentium est dolorum blanditiis.</p>
      </div>

      <Footer />
    </div>
  )
}

export default Home