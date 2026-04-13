import FirstTitle from '../FirstTitle/FirstTitle'
import './Faq.css'

import FaqComp from './FaqComp'
const Faq = () => {
    return (
        <div className='faq-dis'>
            <FirstTitle title='Frequently Asked Questions' discription='Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your childs education.' />
            <div className='faq-style'>
                <FaqComp qustion='What are the school hours at Little Learners Academy?' answer='Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.' />
                <FaqComp qustion='How do you handle food allergies and dietary restrictions?' answer='Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.' />
                <FaqComp qustion='Is there a uniform policy for students?' answer='Our school'/>
                <FaqComp qustion='What is the teacher-to-student ratio at Little Learners Academy?'  answer='Our school'/>
                <FaqComp qustion='What extracurricular activities are available for students?'  answer='Our school'/>
                <FaqComp qustion='How do you handle discipline and behavior management?'  answer='Our school'/>
                <FaqComp qustion='What extracurricular activities are available for students?'  answer='Our school'/>
                <FaqComp qustion='How do I apply for admission to Little Learners Academy?'  answer='Our school'/>
            </div>
        </div>
    )
}

export default Faq
