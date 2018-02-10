import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import IconStarHalf from 'material-ui/svg-icons/toggle/star-half';
import IconAssessment from 'material-ui/svg-icons/action/assessment';
import IconDateRange from 'material-ui/svg-icons/action/date-range';
import IconFolder from 'material-ui/svg-icons/file/folder';

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const starHalf = <IconStarHalf />;
const assessment = <IconAssessment />;
const dateRange  = <IconDateRange />;
const favoritesIcon = <FontIcon className="material-icons">Favorites</FontIcon>;;
const folder = <IconFolder />;
const nearbyIcon = <IconLocationOn />;
const css = {
  position: 'fixed',
  bottom: '0px',
  width: '100%',

};
const css2 = {
  backgroundColor: '#6e6e6e'
};
/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class BottomNavigationExampleSimple extends Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index});

  render() {
    return (
      <Paper style={css} zDepth={1}>
        <BottomNavigation style={css2}  selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="프로젝트"
            icon={starHalf}
            color="#ffffff"
            onClick={() => this.select(0)}
          />
          <BottomNavigationItem
            label="공사일보"
            icon={assessment}
            onClick={() => this.select(1)}
          />
          <BottomNavigationItem
            label="일별보기"
            icon={dateRange}
            onClick={() => this.select(2)}
          />
          <BottomNavigationItem
            label="공사문서"
            icon={folder}
            onClick={() => this.select(3)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default BottomNavigationExampleSimple;
