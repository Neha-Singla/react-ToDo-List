import React, {Component} from 'react';

class TextDisplay extends Component{
    handleClick(){
        console.log("yeah");
        this.props.handleClick()
    }
    render(){
       return (
           <div>
          <p>this is the changed value.{this.props.inputVal}</p>
           <button onClick={this.handleClick.bind(this)}>Delete 1 character</button>
           </div>
       )
    };
}
export default TextDisplay;