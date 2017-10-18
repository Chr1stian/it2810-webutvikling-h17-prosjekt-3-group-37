//Import React and useful components
import React from 'react';
import { StyleSheet, Text, View, TextInput, Keyboard, TouchableWithoutFeedback, AsyncStorage } from 'react-native';
import { TextField } from 'react-native-material-textfield'
import { Button } from 'react-native-elements';

export default class NoteContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  //Gets AsyncStorage and sets the state
  componentDidMount(){
    AsyncStorage.getItem('text', (err, result) => {
      this.setState({text: result})
    });
  }

  //Changes the state and  AsyncStorage when text changes
  handleChange = (text) => {
    this.setState({text: text.text});
    AsyncStorage.setItem('text', text.text);
  }

  //Deletes the content in the state and AsyncStorage
  handleDelete = (text) => {
    this.setState({text: ""});
    AsyncStorage.setItem('text', "");
  }

  render() {

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.text}>Notes</Text>
          <TextField
            label=""
            inputContainerStyle = {styles.textInputContainer}
            containerStyle = {styles.textContainer}
            //style={styles.textInputContainer}
            onChangeText={(text) => this.handleChange({text})}
            value={this.state.text}
            multiline={true}
            placeholder="Do you have anything on your mind?"
          />
          <Button
            backgroundColor={'#d32f2f'}
            icon={{name: 'delete-sweep'}}
            onPress={this.handleDelete}
            title="Delete note"
            style={styles.button}
            accessibilityLabel="Will you delete?"
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
//Defines styles for the elements
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: '5%',
    backgroundColor: '#ADD8E6',
  },
  textInputContainer: {
    height: '100%',
    borderColor: 'gray',
    borderWidth: 2,
    width: '100%',
    backgroundColor: '#fff',
    paddingLeft: 3,
    paddingTop: 3,
  },
  textContainer: {
    paddingTop: 0,
    width: '100%',
    maxWidth: '80%',
    height: '50%',
    marginBottom: 15,
    marginTop: 5,
  },
  text: {
    fontSize: 25,
  },
  button: {
    //marginTop: 15,
  },
});
