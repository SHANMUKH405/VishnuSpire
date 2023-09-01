import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/2.jpg"
import Hero2 from "../components/Hero2";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact (){
    return(
      <>
          <Navbar/>
          {/* to make hero component dynamic */}
          {/* passing the props */}
           <Hero2
            cNmame ="hero"
            heroImg1={AboutImg}
            title="Contact"
            btnClass="hide"
           />
           <ContactForm/>
           <Footer/>
      </>
    )
  
  }
  
  export default Contact;