import type { IconType } from 'react-icons';
import './CardStayle.css'
interface CardStayleProps {
    image?: string;
    Icon?: IconType;
    title: string;
    stars?:string;
    disc: string;
    isSlider?: boolean;

}

const CardStayle = ({image, Icon, title, stars,disc,isSlider }: CardStayleProps) => {
    return (
        <div className={`card-po ${isSlider ? 'slid-card' : 'normal-card'}`}>
            {Icon && !isSlider && (
                <span className='icon-card'>
                    <Icon />
                </span>
            )}
            <div className={`card-style ${isSlider ? 'slid-style' : ''}`}>
                {isSlider && image && <img className='mask' src={image} alt="img" />}
                <h3 className='card-tit'>{title}</h3>
                {isSlider && stars && <img className='stars' src={stars} alt="stars" />}
                <p className='card-des'>{disc}</p>
            </div>
        </div>
    )
}

export default CardStayle
