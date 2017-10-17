//Import React and ReactComponents, style and components used in this component
import React, { Component } from 'react';
import TodoItem from './../components/TodoItem';
import './../style/Todo.css';

//Import Material UI
import {Card, CardActions, CardText} from 'material-ui/Card';
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
	    let todolist = JSON.parse(localStorage.getItem('todoitems'));
	    this.setState({
	        todolist: todolist || []
	    })
	}
	//Creates a todo item and adds it to the list
	addTodoItem = () => {
		let title = document.getElementById("TitleField").value;
		let text = document.getElementById("CommentField").value;
		if (title !== "") {
			let {todolist} = this.state;
			//Adds the new todo item to the list
			todolist.push({ID: uuid.v4(), title: title, text: text, finished: false});
			this.setState({todolist: todolist});
			//Saves the list to localStorage
			localStorage.setItem('todoitems', JSON.stringify(todolist));
			//Resets the new Todo item fields and hint text
			document.getElementById("TitleField").value = "";
			document.getElementById("CommentField").value = "";
			document.getElementById("TitleField").placeholder = "What task?";
			document.getElementById("CommentField").placeholder = "Optional comment";
		}
	}
	//Deletes the selected todo item
	deleteTodoItem = (todoItem) => {
		let {todolist} = this.state;
		let i = todolist.indexOf(todoItem);
		todolist.splice(i, 1);
		this.setState({todolist: todolist});
		localStorage.setItem('todoitems', JSON.stringify(todolist));
	}
	//Sets the todo item to either done or undone
	setStatusTodoItem = (todoItem) => {
		let {todolist} = this.state;
		let i = todolist.indexOf(todoItem);
		todolist[i].finished = !todolist[i].finished;
		this.setState({todolist: todolist});
		localStorage.setItem('todoitems', JSON.stringify(todolist));
	}
	//Shows or hides finnished tasks
	toggleDone = () => {
		let setvalue = "None";
		let setText = "Show finished tasks";
		if (document.getElementById("Done").style.display === "none"){
			setvalue = "Flex";
			setText = "Hide finished tasks";
		}
		document.getElementById("Done").style.display = setvalue;
		document.getElementById("ToggleDone").getElementsByTagName("div")[0].innerHTML = setText;
	}
	render() {
		let { todolist } = this.state;
		//Gets a list of items marked as done with the .finished boolean
		let doneTodoList = todolist
			.filter(function (todoItem) {return todoItem.finished})
			.map((todoItem) =>
				<TodoItem
					key={todoItem.ID}
					todoItem={todoItem}
					setStatusTodoItem={this.setStatusTodoItem}
					deleteTodoItem={this.deleteTodoItem}
				/>
			);

		//Displays a button to hide finnished tasks if you have any
		let showTasks;
		if (todolist.length === 0) {
			showTasks = <Card><CardText>You have no items todo..</CardText></Card>;
		}else if (todolist.length === doneTodoList.length) {
			let buttonStyle = {backgroundColor: "#555555", height: "auto", marginTop: "20px", marginBottom: "-20px"}
			showTasks = <div><Card><CardText>You have no items todo..</CardText></Card>
			<FlatButton style={buttonStyle} id="ToggleDone" onClick = {this.toggleDone}>Hide finished tasks</FlatButton></div>;
		}
		 else {
			if (doneTodoList.length !== 0) {
				let buttonStyle = {backgroundColor: "#555555", height: "auto", marginTop: "20px", marginBottom: "-20px"}
				showTasks = <FlatButton style={buttonStyle} id="ToggleDone" onClick = {this.toggleDone}>Hide finished tasks</FlatButton>;
			}
		}

		/*
	      Creates a Material UI card with fields and button to create a new todo item
	      Iterates trough the todolist with all todo items and fills the todoItemCointainer with a card for each
				If there are todo items marked as done, the button "Hide finished tasks" will appear
				The todoItemCointainer with id "done" will be be filled with a card for each
	    */
		return (

     		<div>
	      		<div className="CreatorContainer">
					<Card className="TodoItemCreator">
						<CardActions className="TodoItemCreatorContent">
							<TextField id="TitleField" hintText="What task?"/>
							<TextField id="CommentField" hintText="Optional comment" />
							<FlatButton style={{backgroundColor: "#555555"}} onClick = {this.addTodoItem}>Add</FlatButton>
						</CardActions>
					</Card>
				</div>
				<div className="TodoItemContainer" id="NotDone">
					{ todolist
						.filter(function (todoItem) {return !todoItem.finished})
						.map((todoItem) =>
							<TodoItem
								key={todoItem.ID}
								todoItem={todoItem}
								setStatusTodoItem={this.setStatusTodoItem}
								deleteTodoItem={this.deleteTodoItem}
							/>
						)
					}
					<div>
						{showTasks}
					</div>
				</div>
				<div className="TodoItemContainer" id="Done">
					{doneTodoList}
				</div>
			</div>
		)
	}
}
export default Todo;
