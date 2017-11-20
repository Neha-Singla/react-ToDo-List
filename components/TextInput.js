import React, {Component} from 'react';
import TextDisplay from './TextDisplay'
class TextInput extends Component{
    constructor(props, context){
        super(props);
        this.state={inputVal: 'initial value'};
    }
    
    
    handleInput(e){
        this.setState({inputVal: e.target.value})
        console.log('key pressed');
    }
    handleClick(){
        console.log('picking the function');
       this.setState({inputVal : (this.state.inputVal.substring(0, this.state.inputVal.length-2))}) 
    }
    render(){
       return (
           <div>
           <input type='text' value={this.state.inputVal} 
           onChange={this.handleInput.bind(this)}
           />
           <TextDisplay  inputVal = {this.state.inputVal} handleClick = {this.handleClick.bind(this)}/>
               </div>
       )
    };
}
export default TextInput;