import React, { Component } from 'react';
import './../style/TodoItem.css';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton'

export default class TodoItem extends Component {



	deleteTodoItem = () => {
		this.props.deleteTodoItem(this.props.todoItem)

	}

	editTodoItem = () => {
		this.props.editTodoItem(this.props.todoItem)

	}


	render() {
		const {todoItem} = this.props
		return (
			<div>
				<Card className="todoItem">
					<div>
						<div className="todoItemText">
						<CardHeader className ="CardHeader" title={todoItem.title} />
						<CardText className="CardText">{ todoItem.text }</CardText>
						</div>
						<CardActions className="todoItemButtons">
							<FlatButton onClick = {this.editTodoItem}>done</FlatButton>
							<FlatButton onClick = {this.deleteTodoItem}>delete</FlatButton>
						</CardActions>
					</div>
				</Card>
			</div>
			)

	}


}
