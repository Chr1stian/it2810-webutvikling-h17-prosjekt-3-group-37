import React from 'react';
import { StyleSheet, Text, View, TextInput, Keyboard, TouchableWithoutFeedback, AsyncStorage } from 'react-native';
import { TextField } from 'react-native-material-textfield'
import { Button } from 'react-native-elements';

export default class NoteContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  componentDidMount(){
    AsyncStorage.getItem('text', (err, result) => {
      console.log("restult:" + result);
      this.setState({text: result})
    });
  }

  handleChange = (text) => {
    this.setState({text: text.text});
    AsyncStorage.setItem('text', text.text);
  }

  handleDelete = (text) => {
    this.setState({text: ""});
    AsyncStorage.setItem('text', "");
    console.log("Deleted");
  }

  render() {

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.text}>Notes</Text>
          <TextInput
            style={styles.textInputContainer}
            onChangeText={(text) => this.handleChange({text})}
            value={this.state.text}
            multiline={true}
            placeholder="Do you have anything on your mind?"
          />
          <Button
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: '5%',
  },
  textInputContainer: {
    height: '60%',
    borderColor: 'gray',
    borderWidth: 1,
    maxWidth: '90%',
    width: '100%',
  },
  textContainer: {
    width: '100%',
    maxWidth: '90%',
  },
  text: {
    fontSize: 25,
  },
  button: {
    marginTop: 15
  }
});
