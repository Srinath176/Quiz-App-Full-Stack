import { useLocation } from "react-router-dom"
import About from "../about/About"
import AnimatedSection from "../animations/AnimationHome"
import Categories from "../Categories/Categories"
import Footer from "../footer/Footer"
import Header from "../header/Header"
import Hero from "../hero/Hero"
import Navbar from "../navbar/Navbar"



const Home = () => {

    
    return (
        <div className="home">
            <Header />
            <Navbar/>
            <AnimatedSection>
                <Hero />
            </AnimatedSection>

            <AnimatedSection>
                <Categories/>
            </AnimatedSection>

            <AnimatedSection>
                <About/>
            </AnimatedSection>


            <Footer />


        </div>
    )
}

export default Home