import { useState } from 'react';
import CardStayle from "../CardStayle/CardStayle";
import './Slider.css';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const SliderSection = () => {
    const data = [
        { id: 1, image: "./assets/img/mask1.png", title: "David K", stars: "./assets/img/stars.png", disc: "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment." },
        { id: 2, image: "./assets/img/mask2.png", title: "Emily L", stars: "./assets/img/stars.png", disc: "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers." },
        { id: 3, image: "./assets/img/mask3.png", title: "Jennifer B", stars: "./assets/img/stars.png", disc: "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!" },
        { id: 4, image: "./assets/img/mask1.png", title: "David K", stars: "./assets/img/stars.png", disc: "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment." },
        { id: 5, image: "./assets/img/mask2.png", title: "Emily L", stars: "./assets/img/stars.png", disc: "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers." },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);


    const nextSlide = () => {
        const isMobile = window.innerWidth <= 992;
        const limit = isMobile ? data.length - 1 : data.length - 3;

        if (currentIndex < limit) {
            setCurrentIndex(prev => prev + 1);
        } else {
            setCurrentIndex(0);
        }
    };

    const prevSlide = () => {
        const isMobile = window.innerWidth <= 992;
        const limit = isMobile ? data.length - 1 : data.length - 3;

        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        } else {
            setCurrentIndex(limit);
        }
    };


    const movePercent = window.innerWidth <= 992 ? 100 : 33.3333;

    return (
        <div className="slider-container">
            <div className="slider-wrapper">
                <div
                    className="slider-content"
                    style={{ transform: `translateX(-${currentIndex * movePercent}%)` }}
                >
                    {data.map((item) => (
                        <div className="card-item" key={item.id}>
                            <CardStayle
                                title={item.title}
                                disc={item.disc}
                                image={item.image}
                                stars={item.stars}
                                isSlider={true}
                            />
                        </div>
                    ))}
                </div>
            </div>


            <div className="slider-btns-container">
                <button className="slider-btn prev" onClick={prevSlide}>
                    <FaArrowLeft size={20} />
                </button>
                <button className="slider-btn next" onClick={nextSlide}>
                    <FaArrowRight size={20} />
                </button>
            </div>
        </div>
    );
};

export default SliderSection;