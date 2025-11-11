import Header from "../components/Header";
import WhoIsCervitechFor from "../components/WhoIsCervitechFor";
import AppsPic from "../components/AppsPic"
import HowCervitechHelps from "../components/HowCervitechHelps";
import UpArrow from "../assets/lets-icons_up-light.png"
import "../styles/Home.css"
function Home(){
    const scrollToTop = () => {
    const headerSection = document.getElementById("header");
    if (headerSection) {
      headerSection.scrollIntoView({ behavior: "smooth" });
    }
  };
    return(
        <div className="home">
            <Header/>
            <WhoIsCervitechFor/>
            <HowCervitechHelps/>
            <AppsPic/>
            <img className="up-arrow" src={UpArrow} alt="Upward arrow" onClick={scrollToTop}/>
        </div>
    )
}
export default Home;