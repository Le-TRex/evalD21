import {Fragment} from 'react'

function Question ({question}) {


  function displayQuestionDependingOnItsType(question){
    const type = question.answer.type
    const options = question.answer.options

    if (type === "radio") {


      return (
        <Fragment>
          <p>{question.question}</p>
          <div>
            {options.map((option, index) => (
              <p key={index}>{option.text}</p>
            ))}
          </div>

        </Fragment>
      )

    }else if (type === "checkbox"){


    }else if (type === "text"){
      return (
        <p>
          <label htmlFor={question.answer.name}>{question.question}</label>
          <input type={type} name={question.answer.name} id={question.answer.name}/>
        </p>
      )

    }else{
    }
  }

  return(
    <div className="question">
      {displayQuestionDependingOnItsType(question)}
    </div>
  )
}

export default Question