import "../styles/AppsPic.css";
import QuickTestPic from "../assets/App pictures/Quick test.png";
import ChartPic from "../assets/App pictures/Chart.png";
import SetGoalPic from "../assets/App pictures/Set goal.png";
import HomepageAvRatingPic from "../assets/App pictures/Homepage (Avg. Rating).png";
import ExercisePic from "../assets/App pictures/Exercise.png";
import YourGoals from "../assets/App pictures/Your goals.png";

export default function AppsPic() {
  return (
    <div className="app-pics">
      <div className="column">
        <img src={QuickTestPic} alt="Quick Test" />
        <img src={HomepageAvRatingPic} alt="Homepage Avg Rating" />
      </div>

      <div className="column">
        <img src={ChartPic} alt="Chart" />
        <img src={ExercisePic} alt="Exercise" />
      </div>

      <div className="column">
        <img src={SetGoalPic} alt="Set Goal" />
        <img src={YourGoals} alt="Your Goals" />
      </div>
    </div>
  );
}
