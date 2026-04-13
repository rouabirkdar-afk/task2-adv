import './FirstTitle.css'
interface FirstTitleProps{
    title : string;
    discription : string
}

const FirstTitle = ({title, discription}: FirstTitleProps) => {
    return (
        <div className='first'>
            <h1>{title}</h1>
            <p>{discription}</p>

        </div>
    )
}

export default FirstTitle
