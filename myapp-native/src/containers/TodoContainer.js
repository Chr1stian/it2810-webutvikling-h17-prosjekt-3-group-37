import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class TodoContainer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Todo</Text>
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