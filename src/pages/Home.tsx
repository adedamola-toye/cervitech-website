import Header from "../components/Header";
import WhoIsCervitechFor from "../components/WhoIsCervitechFor";
//import AppsPic from "../components/AppsPic"
import HowCervitechHelps from "../components/HowCervitechHelps";
import UpArrow from "../assets/lets-icons_up-light.png"
import "../styles/Home.css"
import GetInTouch from "../components/GetInTouch";
import LaunchCtaSection from "../components/LaunchCtaSection";
import Faqs from "../components/Faqs";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";
function Home(){
    const scrollToTop = () => {
    const headerSection = document.getElementById("header");
    if (headerSection) {
      headerSection.scrollIntoView({ behavior: "smooth" });
    }
  };
    return(
        <div className="home">
          <div id="header">
             <Header/>
          </div>
          
            <WhoIsCervitechFor/>

            <div id="how-it-works">
              <HowCervitechHelps/>
            </div>

            <Reviews/>
            
            {/* <AppsPic/> */}

            <div id="faqs">
              <Faqs/>
            </div>
            <GetInTouch/>
            <LaunchCtaSection/>
            <Footer/>
            <img className="up-arrow" src={UpArrow} alt="Upward arrow" onClick={scrollToTop}/>
        </div>
    )
}
export default Home;