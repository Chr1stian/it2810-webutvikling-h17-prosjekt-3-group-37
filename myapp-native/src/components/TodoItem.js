import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class TodoItem extends React.Component {

  deleteTodoItem = () => {
    this.props.deleteTodoItem(this.props.todoItem);
  }

  setStatusTodoItem = () => {
    this.props.setStatusTodoItem(this.props.todoItem);
  }


  render() {

    let { todoItem } = this.props;

    let statusText = todoItem.isfinished ? "Undone" : "Done";
    return (
      <View>
        <View>
          <Text>{todoItem.title}</Text>
          <Text>{todoItem.text}</Text>
        </View>
        <View>
          <Button
            title={statusText}
            onPress={this.setStatusTodoItem}

          />
          <Button
            title="Delete"
            onPress={this.deleteTodoItem}
          />
        </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  }

});
