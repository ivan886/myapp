import React from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Person from './Person/Person';
import './App.css';
import Contact from "./application/contact";
import Home from "./application/Home";
import User from "./application/User";
import PostList from "./Post/PostList";


class App extends React.Component{
  
  state={
    persons:[
      {name:'Iván' , age:33},
      {name:'Freddy',age:26}
    ]
  }
  
  switchNameHandler=()=>{
    var edad = Math.floor((Math.random() * 100) + 1);
    this.setState({  persons:[
      {name:'Juan' , age:edad},
      {name:'Freddy',age:22}
    ]}
    );
  }
  
  render(){
    return (
         <div>
        <HashRouter>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/user">User</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/posts"  >Posts</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/user" component={User}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/posts" component={PostList}/>
          </div>
            </HashRouter>
            
            <div>
             <button onClick={this.switchNameHandler}>evento</button>
                 <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                 <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>
                Contenido</Person>
             </div>  
         </div>
      );
  }
}


export default App;
