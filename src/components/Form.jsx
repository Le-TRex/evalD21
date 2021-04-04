
import exam from '../qcm'
import Question from './Question'
import '../stylesheets/form.css'

function Form(){
  return(
    <form action="#" method="GET"> pour tester la récupération des valeur
     {/*<form action="http://188.165.104.163/exam" method="POST">*/}
      {exam.map((question, index)=>(
        <Question question={question} key={index}/>
      ))}
      <input className="submit" type="submit" value="Envoyer"/>
    </form>
  )
}

export default Form
