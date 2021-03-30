import {Fragment} from 'react'
import Switches from './Switch'

function Question ({question}) {

  function displayQuestionDependingOnItsType(question){
    const type = question.answer.type
    const options = question.answer.options
    const answerName = question.answer.name

    if (type === "radio") {
      return (
        <Fragment>
          <p>{question.question}</p>
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
          <p>{question.question}</p>
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
        <p>
          <label htmlFor={question.answer.name}>{question.question}</label>
          <input type={type} name={question.answer.name} id={question.answer.name}/>
        </p>
      )
    }else {
      return (
        //TODO Lier le switch de Material-ui à la question au lieu des inputs type radio
        <Fragment>
          <p>{question.question}</p>
          <Switches />
          <div>
            <input type="radio" name={answerName} value="oui" id="oui"/>
            <label htmlFor="oui">oui</label>
            <input type="radio" name={answerName} value="non" id="non"/>
            <label htmlFor="non">non</label>
          </div>
        </Fragment>
      )
    }
  }

  return(
    <div className="question">
      {displayQuestionDependingOnItsType(question)}
    </div>
  )
}

export default Question