import { useEffect, useState } from "react";
import "../ImageSlider.css";

import img1 from "../assets/image/1.jpg";
import img2 from "../assets/image/2.jpg";
// import img3 from "../assets/image/3.jpg";
// import img4 from "../assets/image/4.jpg";
import img6 from "../assets/image/6.jpg";
import img7 from "../assets/image/7.jpg";

const images = [
  img1,
  img2,
  // img3,
  // img4,
  img6,
  img7,
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="slider">
      {images.map((img, index) => (
        <div
          key={index}
          className={`slide ${index === current ? "active" : ""}`}
        >
          <img src={img} alt={`Slide ${index + 1}`} />
        </div>
      ))}

      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>

      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>

      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={current === index ? "dot active-dot" : "dot"}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}