import "../styles/StarRating.css"

interface StarRatingProps {
  stars: number; // define stars as a number
}

function StarRating({ stars }: StarRatingProps) {
  const totalStars = 5; // total stars possible
  return (
    <div className="stars">
      {[...Array(totalStars)].map((_, index) => (
        <span key={index} className={index < stars ? "filled" : "empty"}>★</span>
      ))}
    </div>
  );
}


export default StarRating