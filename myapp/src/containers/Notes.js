import React, { Component } from 'react';
import Note from './../components/Note';
import './../style/notes.css';
import uuid from 'uuid';

export default class Notes extends Component {

	constructor(props){
		super(props);

		this.state = {
			notelist: [{ID: uuid.v4() , text: "Dette er første note"}, {ID: uuid.v4(), text: "Dette er andre note"}]
		}
	}

	componentWillMount = () => {
		//hente ut fra lagring
		//sette state evt tom liste
	}

	addNote = () => {
		const text = document.getElementById("addText").value
		if ( text == "") {

		}

		else {
			const {notelist} = this.state
			notelist.push({ID: uuid.v4(), text: text})
			this.setState({notelist: notelist})
		}

	}

	deleteNote = (note) => {
		const {notelist} = this.state
		const i = notelist.indexOf(note)
		notelist.splice(i,1)
		this.setState({notelist: notelist})

	}




	render() {
		const { notelist } = this.state
		return (
			<div>
				<div className="noteCreator">
					<input id="addText" type="text"/>
					<button onClick = {this.addNote}>Legg til note</button>
				</div>
				{ notelist.map((note) => <Note key={note.ID} note={note} addNote={this.addNote} deleteNote={this.deleteNote}/>) }
			</div>
		)
	}
}