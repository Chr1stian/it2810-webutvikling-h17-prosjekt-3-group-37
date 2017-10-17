import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import NoteContainer from '../containers/NoteContainer';
import TodoContainer from '../containers/TodoContainer';
import AppointmentContainer from '../containers/AppointmentContainer';

export const Tabs = TabNavigator({
  Note:{
    screen: NoteContainer,
  },
  Todo:{
    screen: TodoContainer,
  },
  Appointments:{
    screen: AppointmentContainer,
  }
});
