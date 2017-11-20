import React, {Component} from 'react';
import actions from '../redux/action';
import { connect} from 'react-redux';
import {bindActionCreators} from 'redux';
class UserInfo extends Component{
    constructor(props, context){
        super(props);
        this.state={username: ''};
    }
    handleClick(e){
        e.preventDefault();
        this.props.actions.createUser();
        
    }
    handleChange(e){
        e.preventDefault();
        this.setState({
            username: e.target.value 
        });
    }
    render(){
       return (
           <div className="col-xs-12">
               Username:{this.props.user.username}
               id:{this.props.user.id}
           <button onClick={this.handleClick.bind(this)}>Create New UserId</button>
           </div>
           )
    };
}

function mapStateToProps(state){
    return state
}
function mapDispatchToProps(dispatch){
    return {
    actions: bindActionCreators(actions, dispatch)
}
   
}
export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);