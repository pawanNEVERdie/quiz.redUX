import React from 'react';
import { useSelector } from 'react-redux';
function FetchButton(props) {
  const questionCategory = useSelector(state => state.options.question_category)
  const questionDifficulty = useSelector(state => state.options.question_difficulty)
  const questionType = useSelector(state => state.options.question_type)
  const questionAmount = useSelector(state => state.options.amount_of_questions)
  const questionIndex = useSelector(state => state.index)
const handle  = async()=>{
    let apiUrl = `https://opentdb.com/api.php?amount=${questionAmount}`;
}
return(

)
}