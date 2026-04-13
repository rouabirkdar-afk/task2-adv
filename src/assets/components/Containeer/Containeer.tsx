import './Containeer.css'
interface ContaineerPrprs{
    content: string;
}
const Containeer = ({content}:ContaineerPrprs) => {
    return (
        <div>
            <p className='content'>{content}</p>
        </div>
    )
}

export default Containeer
