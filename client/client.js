import React from 'react';
import {render} from 'react-dom';
import App from '../components/App.js';
import configureStore from '../redux/store';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import Main from '../components/main.js';
import UserInfo from '../components/UserInfo.js';
let initialState = {
    todos:[{
        id:0,
        completed:false,
        text:'Initial TOdo for demo purposes',
        editable: false
    }],
    user:{
        username:"neha",
        id:28
    }
}
let store = configureStore(initialState)
store.subscribe(()=>{
    console.log(store.getState());
})
render(
    <Provider store={store}>
    <Router history={browserHistory}>
    <Route  component={Main} >
    <Route path="/" component={App}/>
      <Route path="/user" component={UserInfo}/>
    </Route>
    </Router>
    </Provider>, 
    document.getElementById('app')
)
