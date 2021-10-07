import React from "react"
import { AnswersPage } from "./AnswersPage";

export const TestingPage = ({question, answers, setRight, setWrong}) => {
    const [disabled, setDisabled] = React.useState(false)
    const [correctAnswer, setcorrectAnswer] = React.useState(false)

    const takeAnswer = (event) => {
        const value = event.target.textContent
        const arr = answers.filter(item => item.answer === value )
        
        arr[0].correct ? setRight(prev => prev + 1) : setWrong(prev => prev + 1)

        setDisabled(true)
        setcorrectAnswer(true)
    }
    return <div>
        <h1>{question}</h1>
        { answers.map((item, i) => <AnswersPage 
            {...item} 
            key={i}
            index={i}
            takeAnswer={takeAnswer} 
            disabled={disabled} 
            correctAnswer={correctAnswer} />)
        }
    </div>
}