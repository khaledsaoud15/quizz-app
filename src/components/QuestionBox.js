import React,{useState} from 'react'

const QuestionBox = (props) => {
    const [show,setShow] = useState(false)
    const [reponse,setReponse] = useState("")


    const choose = (e)=>{
        let value1 = e.target.value
        setReponse(value1)
        setShow(!show)
    }

    return (
        <div>
              <div className="grid-2">
                            <div className="qst">
                            <p>{props.question}</p>
                            </div>
                            <div className="ans">
                              {!show ?  <div> {props.answers.map((item,key)=>{
                                   return(
                                      <div className="btn" key={key}>
                                           <button value = {item} onClick={choose}>{item}</button>
                                      </div>
                                   )
                               })}</div> : <button>{reponse}</button>}
                              
                            </div>
                         </div>
        </div>
    )
}

export default QuestionBox
