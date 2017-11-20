let actions = {
    addToDo: function(text) {
        console.log('acion triggered');
        return {
            type: 'ADD_TODO',
            text: text
        }
            
    },
    deleteToDo: function(id){
        console.log("delete is triggered");
        return {
            type: 'DELETE_TODO',
            id: id
        }
        
    },
    completeToDo: function(id){
          console.log("complete is triggered");
        return {
            type: 'COMPLETE_TODO',
            id: id
        }
        
    },
    createUser: function(){
    return {
            type: 'CREATE_USER',
            id: Math.round(Math.random()*100)
        }
},
    editToDo: function(id){
        return {
            type: 'EDIT_TODO',
            id: id
        }
    },
      editToDoComplete: function(id, val){
        return {
            type: 'EDITCOMPLETE_TODO',
            id: id,
            val: val
        }
    },
    
}
export default actions;