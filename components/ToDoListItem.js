import React, {Component} from 'react';
import actions from '../redux/action';
class ToDoListItem extends Component{
    handleDeleteClick(e){
        e.preventDefault();
        console.log("delete the li");
       this.props.actions.deleteToDo(this.props.id); 
    }
    handleCompleteClick(e){
         e.preventDefault();
        this.props.actions.completeToDo(this.props.id); 
    }
    hideShowComplete(){
        return (
            !this.props.completed? <button onClick={this.handleCompleteClick.bind(this)} className="glyphicon glyphicon-ok-sign btn btn-success pull-right"></button>:''
        )
       
    }
      handleEditClick(e){
            e.preventDefault();
            console.log("yeah smthing happen");
            if(!this.props.completed){
            this.props.actions.editToDo(this.props.id);
            console.log("raise the event to actions that update the editable field of the corrsponding id and then re-render the todos depending upon if the editable is true render the input box otherwise rander the li");
            }
            }
    
    render(){
       return (
               <li  className="list-group-item" onClick={this.handleEditClick.bind(this)}> <div style={{minHeight: '43px'}}>{this.props.text}
           
           <button onClick={this.handleDeleteClick.bind(this)} className="glyphicon glyphicon-remove-sign btn btn-danger pull-right"></button>
            {this.hideShowComplete()}
            </div>
            </li>
           )
    };
}
export default ToDoListItem;