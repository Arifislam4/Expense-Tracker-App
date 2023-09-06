import React, { createContext, useReducer} from "react";
import AppReducer from "../contexts/AppReducer";

const initailState ={
    transections: [
        {id: 1, text: 'Flower', amount: -30},
        {id: 2, text: 'Salary', amount: 10000},
        {id: 3, text: 'Book', amount: -200},
        {id: 4, text: 'Camera', amount: -7000}
    ]
}

export const GlobalContext = createContext(initailState);

export const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AppReducer, initailState);
    console.log(state);

    function deleteTransection(id){
        dispatch({
            type: 'Delete_Transection',
            payload: id
        });
    }

    function addTransection(transections){
        console.log(addTransection);
        dispatch({
            type: 'Add_Transection',
            payload: transections
        });
    }

    return(
        <GlobalContext.Provider value={{
            transections: state.transections,
            deleteTransection,
            addTransection
        }}>
            {children}
        </GlobalContext.Provider>
    )

}