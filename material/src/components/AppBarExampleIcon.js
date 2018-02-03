import React from 'react';
import AppBar from 'material-ui/AppBar';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */

const imgStyle = {
  display:'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop:'10px'
};

const imgStyle1 = {
  width:'',
  height:''
}

var main = "main";
const AppBarExampleIcon = () => (
  <AppBar
    title={<img style={imgStyle} src="/images/logo.png"/>}
    iconElementRight={<img style={imgStyle1} src="/images/alarm.png"/>}
    style={{ backgroundColor: '#757575'}}
  />
);

export default AppBarExampleIcon;
