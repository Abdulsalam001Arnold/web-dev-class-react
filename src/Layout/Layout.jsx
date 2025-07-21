import Navbar from "../components/navbar"
import { Footer } from "../components/Footer"

export const Layout = ({children}) => {

    return(
        <main className="w-full flex flex-col">
            <Navbar/>
            <div className="w-full">
                {children}
            </div>
            <Footer/>
        </main>
    )
}