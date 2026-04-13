import './Navigate.css'
import { Firsttitle, Discriptios } from "../style"
import Navigate from './Navigate'
const Navigatesec = () => {
    return (
        <div className='navi-main'>
            <Firsttitle>Navigate through our Pages</Firsttitle>
            <Discriptios>Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school</Discriptios>
            <div className='navi-style'>
            <Navigate title='About Us' discr='Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.'/>
            <Navigate title='Academics' discr='Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.'/>
            <Navigate title='Student Life' discr='Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.'/>
            <Navigate title='Admissions' discr='Learn about our Enrollment Process and how to secure your childs place at Little Learners Academy. Find information about our admission requirements, application deadlines , and available spaces'/>
        </div>
        </div>
    )
}

export default Navigatesec
