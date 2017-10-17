import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class NoteContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Notes</Text>
        <TextInput
          style={{height: '50%', borderColor: 'gray', borderWidth: 1, width: '90%'}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
