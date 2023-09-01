import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/night.jpg"
import Hero2 from "../components/Hero2";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About (){
    return(
      <>
          <Navbar/>
          {/* to make hero component dynamic */}
          {/* passing the props */}
           <Hero2
            cNmame ="hero"
            heroImg1={AboutImg}
            title="About"
            btnClass="hide"
           />
           <AboutUs/>
           <Footer/>
      </>
    )
  
  }
  
  export default About;