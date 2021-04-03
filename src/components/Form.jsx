
import exam from '../qcm'
import Question from './Question'
import '../stylesheets/form.css'

function Form(){
  return(
    <form action="http://188.165.104.163/exam" method="POST">
      {exam.map((question, index)=>(
        <Question question={question} key={index}/>
      ))}
    </form>
  )
}

export default Form
