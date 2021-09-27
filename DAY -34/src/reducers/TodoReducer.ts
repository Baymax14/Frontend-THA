interface addNoteAction {
    type : string,
    payload : string,
}
interface deleteNoteAction {
    type : string,
    payload : number,
}

type ActionType = addNoteAction | deleteNoteAction


const TodoReducer = (state: any =[], action : ActionType) => {
    switch(action.type) {
        case "ADD_TODO":
            return [...state, action.payload]
        case "DELETE_TODO":
            return state.filter((_ :string,index:number ) => index !== action.payload);
        default:
            return state;
    }
};

export default TodoReducer;

