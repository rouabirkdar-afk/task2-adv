import CardStayle from "../CardStayle/CardStayle"
import './Cards.css'
import {GiGraduateCap ,} from "react-icons/gi";
import { FaCrown } from "react-icons/fa";
import { TbFaceMaskFilled } from "react-icons/tb";
import { FaFlag } from "react-icons/fa6";
import { IoHelpBuoySharp } from "react-icons/io5";
import { IoPeople } from "react-icons/io5";
import FirstTitle from "../FirstTitle/FirstTitle";

const Cards = () => {
    return (
        <div className="main-cards">
            <FirstTitle title="Our Benefits" discription="With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future."/>
            <div className="cards-cs">
            <CardStayle Icon={GiGraduateCap} title="Holistic Learning Approach" disc="Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education." />
            <CardStayle Icon={FaCrown} title="Experienced Educators" disc="Our passionate and qualified teachers create a supportive and stimulating learning environment.
" />
            <CardStayle Icon={TbFaceMaskFilled} title="Nurturing Environment" disc="We prioritize safety and provide a warm and caring atmosphere for every child." />
            <CardStayle Icon={FaFlag} title="Play-Based Learning" disc="We believe in the power of play to foster creativity, problem-solving skills, and imagination." />
            <CardStayle Icon={IoHelpBuoySharp} title="Individualized Attention" disc="Our small class sizes enable personalized attention, catering to each child's unique needs." />
            <CardStayle Icon={IoPeople} title="Parent Involvement" disc="We foster a strong parent-school partnership to ensure seamless communication and collaboration." />
</div>
        </div>
    )
}

export default Cards
