import React, { Component } from 'react';
import { CardText, CardTitle } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

class ToDoHome extends Component {


  render(){
    let todolist = JSON.parse(localStorage.getItem('notes'));
    let TodoList = todolist || [];
    let newestTodo = "Lucky you, have nothing todo";
    if(TodoList.length > 0){
        console.log(TodoList[0].title);
        newestTodo = ("Remember to: " + TodoList[0].title)
    }
    return(

      <div>
      <CardTitle style={{'paddingBottom':'0'}} title="ToDo"></CardTitle>
      <CardText>{newestTodo}</CardText>
      <RaisedButton style={{'display':'flex'}}>
        <Link className="navLink" to="/todo">EDIT YOUR TODOS</Link>
      </RaisedButton>
      </div>
    )


  }
}

export default ToDoHome;
