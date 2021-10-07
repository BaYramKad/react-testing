import React from "react"

export const AnswersPage = ({answer, correct, takeAnswer, disabled, correctAnswer}) => {
    return <div>
        <ul>
            <li>
               <button 
                    onClick={takeAnswer} 
                    className={ correct && correctAnswer ? 'right' : 'notRight' } 
                    disabled={ disabled ? true : false } >{answer}
                </button>
            </li>
        </ul>
    </div>
}