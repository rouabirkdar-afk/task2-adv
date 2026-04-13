
import type { ReactNode } from 'react';
import './Hero.css'
interface HeroProps {
    wellcome?: string;
    title: string;
    title2: string;
    discription: string;
    image: string;
    children ?: ReactNode ;

}

const Hero = ({image, wellcome, title, title2, discription, children  }: HeroProps) => {
    return (
        <div className="hero-main-sec">
            <img className="hero-image" src={image} />
            <div className="hero">
                <strong className="wellcom-text">{wellcome}</strong>
                <h1 className="hero-title">{title}
                    <span className="hero-title">{title2}</span>
                </h1>
                <h4 className="hero-discription">{discription}</h4>
                <div>{children}</div>
                </div>
                
                
        </div>
        
    )
    
}


export default Hero

