import QuickTestPic from "../assets/App pictures/Quick test.png"
import ChartPic from "../assets/App pictures/Chart.png"
import SetGoalPic from "../assets/App pictures/Set goal.png"
import HomepageAvRatingPic from "../assets/App pictures/Homepage (Avg. Rating).png"
import ExercisePic from "../assets/App pictures/Exercise.png"
import YourGoals from "../assets/App pictures/Your goals.png"
export default function AppsPic(){
    return(
       <div>
            <img src={QuickTestPic}/>
            <img src={ChartPic}/>
            <img src={SetGoalPic}/>
            <img src={HomepageAvRatingPic}/>
            <img src={ExercisePic}/>
            <img src={YourGoals}/>
       </div>
    )
}