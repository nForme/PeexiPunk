import Photo from "./PhotoTopNews.png"
import React from "react";
import "./newsList.scss"

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
return (
    
    <div className="news-list">
        <Filter/>
    {newsData.map((news, index) => (
        <div key={news.id} className="news-item">
        <div className="news-category">
            <LeftBracket/>
            <span className={index === 0 ? "first-category" : "other-category"}>
            {news.category}
            </span>
            <RightBracket/>
        </div>
        <div className="news-content">
            <h2 className="news-title">{news.title}</h2>
            <p className="news-description">{news.description}</p>
            <p className="news-date">{news.date}</p>
        </div>
        <div className="news-image">
            <img
            src={news.imageUrl}
            alt={news.title}
            className={index === 0 ? "first-image" : ""}
            />
        </div>
        </div>
    ))}
    </div>
    );
};

export default NewsList;