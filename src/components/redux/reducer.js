import {logginSuccess, logout } from "./actionType";

const init = {
    isAuth:false,
    username:"",
}

export const reducer = (state=init,action) =>{
        switch (action.type) {
            case logginSuccess:{
                return{
                    ...state,
                    isAuth:true,
                    username:action.payload.username,
                }
            }
            case logout:{
                 localStorage.removeItem("username")
                return{
                    ...state,
                    isAuth:action.payload,
                    // username:action.payload.username,
                }
            }
                
        
            default: return state;
               
        }
}