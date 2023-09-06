

export default (state, action) => {
    switch(action.type){
        case 'Delete_Transection':
            return{
            ...state,
            transections: state.transections.filter(transection => transection.id !== action.payload )
            }
        case 'Add_Transection':
            return{
                ...state,
                transections: [...state.transections, action.payload]
            }
        default:
             return state;
    }
}