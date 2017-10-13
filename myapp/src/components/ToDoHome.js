import React, { Component } from 'react';
import { CardText, CardTitle } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';
import Divider from 'material-ui/Divider';

class ToDoHome extends Component {


  render(){
    let todolist = JSON.parse(localStorage.getItem('todoitems'));
    let TodoList = todolist || [];
    let newestTodo = "Lucky you, have nothing todo";
    console.log(TodoList);
    if(TodoList.length > 0){
        console.log(TodoList[0].title);
        newestTodo = ("Remember to: " + TodoList[0].title)
    }
    return(

      <div>
      <CardTitle style={{'paddingBottom':'0', 'textAlign':'center', 'paddingTop':'4px'}} title="ToDo"></CardTitle>
      <Divider />
      <CardText className="todoHomeText">{newestTodo}</CardText>
      <RaisedButton style={{'display':'flex'}} secondary={true}>
        <Link className="navLink" to="/todo">EDIT YOUR TODOS</Link>
      </RaisedButton>
      </div>
    )


  }
}

export default ToDoHome;
