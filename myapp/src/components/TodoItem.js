//Import React, ReactComponents and style
import React, { Component } from 'react';
import './../style/TodoItem.css';

//Import Material UI
import {Card, CardActions, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


class TodoItem extends Component {
	//Passes the item that should be deleted as prop to the Todo.js components deleteTodoItem function
	deleteTodoItem = () => {
		this.props.deleteTodoItem(this.props.todoItem);
	}
	//Passes the item that should have its status changed as prop to the Todo.js components setStatusTodoItem function
	setStatusTodoItem = () => {
		this.props.setStatusTodoItem(this.props.todoItem);
	}

	render() {
		let {todoItem} = this.props;
		//Styles for the todoItems text
		const textStyle = { width: '150px', whiteSpace: 'normal', wordWrap: 'break-word', textWrap: 'wrap'};
		const headerStyle = { width: '75px', whiteSpace: 'normal', wordWrap: 'break-word', textWrap: 'wrap'};
		//Sets the button text for the todoItem depending on the boolean .finished
		let status = todoItem.finished ? "Undone" : "Done";
		return (
      //Creates and returns the todoItem card to the Todo.js Component
			<div>
				<Card className="todoItem">
					<div>
						<div className="todoItemText">
						<CardText className ="CardHeader" style={headerStyle}>{todoItem.title}</CardText>
						<CardText className="CardText" style={textStyle} >{ todoItem.text }</CardText>
						</div>
						<CardActions className="todoItemButtons">
							<FlatButton id="doneButton" onClick = {this.setStatusTodoItem}>{status}</FlatButton>
							<FlatButton onClick = {this.deleteTodoItem}>Delete</FlatButton>
						</CardActions>
					</div>
				</Card>
			</div>
			)
	}
}
export default TodoItem;
