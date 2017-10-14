//Import React, ReactComponents and style
import React, { Component } from 'react';
import './../style/TodoItem.css';

//Import Material UI
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


class TodoItem extends Component {
	deleteTodoItem = () => {
		this.props.deleteTodoItem(this.props.todoItem)
	}

	editTodoItem = () => {
		this.props.editTodoItem(this.props.todoItem)
	}

	render() {
		const {todoItem} = this.props;
		const textStyle = { width: '150px', whiteSpace: 'normal', wordWrap: 'break-word', textWrap: 'wrap'};
		const headerStyle = { width: '75px', whiteSpace: 'normal', wordWrap: 'break-word', textWrap: 'wrap'};
		return (
			<div>
				<Card className="todoItem">
					<div>
						<div className="todoItemText">
						<CardText className ="CardHeader" style={headerStyle}>{todoItem.title}</CardText>
						<CardText className="CardText" style={textStyle} >{ todoItem.text }</CardText>
						</div>
						<CardActions className="todoItemButtons">
							<FlatButton onClick = {this.editTodoItem}>Done</FlatButton>
							<FlatButton onClick = {this.deleteTodoItem}>Delete</FlatButton>
						</CardActions>
					</div>
				</Card>
			</div>
			)
	}
}
export default TodoItem;
