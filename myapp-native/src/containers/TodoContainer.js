import React from 'react';
import { Button, TextInput, AsyncStorage, StyleSheet, Text, View } from 'react-native';
import TodoItem from './../components/TodoItem';
import Storage from 'react-native-storage';


export default class TodoContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todolist: [],
      titleInput: "Add title",
      textInput: "optional",
      buttonText: "Show finished tasks",
      toggleStatus: false
    }
  }


  componentWillMount = () => {
    var storage = new Storage({
      storageBackend: AsyncStorage,
      defaultExpires: null,
      sync: {},

    })
    global.storage = storage
      /*storage.save({
        key: 'todoitems2',
        data: [{ID: "123", title: "qerqwe", text: "socool", finished: false}]
      })*/

      storage.load({key: 'todoitems2'}).then(ret =>{console.log(ret)})


      //const value = AsyncStorage.getItem('todoitems2');
      storage.load({
        key: 'todoitems2',
      }).then(ret =>{
        this.setState({
          todolist: ret || []
        })
        //todolist = ret
      })
      /*if (todolist !== null){
        this.setState({
          todolist: todolist || []
        })
      }*/

  }

  guid = () => {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }

  addTodoItem = () => {

    let {todolist, titleInput, textInput} = this.state;
    //Adds the new todo item to the list
    todolist.push({ID: this.guid(), title: titleInput, text: textInput, finished: false});
    this.setState({todolist: todolist});
      storage.save({
        key: 'todoitems2',
        data: todolist
      })
    //Resets the new Todo item fields and hint text
    //FIX THIS
  }

    deleteTodoItem = (todoItem) => {
    let {todolist} = this.state;
    let i = todolist.indexOf(todoItem);
    todolist.splice(i, 1);
    this.setState({todolist: todolist});
    storage.save({
      key: 'todoitems2', 
      data: todolist
    })
  }

    setStatusTodoItem = (todoItem) => {
    let {todolist} = this.state;
    let i = todolist.indexOf(todoItem);
    todolist[i].finished = !todolist[i].finished;
    this.setState({todolist: todolist});
    storage.save({
      key: 'todoitems2', 
      data: todolist
    })
  }

  toggleDone = () => {    
    let {todolist, buttonText, toggleStatus} = this.state;
    let newButtonText = toggleStatus ? "Hide finished tasks" : "Show finished tasks";
    this.setState({todolist: todolist, buttonText: newButtonText, toggleStatus: !toggleStatus});

  }

  render() {
    let {todolist, buttonText, toggleStatus } = this.state;

    let notDoneTodoList =
      todolist
        .filter(function (todoItem) {return !todoItem.finished})
        .map((todoItem) =>
          <TodoItem
            key={todoItem.ID}
            todoItem={todoItem}
            setStatusTodoItem={this.setStatusTodoItem}
            deleteTodoItem={this.deleteTodoItem}/>)

    let doneTodoList;
    if (toggleStatus) {
      doneTodoList = todolist
      .filter(function (todoItem) {return todoItem.finished})
      .map((todoItem) => 
        <TodoItem 
          key={todoItem.ID} 
          todoItem={todoItem} 
          setStatusTodoItem={this.setStatusTodoItem} 
          deleteTodoItem={this.deleteTodoItem}
        />
      );
    } else {
      doneTodoList = null;
    }

    let showTasks;
    if (todolist.length === 0) {
      showTasks = <Text>"You have no items todo"</Text>;
    } else {
      if (todolist.length-notDoneTodoList.length !== 0) {
        //let buttonStyle = {backgroundColor: "#555555", height: "auto", marginTop: "20px", marginBottom: "-20px"}
        showTasks = <Button onPress={this.toggleDone} title={buttonText}
        />;
      }
    }

    return (
      <View style={styles.container}>
        <View style={styles.inputs}>
        <TextInput
        style={{height: 40, flex: 1}}
        onChangeText={(titleInput) => this.setState({titleInput})}
        value={this.state.titleInput}
        placeholder="Hei"/>
        <TextInput
        style={{height: 40, flex: 1}}
        onChangeText={(textInput) => this.setState({textInput})}
        value={this.state.textInput}
        placeholder="Hei"/>
        </View>
        <Button
          onPress={this.addTodoItem}
          title="Add todo"
        />

        <View>
          {notDoneTodoList}
        </View>
        <View>
          {showTasks}
        </View>
        <View>
          {doneTodoList}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  inputs: {
    flexDirection: 'row',
  }
});
