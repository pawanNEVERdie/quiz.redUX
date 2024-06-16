import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
function Question() {
    interface QuestionRoot{
        questions :Question[]
      }

  const score = useSelector((state )=> state.score)
  const questions = useSelector((state:QuestionRoot )=> state.questions)
  const questionIndex = useSelector((state) => state.index)
	// define dispatch
  const dispatch = useDispatch()
	/
  const question = questions[questionIndex]
  const answer = question.correct_answer
	return <div></div>
}
export default Question;