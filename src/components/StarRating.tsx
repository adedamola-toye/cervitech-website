import "../styles/StarRating.css"

interface StarRatingProps {
  stars: number; //number of stars
}

function StarRating({ stars }: StarRatingProps) {
  const totalStars = 5; // maximum number of stars possible (5)
  return (
    <div className="stars">
      {[...Array(totalStars)].map((_, index) => (
        <span key={index} className={index < stars ? "filled" : "empty"}>★</span>
      ))}
    </div>
  );
}


export default StarRating