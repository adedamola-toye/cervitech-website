import { useRef } from "react";
import UserCircle from "./UserCircle";
import StarRating from "./StarRating";
import "../styles/Reviews.css";

function Reviews() {
  const reviewsData = [
    {
      name: "Gloria Ada Uwada",
      review:
        "Since I downloaded this app last month, I have learnt and corrected my neck position while using my phone. The exercises are easy to do. I recommend it for everyone.",
      stars: 5,
    },
    {
      name: "Aliyah Akodu",
      review:
        "This is a very useful App for correcting abnormal posture of the neck. Kudos to the developers.",
      stars: 5,
    },
    {
      name: "Jane Frances",
      review:
        "This app is really helpful, it has helped me improve on my exercises...🤗🤗",
      stars: 5,
    },
    {
      name: "Ife Dipe",
      review: "It is extremely helpful, my neck feels a lot better.",
      stars: 5,
    },
    {
      name: "Micheal Ogundero",
      review:
        "I have used it and to a large extent it kept me conscious of my neck posture.",
      stars: 4,
    },
    {
      name: "Sultan",
      review: "Very helpful, I don't have text-neck anymore.",
      stars: 5,
    },
    {
      name: "Doyinmola Afonja",
      review: "Extremely helpful. It is what I was looking for. Nice one.",
      stars: 5,
    },
    {
      name: "Rahman Akodu",
      review: "Excellent and effective.",
      stars: 5,
    },
    {
      name: "Grace Aluko",
      review: "It has been an amazing experience. 10/10",
      stars: 5,
    },
    {
      name: "Yosi Osibemekun",
      review: "Good experience on this app. I love it here.",
      stars: 5,
    },
    {
      name: "Stephen Abimbola Ogundero",
      review: "I've tried it out and it works well.",
      stars: 4,
    },
    {
      name: "Babatunde Akodu",
      review: "Perfect app for my neck posture.",
      stars: 5,
    },
    {
      name: "Kamoru Mustapha",
      review: "Wow. What a magical app.",
      stars: 5,
    },
  ];

  const containerRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = 400; // adjust for card width
      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="reviews-section">
      <div className="reviews-heading">
        <h1>
          Reviews <span>from Cervitech users</span>
        </h1>
        <p>Hear what other users have to say about their experience with Cervitech</p>
      </div>

      <div className="reviews-carousel-wrapper">
        <button className="scroll-btn left" onClick={() => scroll("left")}>
          ◀
        </button>
        <div className="reviews-cards" ref={containerRef}>
          {reviewsData.map((reviewObj, index) => (
            <div className="card" key={index}>
              <div className="reviewer-heading">
                <UserCircle name={reviewObj.name} />
                <div className="name-stars">
                  <p className="name">{reviewObj.name}</p>
                  <StarRating stars={reviewObj.stars} />
                </div>
              </div>
              <p className="review-text">{reviewObj.review}</p>
            </div>
          ))}
        </div>
        <button className="scroll-btn right" onClick={() => scroll("right")}>
          ▶
        </button>
      </div>
    </div>
  );
}

export default Reviews;
