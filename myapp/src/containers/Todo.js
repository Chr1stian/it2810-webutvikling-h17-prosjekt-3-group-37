//Import React and ReactComponents, style and components used in this component
import React, { Component } from 'react';
import TodoItem from './../components/TodoItem';
import './../style/Todo.css';

//Import Material UI
import {Card, CardActions} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

//Import RandomID-generator
import uuid from 'uuid';

class Todo extends Component {
	constructor(props){
		super(props);
		this.state = {
			todolist: []
		}
	}
	//Sets the states todolist from the users localStorage
	componentWillMount = () => {
	    let todolist = JSON.parse(localStorage.getItem('todoitems'))
	    this.setState({
	        todolist: todolist || []
	    })
	}
	//Creates a todo item and adds it to the list
	addTodoItem = () => {
		const title = document.getElementById("title-field").value
		const text = document.getElementById("comment-field").value
		if (title !=="") {
			const {todolist} = this.state
			//Adds the new todo item to the list
			todolist.push({ID: uuid.v4(),title: title, text: text, finished: false})
			this.setState({todolist: todolist})
			//Saves the list to localStorage
			localStorage.setItem('todoitems',JSON.stringify(todolist))
			//Resets the new Todo item fields and hint text
			document.getElementById("title-field").value = ""
			document.getElementById("comment-field").value = ""
			document.getElementById("title-field").placeholder = "What task?"
			document.getElementById("comment-field").placeholder = "Optional comment"
		}
	}
	//Deletes the selected todo item
	deleteTodoItem = (todoItem) => {
		const {todolist} = this.state
		const i = todolist.indexOf(todoItem)
		todolist.splice(i,1)
		this.setState({todolist: todolist})
		localStorage.setItem('todoitems',JSON.stringify(todolist))
	}
	//This does not work at the moment
	editTodoItem = (todoItem) => {
		const {todolist} = this.state
		const i = todolist.indexOf(todoItem)
		todolist[i].finished = !todolist[i].finished
		this.setState({todolist: todolist})
		localStorage.setItem('todoitems',JSON.stringify(todolist))
	}

	toggleDone = () => {
		let setvalue = "None"
		let setText = "Show finished tasks"
		if (document.getElementById("done").style.display==="none"){
			setvalue = "Flex"
			setText = "Hide finished tasks"
		}
		document.getElementById("done").style.display=setvalue
		document.getElementById("toggleDone").getElementsByTagName("div")[0].innerHTML = setText
	}
	render() {
		const { todolist } = this.state
		console.log(todolist[0])
		return (
     	<div>
	      <div className="creatorContainer">
					<Card className="todoItemCreator">
						<CardActions className="todoItemCreatorContent">
								<TextField id="title-field" hintText="What task?"/>
								<TextField id="comment-field" hintText="Optional comment" />
								<FlatButton onClick = {this.addTodoItem}>add</FlatButton>
						</CardActions>
					</Card>
				</div>
				<div className="todoItemContainer" id="notdone">
				{ todolist.filter(function (todoItem) {return !todoItem.finished}).map((todoItem) => <TodoItem key={todoItem.ID} todoItem={todoItem} editTodoItem={this.editTodoItem} deleteTodoItem={this.deleteTodoItem}/>) }
					<div>
						<FlatButton id="toggleDone" onClick = {this.toggleDone}>Hide finished tasks</FlatButton>
					</div>
				</div>
			<div className="todoItemContainer" id="done">
				{ todolist.filter(function (todoItem) {return todoItem.finished}).map((todoItem) => <TodoItem key={todoItem.ID} todoItem={todoItem} editTodoItem={this.editTodoItem} deleteTodoItem={this.deleteTodoItem}/>) }
			</div>
		</div>
		)
	}
}
export default Todo;
