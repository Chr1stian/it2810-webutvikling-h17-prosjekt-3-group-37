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

    //Prepare styles based on finished status
    let statusText = todoItem.finished ? "Undo" : "Done";
    let backgroundColor = todoItem.finished ? "#ddd" : "#fff";
    let redButton = "red"

    const styles = StyleSheet.create({
      container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        color: 'black',
        fontWeight: 'bold'

      },

      text: {
        color: 'black',

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

            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Delete"
              onPress={this.deleteTodoItem}
              color={redButton}



            />
          </View>
        </View>


      </View>
    );
  }
}
