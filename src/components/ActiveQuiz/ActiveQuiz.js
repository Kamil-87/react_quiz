import React from "react"
import classes from "./ActiveQuiz.css"
import AnswerList from "./AnswerList/AnswerList";

const ActiveQuiz = props => {
  console.log('active', props)

  return (
      <div className={classes.ActiveQuiz}>
        <p className={classes.Questions}>
        <span>
          <strong>2.</strong>&nbsp;
          {props.question}
        </span>

          <small>4 из 12</small>
        </p>

        <AnswerList
            answers={props.answers}
            onAnswerClick={props.onAnswerClick}
        />
      </div>
  )
}

export default ActiveQuiz
