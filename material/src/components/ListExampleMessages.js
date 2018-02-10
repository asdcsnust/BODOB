import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';
import ChipInput from 'material-ui-chip-input';
import RaisedButton from 'material-ui/RaisedButton';
import {fullWhite} from 'material-ui/styles/colors';
import FontIcon from 'material-ui/FontIcon';

const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
);

const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Reply</MenuItem>
    <MenuItem>Forward</MenuItem>
    <MenuItem>Delete</MenuItem>
  </IconMenu>
);

const picStyle = {
  top : '30px',
  width : '80px',
  height : '80px'
};

const textStyle = {
  paddingLeft : '40px',
  paddingTop : '-20px',
  paddingBottom : '-20px'
}

const ListExampleMessages = () => (
  <div>
    <div>
      <List>
        <Subheader style={{ fontSize : '20px', fontWeight : 'bold'}}>동대문장애인복지관</Subheader>

        <Divider />

        2017.10.21

        <Subheader style={{ fontSize : '20px', fontWeight : 'bold'}}>프로젝트 생성</Subheader>

        <ListItem
          primaryText={
            <div>
            프로젝트 명
            <TextField
              fullWidth = {true}
              hintText="프로젝트 명을 입력하세요."
            />
            </div>
        }
        />


        <ListItem
          leftAvatar={<Avatar style = {picStyle} src="images/pic1.jpg" />}
          primaryText={
            <div style={textStyle}>
             공사시작
                 <DatePicker hintText="시작날짜를 입력하세요." container="inline" />
             공사종료
                 <DatePicker hintText="종료날짜를 입력하세요." container="inline" />
             </div>
          }
        />

        <ListItem
          primaryText={
            <div>
              현장소장
              <div>
                <ChipInput
                  style = {{width : "100%"}}
                  defaultValue={['유무영']}
                  onChange={(chips) => handleChange(chips)}
                />
              </div>
            </div>
          }
        />

        <ListItem
          primaryText={
            <div>
              현장스텝
              <div>
                <ChipInput
                 style = {{width : "100%"}}
                  defaultValue={['유성근','정서경','박미리']}
                  onChange={(chips) => handleChange(chips)}
                />
              </div>
            </div>
          }
        />

        <ListItem
          primaryText={
            <div>
              설계담당
              <div>
                <ChipInput
                 style = {{width : "100%"}}
                  defaultValue={['최은혜','이세형','김재하']}
                  onChange={(chips) => handleChange(chips)}
                />
              </div>
            </div>
          }
        />

        <ListItem
          primaryText={
            <div>
              PM
              <div>
                <ChipInput
                 style = {{width : "100%"}}
                  defaultValue={['유무영']}
                  onChange={(chips) => handleChange(chips)}
                />
              </div>
            </div>
          }
        />

        <ListItem
          primaryText={
            <div>
              용도
              <div>
                <ChipInput
                 style = {{width : "100%"}}
                  defaultValue={['주거','상업시설']}
                  onChange={(chips) => handleChange(chips)}
                />
              </div>
            </div>
          }
        />

      </List>
    </div>
    <RaisedButton backgroundColor="#757575" labelColor = "white" label="수정" fullWidth={true} />
  </div>

);

export default ListExampleMessages;
