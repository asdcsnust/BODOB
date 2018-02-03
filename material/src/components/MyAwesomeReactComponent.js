import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';



const MyAwesomeReactComponent = () => (
<div>
  <AppBar
    title="Title"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
  <RaisedButton label="Default" />
  <RaisedButton label="Default2" />
 </div>
);

export default MyAwesomeReactComponent;
