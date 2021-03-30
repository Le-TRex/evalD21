
import exam from '../qcm';
import Question from './Question'

console.log(exam)

function Form(){
  return(
    <div className="form">
      {exam.map((element, index)=>(
        <Question element={element} key={index}/>
      ))}
    </div>
  )
}

export default Form
