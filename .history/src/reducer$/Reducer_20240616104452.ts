interface InitialState {
    options: {
      loading: boolean;
      question_category: string;
      question_difficulty: string;
      question_type: string;
      amount_of_questions: number;
    };
    questions 
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
 } 
 type action =
  | { type: "CHANGE_LOADING"; value: boolean }
  | { type: "CHANGE_DIFFICULTY"; value: string }
  | { type: "CHANGE_TYPE"; value: string }
  | { type: "CHANGE_AMOUNT"; value: number }
  | {
    type:"CHANGE_CATEGORY";value:string
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
              default:
                return state;      
    }
}
  