import Header from "../components/Header";
import WhoIsCervitechFor from "../components/WhoIsCervitechFor";
import AppsPic from "../components/AppsPic"
import HowCervitechHelps from "../components/HowCervitechHelps";

function Home(){
    return(
        <div className="home">
            <Header/>
            <WhoIsCervitechFor/>
            <HowCervitechHelps/>
            <AppsPic/>
        </div>
    )
}
export default Home;