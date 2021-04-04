import { Fragment } from 'react'
import Toggle from './Toggle'
import '../stylesheets/question.css'

function Question ({question}) {

  function displayQuestionDependingOnItsType(question){
    const type = question.answer.type
    const options = question.answer.options
    const answerName = question.answer.name

    if (type === "radio") {
      return (
        <Fragment>
          <h3>{question.question}</h3>
          <div>
            {options.map((option, index) => (
              <div key={index}>
                <input type={type} name={answerName} value={option.value} id={option.value}/>
                <label htmlFor={option.value}>{option.text}</label>
              </div>
            ))}
          </div>
        </Fragment>

      )
    }else if (type === "checkbox"){
      return(
        <Fragment>
          <h3>{question.question}</h3>
          <div>
            {options.map((option, index) => (
              <div key={index}>
                <input type={type} name={option.name} id={option.name}/>
                <label htmlFor={option.name}>{option.text}</label>
              </div>
            ))}
          </div>
        </Fragment>
      )
    }else if (type === "text"){
      return (
        <Fragment>
          <div className="inputTypeText">
            <h3>
              <label htmlFor={question.answer.name}>{question.question} : </label>
            </h3>
            <input type={type} name={question.answer.name} id={question.answer.name}/>
          </div>
        </Fragment>
      )
    }else {
      return (
        <Fragment>
          <Toggle toggleContent={question} />
        </Fragment>
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