import React, { Component } from 'react';
import TodoItems from './TodoItems';
import './TodoList.css';

class TodoList extends React.Component {
  constructor(props, context){
    super(props, context);

    this.state = {
      items:[]
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);

  }

  addItem (e){
    let itemsArray = this.state.items;

    if (this._inputElement.value !== "") {
      itemsArray.unshift(
        {
          text: this._inputElement.value,
          key: Date.now()
        }
      );

    this.setState({
      items: itemsArray
    });

    this._inputElement.value = "";
  }

  console.log(itemsArray);

  e.preventDefault();
}

deleteItem(key) {
  let filteredItems = this.state.items.filter(function (item) {
    return (item.key !== key);
  });

  this.setState({
    items: filteredItems
  });
}

  render() {
    return (
        <div className="todoListAll">
          <div className="todoListContainer">
            <form onSubmit={this.addItem}>
              <input ref={(a) => this._inputElement = a}
              placeholder="enter task">
              </input>
              <button type="submit">add</button>
            </form>
          </div>
          <TodoItems entries={this.state.items}
          delete={this.deleteItem}/>
      </div>
    );
  }
};

export default TodoList;
