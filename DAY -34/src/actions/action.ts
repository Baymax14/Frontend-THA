const addTodo = (name : string) => {
   return {
        type: "ADD_TODO",
        payload : name,
      };      
};

const deleteTodo = (id : number) => {
   return {
        type :"DELETE_TODO",
        payload : id,
      };
};

export {addTodo, deleteTodo};
