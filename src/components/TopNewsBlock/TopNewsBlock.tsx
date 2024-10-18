import React, { useState, useEffect } from "react";
import LeftBracket from "../Brackets/LeftBracket";
import RightBracket from "../Brackets/RightBracket";
import Photo from "./PhotoTopNews.png";
import Photo2 from "./image 251.png";
import Photo3 from "./image 253.png";
import "./TopNewsBlock.scss";

const TopNewsBlock: React.FC = () => {
  const data = [
    {
      id: 1,
      category: "News",
      title: "CLOSED BETA TEST PEEXI PUNK",
      description:
        "We are pleased to announce the start of the closed beta test of Peexi Punk. And today we will tell you what awaits you",
      date: "05 September 2024",
    },
  ];

  const slides = [Photo, Photo2, Photo3];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const slideDuration = 5000; // 5 секунд
    const intervalDuration = slideDuration / 100; // 50ms

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) return prev + 1;
        return 0;
      });
    }, intervalDuration);

    if (progress === 100) {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }

    return () => clearInterval(interval);
  }, [progress, slides.length]);

  useEffect(() => {
    setProgress(0);
  }, [currentSlide]);

  const handleIndicatorClick = (index: nunmber) => {
    setCurrentSlide(index);
  };

  return (
    <div className="top-news-block">
      <div className="left-news">
        <div className="top-news-content">
          <div className="category">
            <LeftBracket />
            <span className="top-news-category">{data[0].category}</span>
            <RightBracket />
          </div>
          <h2 className="top-news-title">{data[0].title}</h2>
          <p className="top-news-description">{data[0].description}</p>
        </div>
        <div className="top-news-date-container">
          <p className="top-news-date">{data[0].date}</p>
        </div>
      </div>

      <div className="right-news">
        <div className="slider-container">
          <img className="slide" src={slides[currentSlide]} alt="" />
          <div className="slider-indicators">
            {slides.map((_, index) => {
              let fillWidth = 0;
              if (index < currentSlide) {
                fillWidth = 100;
              } else if (index === currentSlide) {
                fillWidth = progress;
              } else {
                fillWidth = 0;
              }
              return (
                <span
                  key={index}
                  className="indicator"
                  onClick={() => handleIndicatorClick(index)}
                >
                  <span
                    className="indicator-fill"
                    style={{ width: `${fillWidth}%` }}
                  ></span>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNewsBlock;
