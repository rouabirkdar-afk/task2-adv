import { useState } from 'react';
import './Faq.css'
import { CgMathPlus, CgMathMinus } from "react-icons/cg";
interface FaqCompProps {
    qustion: string;
    answer: string;
}
const FaqComp = ({ qustion, answer }: FaqCompProps) => {
    const [open, setOpen] = useState<boolean>(false)
    const Toggle = () => {
        setOpen(!open);
    };
    return (
        <div className={`faq-main ${ open? "active":""}`}>
            <div className='dis-faq'>
                <h2 className={`qustion ${ open? "active":""}`}>{qustion}</h2>
                <button className='btn-faq' onClick={Toggle} >
                    { open ? <CgMathMinus  size={20} /> : <CgMathPlus size={20} />}
        </button>
                
            </div>
            {open && (
                <div>
                    <p className={`ans ${open ? "active" : ""}`}>{answer}</p>
                </div>
            )}


        </div >
    )
}

export default FaqComp
