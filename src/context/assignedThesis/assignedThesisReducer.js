import { GET_DETAILS_SUCCESS,GET_DETAILS_SUCCESS_SUP,AUTH_ERROR } from "../types";
const assignedThesisReducerfunc = (state,action)=>{
    switch(action.type){
        case GET_DETAILS_SUCCESS:
            if(action.payload!==""){
                const{scholarAdmn,supervisorId,co_supervisor,dscId} = action.payload
                return {...state,assignedThesis:action.payload,scholar:scholarAdmn,supervisor:supervisorId,co_supervisor:co_supervisor,dsc:dscId,checked:true, loading: false};
            }
            else return{...state,checked:true, loading: false}

        case GET_DETAILS_SUCCESS_SUP:
            return {...state,Theses:[action.payload],checked:true, loading: false};

        case AUTH_ERROR:
            return{ ...state, error:action.payload, loading: false};

        default:
            return state;
    }
}
export default assignedThesisReducerfunc;