import { Link } from "react-router-dom"
import "../styles/WaitlistButton.css"

function WaitlistButton({ className }: { className?: string }) {
  return (
    <Link to="/waitlist">
      <button className={`join-btn ${className || ""}`}>Join waitlist</button>
    </Link>
  );
}


export default WaitlistButton