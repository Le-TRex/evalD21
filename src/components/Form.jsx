
import exam from '../qcm';
import Question from './Question'

function Form(){
  return(
    <div className="form">
      {exam.map((question, index)=>(
        <Question question={question} key={index}/>
      ))}
    </div>
  )
}

export default Form
