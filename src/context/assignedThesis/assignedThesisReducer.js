import { GET_DETAILS_SUCCESS,AUTH_ERROR } from "../types";
const assignedThesisReducerfunc = (state,action)=>{
    switch(action.type){
        case GET_DETAILS_SUCCESS:
            return {...state,assignedThesis:action.payload.response};

        case AUTH_ERROR:
            return{...state,error:action.payload};

        default:return state;
    }
}
export default assignedThesisReducerfunc;