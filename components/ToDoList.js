import React, {Component} from 'react';
import ToDoListItem from './ToDoListItem.js';
import ToDoEdit from './ToDoEdit.js';
class ToDoList extends Component{
    render(){
        
       return (
         
           <ul  className="list-group col-xs-6" style={{paddingLeft: '30px'}}>
           {
             this.props.todos.map((todo) => {
            
           if(todo.editable){
               return  (
                              <ToDoEdit  id={todo.id} text={todo.text} key={todo.id} actions ={this.props.actions}/>
                   )
               
           } else {
              return (
                    <ToDoListItem id={todo.id} text={todo.text} completed ={todo.completed} key={todo.id} actions = {this.props.actions}/>
                  )
           }
               
           })  
           }
           
               </ul>
       )
    };
}
export default ToDoList;