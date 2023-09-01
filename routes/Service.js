import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/1.jpg"
import Hero2 from "../components/Hero2";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
function Service (){
    return(
      <>
     <Navbar/>
          {/* to make hero component dynamic */}
          {/* passing the props */}
           <Hero2
            cNmame ="hero"
            heroImg1={AboutImg}
            title="service"
            
            url="/"
            btnClass="hide"
           />
           <Trip/>
           <Footer/>
      </>
    )
  
  }
  
  export default Service;