import React from 'react';
import TextInput from './TextInput';
import ToDoInput from './ToDoInput';
import UserInfo from './UserInfo';
import ToDoList from './ToDoList';
import { connect} from 'react-redux';
import actions from '../redux/action';
import {bindActionCreators} from 'redux';
class App extends React.Component{
    render(){
       return (
           <div className="row" style={{marginLeft: '0px', marginRight: '0px'}}>
           <h1 className="col-xs-12">Here is the TODO List</h1>
           <ToDoInput  actions = {this.props.actions}/>
           <ToDoList todos= {this.props.todos} actions = {this.props.actions}/>
           </div>
       )
    };
}
//export default App;
function mapStateToProps(state){
    return state
}
function mapDispatchToProps(dispatch){
    return {
    actions: bindActionCreators(actions, dispatch)
}
   
}
export default connect(mapStateToProps, mapDispatchToProps)(App);