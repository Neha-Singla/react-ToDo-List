import React, {Component} from 'react';
class ToDoEdit extends Component{
     constructor(props, context){
        super(props);
        this.state={inputValue: props.text};
    }
    handleTextChangeComplete(e){
     console.log("blur is captured"+ this.state.inputValue); 
        this.props.actions.editToDoComplete(this.props.id, this.state.inputValue);
        
    }
    handleChange(e){
        this.setState({inputValue: e.target.value})
    }
    handleKeyUp(e){
        if(e.keyCode == 13){
         this.handleTextChangeComplete();   
        }
    }
    render(){
       return (     
           <li  className="list-group-item">
           <input type="text" value={this.state.inputValue} onChange={this.handleChange.bind(this)} onBlur={this.handleTextChangeComplete.bind(this)} onKeyUp={this.handleKeyUp.bind(this)}/>
            </li>
           )
    };
}
export default ToDoEdit;