import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import NoteContainer from '../containers/NoteContainer';
import TodoContainer from '../containers/TodoContainer';
import AppointmentContainer from '../containers/AppointmentContainer';

export const Tabs = TabNavigator({
  Note:{
    screen: NoteContainer,
    navigationOptions: {
      tabBarLaber: 'Note',
      tabBarIcon: ({ tintColor }) => <Icon name="note" size={35} color={tintColor}/>
    },
  },
  Todo:{
    screen: TodoContainer,
    navigationOptions: {
      tabBarLaber: 'Todo',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor}/>
    },
  },
  Appointments:{
    screen: AppointmentContainer,
    navigationOptions: {
      tabBarLaber: 'Appointments',
      tabBarIcon: ({ tintColor }) => <Icon name="event" size={35} color={tintColor}/>
    },
  }
});
