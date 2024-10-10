import React, {useState, useEffect} from "react";
import LeftBracket from "../Brackets/LeftBracket";
import RightBracket from "../Brackets/RightBracket";
import Photo from './PhotoTopNews.png'
import './TopNewsBlock.css'


const TopNewsBlock: React.FC = () =>{
    const data = [
        {
            id: 1,
            category: "News",   
            title: "CLOSED BETA TEST PEEXI PUNK",
            description: "We are pleased to announce the start of the closed beta test of Peexi Punk. And today we will tell you what awaits you",
            date: "05 September 2024"
        }
    ];

    const slides = [
        Photo,
        Photo,
        Photo
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [progress, setProgress] = useState(0);

    const slideDuration = 3000; 


    const nextSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === slides.length - 1 ? 0 : prevSlide + 1
        );
        setProgress(0); 
    };

 
    useEffect(() => {
        const progressInterval = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 100) {
                    nextSlide(); 
                    return 0;
                }
                return prevProgress + (100 / (slideDuration / 100)); 
            });
        }, 100); 

        return () => clearInterval(progressInterval); 
    }, [currentSlide]);

    return (
        <div className="TopNewsBlock">
            <div className="left-news">
                <div className="category">
                    <LeftBracket/>
                        <span className="top-news-category">{data[0].category}</span>
                    <RightBracket/>
                </div>
                <h2 className='top-news-title'>{data[0].title}</h2>
                <p className='top-news-description'>{data[0].description}</p>
                <p className='top-news-date'>{data[0].date}</p>
            </div>

            <div className="right-news">
                 <div className="slider-container">
                    <div className="slide" style={{ backgroundImage: `url(${slides[currentSlide]})` }}> </div>                  
                    <div className="slider-indicators">
                        {slides.map((_, index) => (
                            <span
                                key={index}
                                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                            >
                                {index === currentSlide && (
                                    <span
                                        className="indicator-fill"
                                        style={{ width: `${progress}%` }}
                                    ></span>
                                )}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopNewsBlock;