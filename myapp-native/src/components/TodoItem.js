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

    let statusText = todoItem.finished ? "Undo" : "Done";
    let backgroundColor = todoItem.finished ? "#007a87" : "#555555";
    let buttonColor = todoItem.finished ? "#0097a7" : "#303030";

    const styles = StyleSheet.create({
      container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
        marginTop: 10,
        backgroundColor: backgroundColor,
        borderRadius: 1,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 5,
        paddingRight: 5,
      },

      buttonContainer: {
        marginLeft: 5,
      },

      buttons: {
        flexDirection: 'row',
        margin: 5,
      },

      textContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        margin: 5,
        flex: 1

      },

      title: {
        color: 'white',
        fontWeight: 'bold'

      },

      text: {
        color: 'white',

      }


    });

    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{todoItem.title}</Text>
          <Text style={styles.text}>{todoItem.text}</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.buttonContainer}>
            <Button
              title={statusText}
              onPress={this.setStatusTodoItem}
              color={buttonColor}

            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Delete"
              onPress={this.deleteTodoItem}
              color={buttonColor}

              

            />
          </View>
        </View>


      </View>
    );
  }
}
