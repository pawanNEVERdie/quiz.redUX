import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux;
import { useEffect } from 'react';
function Question() {
    interface Question {

        id: number;
        category: string;
        difficulty: string;
        type: string;
        question: string;
        correct_answer: string;
        incorrect_answers: string[];
      }
      interface RootState {
        questions: Question[];
        index: number;
        score: number;
      }
      const [options, setOptions] = useState([])
const getRandomInt = max => {
  return Math.floor(Math.random() * Math.floor(max));
}
useEffect(() => {
  if (!question) {
    return;
  }
  let answers = [...question.incorrect_answers]
  answers.splice(getRandomInt(question.incorrect_answers.length), 0, question.correct_answer)
  setOptions(answers)
}, [question])
...
  const score = useSelector((state:RootState)=> state.score)
  const questions = useSelector((state:RootState )=> state.questions)
  const questionIndex = useSelector((state:RootState) => state.index)
	
  const dispatch = useDispatch()
  const question = questions[questionIndex]
  const answer = question.correct_answer
	return <div></div>
}
export default Question;