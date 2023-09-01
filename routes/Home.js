import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";
import AboutImg from "../assets/Banner.png"
function Home (){
  return(
    <>
          <Navbar/>
          {/* to make hero component dynamic */}
          {/* passing the props */}
           <Hero
            cNmame ="hero"
            heroImg={AboutImg}
//             title="A NEW STARTUP
// COMPANY"
//             text="choose you favourite location"
            buttonText="Learn More"
            url="/about"
            btnClass="show"
           />

           <Destination/>

           <Trip/>

           <Footer/>

          {/* <h1>This is home</h1> */}

    </>
  )

}

export default Home;