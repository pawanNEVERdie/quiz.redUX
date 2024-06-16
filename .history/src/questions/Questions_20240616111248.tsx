import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
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
      interface index {
   index:number
      }interface score{
        score:number
           }
    interface QuestionRoot{
        questions :Question[]
      }
      interface IndwRoot{
        index:index
      }
     interface scoreRoot{
        score:score
     }
  const score = useSelector((state:scoreRoot )=> state.score)
  const questions = useSelector((state:QuestionRoot[] )=> state.questions)
  const questionIndex = useSelector((state:IndwRoot) => state.index)
	
  const dispatch = useDispatch(
  const question = questions[questionIndex]
  const answer = question.correct_answer
	return <div></div>
}
export default Question;