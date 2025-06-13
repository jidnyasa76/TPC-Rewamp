import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from './ScrollToTop.js'
import ScrollToTopButton from "./components/ScrollToTopButton";

function Layout(){
    return(
        <>
        <ScrollToTop />
        <Navbar/>
        <Outlet/>
        <Footer/>
        <ScrollToTopButton />
        </>
    )
}
export default Layout;