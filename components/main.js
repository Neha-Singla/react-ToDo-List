import React, {Component} from 'react';
class Main extends Component{
    render(){
        
       return (
           <div>
           <ul>
           <li><a href="/">ToDo</a></li>
           <li><a href="/user">User</a></li>
           </ul>
        {this.props.children}
           </div>
       )
    };
}
export default Main;