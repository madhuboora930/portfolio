import Sidebar from './components/layout/Sidebar'
import Footer from './components/layout/Footer'
import About from './components/sections/About'
import Work from './components/sections/Work'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <div className="lg:flex">
      <Sidebar />
      <main className="px-6 sm:px-10 lg:ml-[40%] lg:flex-1 lg:px-16 xl:ml-[33.333%]">
        <About />
        <Work />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
