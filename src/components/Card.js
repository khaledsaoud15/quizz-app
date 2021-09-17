import React ,{useState,useEffect}from 'react'
import { qBank } from './Data'
import './Card.css'
import QuestionBox from './QuestionBox'

const Card = () => {
    const [answers, setAnswers] = useState([])
 
    

    const handlAnswers = ()=>{
        setAnswers  (qBank.sort(() => 0.5 - Math.random()).slice(0,5))
    }

    useEffect(()=>{
        handlAnswers()
    },[])

    


    

    



    return (
        <div>
            <div className="card">
                <div className="header">
                    QuizzBEE
                </div>
                <div className="grid">
                 {answers.map((i,index)=>{
                     return (
                       <QuestionBox question = {i.question} answers = {i.answers}/>
                         
                     )
                 })}
                </div>
            </div>
        </div>
    )
}

export default Card
