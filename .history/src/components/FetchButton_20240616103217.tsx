import React from 'react';
import { useSelector } from 'react-redux';
interface Category {
  id: number;
  name: string;
}
interface Options {
    loading: boolean;
    question_category: string;
    question_difficulty: string;
    question_type: string;
    amount_of_questions: number;
  }
  
  interface RootState {
    options: Options;
  }

function FetchButton(props) {
  const questionCategory = useSelector((state :RootState)=> state.options.question_category);
  const questionDifficulty = useSelector((state :RootState) => state.options.question_difficulty);
  const questionType = useSelector((state :RootState )=> state.options.question_type);
  const questionAmount = useSelector((state) => state.options.amount_of_questions);
  const questionIndex = useSelector((state )=> state.index);

  const handleFetch = async () => {
    let apiUrl = `https://opentdb.com/api.php?amount=${questionAmount}`;

    if (questionCategory.length > 0) {
      apiUrl = `${apiUrl}&category=${questionCategory}`;
    }
    if (questionDifficulty.length > 0) {
      apiUrl = `${apiUrl}&difficulty=${questionDifficulty}`;
    }
    if (questionType.length > 0) {
      apiUrl = `${apiUrl}&type=${questionType}`;
    }

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      
      console.log(data); 
    } catch (error) {
      console.error('Fetch error:', error);
    
    }
  };

  return (
    <button onClick={handleFetch}>{props.text}</button>
  );
}

export default FetchButton;
