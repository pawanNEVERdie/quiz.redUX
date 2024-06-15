import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from 'react-redux'
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


const Settings: React.FC = () => {
  
  const [options, setOptions] = useState<Category[]>([]);
//   const [questionCategory, setQuestionCategory] = useState<string>("");
//   const [questionDifficulty, setQuestionDifficulty] = useState<string>("");
//   const [questionType, setQuestionType] = useState<string>("");
//   const [numberOfQuestions, setNumberOfQuestions] = useState<number>(50);
const loading = useSelector((state: RootState) => state.options.loading);
const questionCategory = useSelector((state: RootState) => state.options.question_category);
const questionDifficulty = useSelector((state: RootState) => state.options.question_difficulty);
const questionType = useSelector((state: RootState) => state.options.question_type);
const questionAmount = useSelector((state: RootState) => state.options.amount_of_questions);
const dispatch = useDispatch()

  useEffect(() => {
    // setLoading(true);
    const apiUrl = `https://opentdb.com/api_category.php`;
    const handleChange =(value:)=>{
        dispatch({
            type:"CHANGE_LOADING",
            loading:value

        })
    }
    handleChange(true);
    fetch(apiUrl)
      .then((res) => res.json())
      .then((response) => {
        setOptions(response.trivia_categories);
        // setLoading(false); 
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
       handleChange(false)
      });
  }, [setOptions,dispatch]); 

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({
        type:"CHANGE_CATEGORY",
      question_category: event.target.value

    })
  };

  const changeDifficulty = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({
        type:"CHANGE_DIFFICULTY",
        value:event.target.value
    })
  };

  const changeType = (event: React.ChangeEvent<HTMLSelectElement>) => {
dispatch(
    {
        type:"CHANGE_TYPE",
        value:event.target.value
    }
)
  };

  const changeNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
   dispatch(
    {
        type:"CHANGE_AMOUNT",
value:event.target.value    }
   )
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div>
        <select value={questionCategory} onChange={handleChange}>
          <option value="">All</option>
          {options.map((opt) => (
            <option value={opt.id} key={opt.id}>
              {opt.name}
            </option>
          ))}
        </select>
      </div>
      <h2>Select Difficulty:</h2>
      <select value={questionDifficulty} onChange={changeDifficulty}>
        <option value="">All</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      <h2>Question Type:</h2>
      <select value={questionType} onChange={changeType}>
        <option value="">All</option>
        <option value="multiple">Multiple Choice</option>
        <option value="boolean">True/False</option>
      </select>
      <h2>Amount of Questions:</h2>
      <input type="number" value={questionAmount} onChange={changeNumber} />
    </>
  );
}
export default Settings;
