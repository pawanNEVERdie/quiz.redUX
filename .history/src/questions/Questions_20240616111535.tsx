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
      interface RootState {
        questions: Question[];
        index: number;
        score: number;
      }
      
  const score = useSelector((state:RootState)=> state.score)
  const questions = useSelector((state:RootState )=> state.questions.question)
  const questionIndex = useSelector((state:IndwRoot) => state.index)
	
  const dispatch = useDispatch(
  const question = questions[questionIndex]
  const answer = question.correct_answer
	return <div></div>
}
export default Question;