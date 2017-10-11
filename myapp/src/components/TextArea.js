import React, { Component}  from 'react';
import './../style/textarea.css';

class TextArea extends Component{
  constructor(props, context){
    super(props, context);

    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

handleChange(event){
  this.setState({value: event.target.value});
  localStorage.setItem('value', event.target.value);
}

    render(){
      return(
        <div className="textArea">
          <form>
            <textarea id="textarena" value= {localStorage.getItem('value', this.state.value)} onChange={this.handleChange}>
            </textarea>
          </form>
      </div>
    );
  }
}

export default TextArea;
