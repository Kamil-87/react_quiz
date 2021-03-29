import React, {Component} from "react"
import classes from './Quiz.css'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends Component {
  state = {
    quiz: [
      {
        question: 'Kaкого цвета небо?',
        rightAnswerId: 2,
        answers: [
          {id:1, text: 'Черный'},
          {id:2, text: 'Синий'},
          {id:3, text: 'Красный'},
          {id:4, text: 'Зеленый'},
        ]
      },
    ]
  }

  onAnswerClickHandler = answerId => {
    console.log('Answer id: ', answerId)
  }

  render() {
    return (
        <div className={classes.Quiz}>


          <div className={classes.QuizWrapper}>
            <h1>Ответьте на все вопросы</h1>
            <ActiveQuiz
              answers={this.state.quiz[0].answers}
              question={this.state.quiz[0].question}
              onAnswerClick={this.onAnswerClickHandler}
            />
          </div>
        </div>
    )
  }
}

export default Quiz
