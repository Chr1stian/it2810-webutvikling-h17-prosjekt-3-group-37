import React, { Component } from 'react';
import './../style/note.css';

export default class Note extends Component {

	constructor(props){
		super(props)



	}

	deleteNote = () => {
		this.props.deleteNote(this.props.note)

	}


	render() {
		const {note} = this.props
		return (
			<div>
				<div className="note">
					<p>{ note.text }</p>
					<div className="noteButtons">
						<button onClick = {this.deleteNote}>Slettmeg.no</button>
					</div>
				</div>
			</div>
			)

	}


}