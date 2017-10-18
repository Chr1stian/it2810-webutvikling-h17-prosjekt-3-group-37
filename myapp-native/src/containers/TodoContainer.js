import React from 'react';
import { ScrollView, Button, TextInput, AsyncStorage, StyleSheet, Text, View } from 'react-native';
import TodoItem from './../components/TodoItem';
import Storage from 'react-native-storage';


export default class TodoContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todolist: [],
      titleInput: "",
      textInput: "",
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

    storage.load({
      key: 'todoitems',
    }).then(ret =>{
      this.setState({
        todolist: ret || [];
      })
    })

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
      key: 'todoitems',
      data: todolist
    })
  }

  deleteTodoItem = (todoItem) => {
    let {todolist} = this.state;
    let i = todolist.indexOf(todoItem);
    todolist.splice(i, 1);
    this.setState({todolist: todolist});
    storage.save({
      key: 'todoitems', 
      data: todolist
    })
  }

  setStatusTodoItem = (todoItem) => {
    let {todolist} = this.state;
    let i = todolist.indexOf(todoItem);
    todolist[i].finished = !todolist[i].finished;
    this.setState({todolist: todolist});
    storage.save({
      key: 'todoitems', 
      data: todolist
    })
  }

  toggleDone = () => {    
    let {todolist, buttonText, toggleStatus} = this.state;
    let newButtonText = toggleStatus ? "Show finished tasks" : "Hide finished tasks";
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
      showTasks = null;
    } else {
      if (todolist.length-notDoneTodoList.length !== 0) {
        //let buttonStyle = {backgroundColor: "#555555", height: "auto", marginTop: "20px", marginBottom: "-20px"}
        showTasks = <Button color={"#303030"} onPress={this.toggleDone} title={buttonText}
        />;
      }
    }

    return (
      <View style={styles.container}>
        <View style={{backgroundColor: "#555555"}}>
          <View style={styles.inputs}>
            <TextInput
            style={{height: 40, flex: 1, color: "#fff"}}
            onChangeText={(titleInput) => this.setState({titleInput})}
            value={this.state.titleInput}
            placeholder="Add task"/>
            <TextInput
            style={{height: 40, flex: 1, color: "#fff"}}
            onChangeText={(textInput) => this.setState({textInput})}
            value={this.state.textInput}
            placeholder="Optional comment"/>
          </View>
          <View style={{marginBottom: 15}}>
            <View style={{marginLeft: 10, marginRight: 10, alignItems: "flex-end"}}>
              <Button 
                color={"#303030"}
                onPress={this.addTodoItem}
                title="Add todo"
                style={{flex: 0.5}}
              />
            </View>
          </View>
        </View>
        <ScrollView View style={{flex: 0.8}}>
          {notDoneTodoList}
          {showTasks}
          {doneTodoList}
          <View style={{height: 100}}>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ADD8E6',
    flex: 1,
  },
  inputs: {
    flexDirection: 'row',
    margin: 10
  }
});
