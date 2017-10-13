import React, { Component } from 'react';
import TodoItem from './../components/TodoItem';
import './../style/Todo.css';
import uuid from 'uuid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Card, CardActions} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'

class Todo extends Component {

	constructor(props){
		super(props);

		this.state = {
			todolist: []
		}
	}

	componentWillMount = () => {
	    //localStorage.clear()
	    let todolist = JSON.parse(localStorage.getItem('todoitems'))
	    this.setState({
	        todolist: todolist || []
	    })
	}

	addTodoItem = () => {
		const title = document.getElementById("title-field").value
		const text = document.getElementById("comment-field").value
		if (title !=="") {
			const {todolist} = this.state
			todolist.push({ID: uuid.v4(),title: title, text: text, finished: false})
			this.setState({todolist: todolist})
			localStorage.setItem('todoitems',JSON.stringify(todolist))
			document.getElementById("title-field").value = ""
			document.getElementById("comment-field").value = ""
			document.getElementById("title-field").placeholder = "What task?"
			document.getElementById("comment-field").placeholder = "optional comment"
		}

	}

	deleteTodoItem = (todoItem) => {
		const {todolist} = this.state
		const i = todolist.indexOf(todoItem)
		todolist.splice(i,1)
		this.setState({todolist: todolist})
		localStorage.setItem('todoitems',JSON.stringify(todolist))


	}

	editTodoItem = (todoItem) => {
		const {todolist} = this.state
		const i = todolist.indexOf(todoItem)
		todolist[i].finished = !todolist[i].finished
		this.setState({todolist: todolist})
		localStorage.setItem('todoitems',JSON.stringify(todolist))


	}

	toggleDone = () => {
		let setvalue = "none"
		let setText = "show finished tasks"
		if (document.getElementById("done").style.display==="none"){
			setvalue = "flex"
			setText = "hide finished tasks"

		}
		document.getElementById("done").style.display=setvalue
		document.getElementById("toggleDone").getElementsByTagName("div")[0].innerHTML = setText

	}



	render() {
		const { todolist } = this.state
		console.log(todolist[0])
		return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
     	<div>
      <div className="creatorContainer">
		<Card className="todoItemCreator">
			<CardActions className="todoItemCreatorContent">
					<TextField id="title-field" hintText="What task?"/>
					<TextField id="comment-field" hintText="optional comment" />
				<FlatButton onClick = {this.addTodoItem}>add</FlatButton>
			</CardActions>
		</Card>
		</div>

		<div className="todoItemContainer" id="notdone">
			{ todolist.filter(function (todoItem) {return !todoItem.finished}).map((todoItem) => <TodoItem key={todoItem.ID} todoItem={todoItem} editTodoItem={this.editTodoItem} deleteTodoItem={this.deleteTodoItem}/>) }
			<div>
			<FlatButton id="toggleDone" onClick = {this.toggleDone}>hide finished tasks</FlatButton>
			</div>

		</div>
		<div className="todoItemContainer" id="done">
			{ todolist.filter(function (todoItem) {return todoItem.finished}).map((todoItem) => <TodoItem key={todoItem.ID} todoItem={todoItem} editTodoItem={this.editTodoItem} deleteTodoItem={this.deleteTodoItem}/>) }

		</div>
		</div>
		</MuiThemeProvider>
		)
	}
}
export default Todo;
