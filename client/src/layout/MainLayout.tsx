import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { Outlet } from "react-router-dom"


const MainLayout = () => {
  return (
    <>
        <header className="sticky top-0 z-50">
            <Navbar/>
        </header>

        <div className="flex-1">
            <Outlet/>
        </div>

        <footer>
            <Footer/>
        </footer>
      </>
  )
}

export default MainLayout