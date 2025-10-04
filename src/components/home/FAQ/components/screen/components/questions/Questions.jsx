import Question from "./components/question/Question";
import './questions.css'

function Questions({onQuestion, questionList}) {
    function questionFire(id) {
        onQuestion(id)
    }

    return (
        <div className="h-[30%] flex justify-between items-center gap-2 overflow-x-auto p-2 rounded scroll-hidden overflow-hidden">
            {
                questionList?.map(q=>(
                    <Question onClick={()=>questionFire(q.id)} text={q.text} key={q.id} />
                ))
            }
        </div>
    )
}

export default Questions;
