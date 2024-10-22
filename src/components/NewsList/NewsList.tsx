import Photo from "./PhotoTopNews.png";
import React, { useState } from "react";
import "./NewsList.scss";

import Filter from "../Filter/Filter";
import LeftBracket from "../Brackets/LeftBracket";
import RightBracket from "../Brackets/RightBracket";

const newsData = [
  {
    id: 1,
    category: "News",
    title: "IMMERSIVE EXPERIENCE DESIGN: EXPERT INSIGHTS AND TECHNIQUES",
    description:
      "How can designers draw people into your product's virtual, digital, or physical world? Take UX to a new level with these expert perspectives on immersive experience design.",
    date: "14 April 2024",
    imageUrl: Photo,
  },

  {
    id: 2,
    category: "Game",
    title: "IMMERSIVE EXPERIENCE DESIGN: EXPERT INSIGHTS AND TECHNIQUES",
    description:
      "How can designers draw people into your product's virtual, digital, or physical world? Take UX to a new level with these expert perspectives on immersive experience design.",
    date: "14 April 2024",
    imageUrl: Photo,
  },

  {
    id: 3,
    category: "News",
    title: "IMMERSIVE EXPERIENCE DESIGN: EXPERT INSIGHTS AND TECHNIQUES",
    description:
      "How can designers draw people into your product's virtual, digital, or physical world? Take UX to a new level with these expert perspectives on immersive experience design.",
    date: "14 April 2024",
    imageUrl: Photo,
  },

  {
    id: 4,
    category: "Game",
    title: "IMMERSIVE EXPERIENCE DESIGN: EXPERT INSIGHTS AND TECHNIQUES",
    description:
      "How can designers draw people into your product's virtual, digital, or physical world? Take UX to a new level with these expert perspectives on immersive experience design.",
    date: "14 April 2024",
    imageUrl: Photo,
  },

  {
    id: 5,
    category: "News",
    title: "IMMERSIVE EXPERIENCE DESIGN: EXPERT INSIGHTS AND TECHNIQUES",
    description:
      "How can designers draw people into your product's virtual, digital, or physical world? Take UX to a new level with these expert perspectives on immersive experience design.",
    date: "14 April 2024",
    imageUrl: Photo,
  },
  {
    id: 6,
    category: "Game",
    title: "IMMERSIVE EXPERIENCE DESIGN: EXPERT INSIGHTS AND TECHNIQUES",
    description:
      "How can designers draw people into your product's virtual, digital, or physical world? Take UX to a new level with these expert perspectives on immersive experience design.",
    date: "14 April 2024",
    imageUrl: Photo,
  },
];

const NewsList: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const handleFilterChange = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredNews =
    selectedCategory === "All"
      ? newsData
      : newsData.filter((news) => news.category === selectedCategory);
  return (
    <div className="news-list">
      <Filter onFilterChange={handleFilterChange} />
      {filteredNews.map((news) => (
        <div key={news.id} className="news-item">
          <div className="news-text">
            <div className="news-category-container">
              <LeftBracket />
              <span className="news-category">{news.category}</span>
              <RightBracket />
            </div>
            <div className="news-content">
              <h2 className="news-title">{news.title}</h2>
              <p className="news-description">{news.description}</p>
              <p className="news-date">{news.date}</p>
            </div>
          </div>

          <div className="news-image">
            <div className="news-image-container">
              <img src={news.imageUrl} alt={news.title} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
