import { GET_REPORTS_SUCCESS,AUTH_ERROR, GET_STATUS_SUCCESS } from "../types";
const progressReportReducerfunc = (state,action)=>{
    switch(action.type){
        case GET_STATUS_SUCCESS:
            return {
                ...state,
                progressReport:action.payload};
        case GET_REPORTS_SUCCESS:
            return {...state,[action.payload.designation]:action.payload.response};
        case AUTH_ERROR:
            return{...state,error:action.payload};

        default:return state;
    }
}
export default progressReportReducerfunc;