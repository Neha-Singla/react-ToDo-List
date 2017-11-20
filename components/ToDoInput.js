import React, {Component} from 'react';
import actions from '../redux/action';
class ToDoInput extends Component{
    constructor(props, context){
        super(props);
        this.state={inputVal: ''};
    }
    
    
    handleInput(e){
        this.setState({inputVal: e.target.value})
        console.log('key pressed');
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.actions.addToDo(this.state.inputVal);
        console.log('its working');
    }
    render(){
        console.log("its calling each time the value is changed");
       return (
           <form className="col-xs-12 noSidePad">
           <div className="form-group" className="col-xs-6">
           <input type='text' className="form-control" value={this.state.inputVal} placeholder="ToDo List"
           onChange={this.handleInput.bind(this)}/>
         </div>
           <button  onClick={this.handleSubmit.bind(this)} className="btn btn-primary  pull-left col-xs-1">submit</button>
            </form>
       )
    };
}
export default ToDoInput;