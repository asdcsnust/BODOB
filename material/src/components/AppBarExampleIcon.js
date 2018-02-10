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
  height : '25px',
  marginTop : '10px',
  marginRight : '10px'
};

const imgStyle2 = {
  height : '25px',
  marginTop : '10px'
};


var main = "main";
const AppBarExampleIcon = () => (
  <AppBar
    title={<img style={imgStyle} src="/images/logo.png"/>}
    iconElementRight={
      <div>
        <img style={imgStyle1} src="/images/bar-chart.png"/>
        <img style={imgStyle2} src="/images/alarm.png"/>
      </div>
    }
    style={{ backgroundColor: '#757575'}}
  />
);

export default AppBarExampleIcon;
