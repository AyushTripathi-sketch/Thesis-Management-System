import {AUTH_ERROR, GET_GROUP_SUCCESS,CLEAR_ERRORS } from "../types";
    const supervisorGroupReducerfunc = (state,action)=>{
        switch(action.type){
            case GET_GROUP_SUCCESS:
                return {...state,scholars:action.payload}
            case CLEAR_ERRORS:
                return{ ...state,error:null}
            case AUTH_ERROR:
                return{...state,error:action.payload};
    
            default:return state;
        }
    }
    export default supervisorGroupReducerfunc;