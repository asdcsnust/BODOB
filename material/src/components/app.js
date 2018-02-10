import React from 'react';
import ReactDOM from 'react-dom';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import AppBarExampleIcon from './AppBarExampleIcon';
import AvatarExampleSimple from './AvatarExampleSimple';
import AutoCompleteExampleDataSource from './AutoCompleteExampleDataSource';
import BadgeExampleSimple from './BadgeExampleSimple';
import BadgeExampleContent from './BadgeExampleContent';
import FlatButtonExampleSimple from './FlatButtonExampleSimple';
import FlatButtonExampleComplex from './FlatButtonExampleComplex';
import FlatButtonExampleIcon from './FlatButtonExampleIcon';
import RaisedButtonExampleSimple from './RaisedButtonExampleSimple';
import RaisedButtonExampleComplex from './RaisedButtonExampleComplex';
import RaisedButtonExampleIcon from './RaisedButtonExampleIcon';
import FloatingActionButtonExampleSimple from './FloatingActionButtonExampleSimple';
import CardExampleWithAvatar from './CardExampleWithAvatar';
import ChipExampleSimple from './ChipExampleSimple';
import DatePickerExampleSimple from './DatePickerExampleSimple';
import DatePickerExampleInline from './DatePickerExampleInline';
import ListExampleMessages from './ListExampleMessages';
<<<<<<< HEAD
import BottomNavigationExampleSimple from './BottomNavigationExampleSimple';
=======
import TextFieldExampleSimple from './TextFieldExampleSimple';
>>>>>>> 3ea70e71b8b8ea4f05f81c3a38dfa3287fc226a4


const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    {/*
    <AppBarExampleIcon />
    <ListExampleMessages />
<<<<<<< HEAD
    */}
    <BottomNavigationExampleSimple/>
=======
>>>>>>> 3ea70e71b8b8ea4f05f81c3a38dfa3287fc226a4
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
