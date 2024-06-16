interface Question {

  id: number;
  category: string;
  difficulty: string;
  type: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}
interface InitialState {
    options: {
      loading: boolean;
      question_category: string;
      question_difficulty: string;
      question_type: string;
      amount_of_questions: number;
    };
    questions :Question[]
    index: number,
    score: number
  }
  
  const initState: InitialState = {
    options: {
      loading: false,
      question_category: "",
      question_difficulty: "",
      question_type: "",
      amount_of_questions: 50,
    },
    questions :[],
    index:0,
    score:0
 } 
 type action =
  | { type: "CHANGE_LOADING"; value: boolean }
  | { type: "CHANGE_DIFFICULTY"; value: string }
  | { type: "CHANGE_TYPE"; value: string }
  | { type: "CHANGE_AMOUNT"; value: number }
  | {
    type:"CHANGE_CATEGORY";value:string
  }
  | {
    type:"SET_QUESTIONS";value:Question[]
  }
|
{
  type:
}
 export  const Reducer  = (state =initState ,action:action)=>{
    switch(action.type){
        case "CHANGE_LOADING":
            return{
                ...state,
                options:{
                    ...state.options,
                    loading:action.value
                }

            }
            case "SET_INDEX":
              return {
                ...state,
                index: action.value
              }
            
            case "SET_SCORE":
              return {
                ...state,
                score: action.
              }
          
        case "CHANGE_DIFFICULTY":
            return{
                ...state,options:{
                    ...state.options,
                    question_difficulty:action.value
                }
            }    
            case "CHANGE_TYPE":
                return{
                    ...state,options:{
                        ...state.options,
                       question_type : action.value
                    }
                } 
                case "CHANGE_CATEGORY":
                    return {
                      ...state,
                      options: {
                        ...state.options,
                        question_category: action.value
                      }
                    }
                case "CHANGE_AMOUNT":
                    return{
                        ...state,options:{
                            ...state.options,
                            amount_of_questions: action.value
                        }
                    } 
                    case "SET_QUESTIONS":
                      return {
                        ...state,
                        questions: action.value
                      }    
              default:
                return state;      
    }
}
  