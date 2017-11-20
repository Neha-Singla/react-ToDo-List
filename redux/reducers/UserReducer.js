
let userReducer = function(user={}, action){
    switch(action.type) {
        case 'CREATE_USER':
            return Object.assign({},  {username:user.username,id:action.id});
            default:
            console.log('reducer is also triggereed');
             return user;
    }
}
export default userReducer; 