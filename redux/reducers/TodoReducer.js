function getId(state){
    return state.reduce((maxId, todo) => {
        return Math.max(todo.id, maxId)
    
    },-1)+1
}
function deleteId(state, id) {
    return state.filter((todo) => {
        if( todo.id !== id){
           return todo; 
        }  
    })
}
function updateComplete(items, id){
            return items.map(function(todoItem) {
                             return todoItem.id === id ?
                                 Object.assign({}, todoItem, {completed: true}):todoItem;
})
}
function editStart(items, id){
            return items.map(function(todoItem) {
                             return todoItem.id === id && todoItem.completed === false ?
                                 Object.assign({}, todoItem, {editable: true}):todoItem;
})
}
function editComplete(items, id, val){
            return items.map(function(todoItem) {
                             return todoItem.id === id ?
                                 Object.assign({}, todoItem, {editable: false, text: val}):todoItem;
})
}
                         
let todoReducer = function(todos=[], action){
    switch(action.type) {
        case 'ADD_TODO':
            console.log('reducer is also triggereed');
            return [{
                    text: action.text,
                    completed: false,
                    id: getId(todos),
                    editable: false
                }, ...todos]
        case 'DELETE_TODO':
            return  deleteId(todos, action.id)
              case 'COMPLETE_TODO':
            return updateComplete(todos, action.id)
            case 'EDIT_TODO':
            return editStart(todos, action.id)
            case 'EDITCOMPLETE_TODO':
            return editComplete(todos, action.id, action.val)
            default:
            console.log('reducer is also triggereed');
                       return todos;
    }
}
export default todoReducer; 