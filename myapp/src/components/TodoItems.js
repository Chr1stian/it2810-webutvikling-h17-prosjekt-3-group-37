import React, { Component } from 'react';
import Card from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

class TodoItems extends Component {
  constructor(props, context) {
    super(props, context);

    this.createTasks = this.createTasks.bind(this);
    this.delete = this.delete.bind(this);

  }
  delete(key) {
    this.props.delete(key);
  }

  createTasks(item) {
    return (
      <Card key={item.key}>
        <li onClick={(e) => this.delete(item.key, e)}
          key={item.key}>{item.text}</li>
      </Card>
    )
  }

  render() {
    let todoEntries = this.props.entries;
    let listItems = todoEntries.map(this.createTasks);

    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>

          <ul className="theList">
            {listItems}


          </ul>

      </MuiThemeProvider>
    );
  }
};

export default TodoItems;
