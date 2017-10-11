import React, { Component } from 'react';
import Note from './../components/Note';
import './../style/notes.css';
import uuid from 'uuid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Card, CardActions} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'

export default class Notes extends Component {

	constructor(props){
		super(props);

		this.state = {
			notelist: [{ID: uuid.v4(), title: "Clean your room", text: "It's important"}/*, {ID: uuid.v4(),title: "Tittel1", text: "Dette er andre note"}*/]
		}
	}

	componentWillMount = () => {
	    //localStorage.clear()
	    let notelist = JSON.parse(localStorage.getItem('notes'))
	    this.setState({
	        notelist: notelist || []
	    })
	}

	addNote = () => {
		const title = document.getElementById("title-field").value
		const text = document.getElementById("comment-field").value
		if (title !=="") {
			const {notelist} = this.state
			notelist.push({ID: uuid.v4(),title: title, text: text, finished: false})
			this.setState({notelist: notelist})
			localStorage.setItem('notes',JSON.stringify(notelist))
			document.getElementById("title-field").value = ""
			document.getElementById("comment-field").value = ""
			document.getElementById("title-field").placeholder = "What task?"
			document.getElementById("comment-field").placeholder = "optional comment"
		}

	}

	deleteNote = (note) => {
		const {notelist} = this.state
		const i = notelist.indexOf(note)
		notelist.splice(i,1)
		this.setState({notelist: notelist})
		localStorage.setItem('notes',JSON.stringify(notelist))


	}

	editNote = (note) => {
		const {notelist} = this.state
		const i = notelist.indexOf(note)
		//notelist[i] = ({ID: note.ID, title: note.title, text: note.text, finished: !note.finished})
		notelist[i].finished = !notelist[i].finished
		this.setState({notelist: notelist})
		localStorage.setItem('notes',JSON.stringify(notelist))

		console.log(!note.finished)
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
		const { notelist } = this.state
		console.log(notelist[0])
		return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
     	<div>
      <div className="creatorContainer">
		<Card className="noteCreator">
			<CardActions className="noteCreatorContent">
					<TextField id="title-field" hintText="What task?"/>
					<TextField id="comment-field" hintText="optional comment" />
				<FlatButton onClick = {this.addNote}>add</FlatButton>
			</CardActions>
		</Card>
		</div>

		<div className="noteContainer" id="notdone">
			{ notelist.filter(function (note) {return !note.finished}).map((note) => <Note key={note.ID} note={note} editNote={this.editNote} deleteNote={this.deleteNote}/>) }
			<div>
			<FlatButton id="toggleDone" onClick = {this.toggleDone}>hide finished tasks</FlatButton>
			</div>

		</div>
		<div className="noteContainer" id="done">
			{ notelist.filter(function (note) {return note.finished}).map((note) => <Note key={note.ID} note={note} editNote={this.editNote} deleteNote={this.deleteNote}/>) }

		</div>
		</div>
		</MuiThemeProvider>
		)
	}
}
