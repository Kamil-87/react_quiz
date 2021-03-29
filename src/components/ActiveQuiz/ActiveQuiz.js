import React from "react"
import classes from "./ActiveQuiz.css"
import AnswerList from "./AnswerList/AnswerList";

const ActiveQuiz = props => {
  // console.log('active', props)

  return (
      <div className={classes.ActiveQuiz}>
        <p className={classes.Questions}>
        <span>
          <strong>{props.answerNumber}.</strong>&nbsp;
          {props.question}
        </span>

          <small>{props.answerNumber} из {props.quizLength}</small>
        </p>

        <AnswerList
            state={props.state}
            answers={props.answers}
            onAnswerClick={props.onAnswerClick}
        />
      </div>
  )
}

export default ActiveQuiz
