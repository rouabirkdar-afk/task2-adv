import './Navigate.css'
import { RiArrowRightLine } from "react-icons/ri"
interface NavigateProps {
    title: string;
    discr: string;
}

const Navigate = ({ title, discr }: NavigateProps) => {
    return (
        <div className='navi-card'>
            <h1>{title}</h1>
            <div className='dash'>
                <div className='circle'></div>
                <p className='line'>______</p>
                <p className='line'>______</p>
                <p className='line'>______</p>
                <p className='line'>______</p>
                <p className='line'>______</p>
                <p className='line'>______</p>
                <div className='circle'></div>

            </div>
            <p>{discr}</p>
            <button>Learn More 
                <RiArrowRightLine/>
            </button>
        </div>
    )
}

export default Navigate
