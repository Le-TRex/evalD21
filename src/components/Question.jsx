import { Fragment } from 'react'
import '../stylesheets/question.css'

function Question ({question}) {

  function displayQuestionDependingOnItsType(question){
    const type = question.answer.type
    const options = question.answer.options
    const answerName = question.answer.name

    if (type === "radio") {
      return (

        <div className="form-question">
          <p>{question.question}</p>
          <div>
            {options.map((option, index) => (
              <div key={index}>
                <input type={type} name={answerName} value={option.value} id={option.value}/>
                <label htmlFor={option.value}>{option.text}</label>
              </div>
            ))}
          </div>
        </div>

      )
    }else if (type === "checkbox"){
      return(
        <div className="form-question">
          <p>{question.question}</p>
          <div>
            {options.map((option, index) => (
              <div key={index}>
                <input type={type} name={option.name} id={option.name}/>
                <label htmlFor={option.name}>{option.text}</label>
              </div>
            ))}
          </div>
        </div>
      )
    }else if (type === "text"){
      return (
        <div className="form-question">
          <p>
            <label htmlFor={question.answer.name}>{question.question}</label>
            <input type={type} name={question.answer.name} id={question.answer.name}/>
          </p>
        </div>
      )
    }else {
      return (
        <div className="form-question">
          <p>{question.question}</p>
          <div>
            <input type="radio" name={answerName} value="oui" id="oui"/>
            <label htmlFor="oui">oui</label>
            <input type="radio" name={answerName} value="non" id="non"/>
            <label htmlFor="non">non</label>
          </div>
        </div>
      )
    }
  }

  return(
    <div className="form-question">
      {displayQuestionDependingOnItsType(question)}
    </div>
  )
}

export default Question