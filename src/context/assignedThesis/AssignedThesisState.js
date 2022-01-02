import React,{useReducer} from "react";
import axios from "axios";
import AssignedThesisContext from "./assignedThesisContext";
import assignedThesisReducer from "./assignedThesisReducer";
import setAuthToken from "../../utils/setAuthToken";
import { AUTH_ERROR, GET_DETAILS_SUCCESS } from "../types";
axios.create({
    
    responseType: 'json'
})

const AssignedThesisState = (props)=>{
    const initialState = {
        loading: true,
        assignedThesis:null,
        error:null
    }
    const [state,dispatch] = useReducer(assignedThesisReducer,initialState);
    const getAssignedThesisDetails = async(admn)=>{
       // setting token in the global header ie x-auth-token = token 
       if(localStorage.token){
        setAuthToken(localStorage.token);}
        try {
            const res = await axios.get(`/api/assignedThesis/${admn}`);
            dispatch({type:GET_DETAILS_SUCCESS,payload:res.data});
        } catch (error) {
            dispatch({type:AUTH_ERROR,payload:error.response.data.msg});
        }
     
    }
    return (
    <AssignedThesisContext.Provider
        value={{
            ...state,
            getAssignedThesisDetails
        }}
    >
        {props.children}
    </AssignedThesisContext.Provider>
    )





}
export default AssignedThesisState;