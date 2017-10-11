import React, { Component } from 'react';
import './../style/note.css';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton'

export default class Note extends Component {

	

	deleteNote = () => {
		this.props.deleteNote(this.props.note)

	}

	editNote = () => {
		this.props.editNote(this.props.note)
		
	}


	render() {
		const {note} = this.props
		return (
			<div>
				<Card className="note">
					<div>
						<div className="noteText">
						<CardHeader className ="cardHeader" title={note.title} />
						<CardText className="cardText">{ note.text }</CardText>
						</div>
						<CardActions className="noteButtons">
							<FlatButton onClick = {this.editNote}>done</FlatButton>
							<FlatButton onClick = {this.deleteNote}>delete</FlatButton>
						</CardActions>
					</div>
				</Card>
			</div>
			)

	}


}
