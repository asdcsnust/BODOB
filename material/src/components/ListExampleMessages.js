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
import Slider from 'material-ui/Slider';
import FullscreenDialog from 'material-ui-fullscreen-dialog'

import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel'
import { green400, green600, blue400, blue600, red400, red600, cyan500 } from 'material-ui/styles/colors'


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

const styles = {
  customWidth: {
    width: 150,
  },
};


const ListExampleMessages = () => (
  <div style = {{marginBottom : '60px'}} >
    <div>
      <List>
      <Subheader style={{ fontSize : '20px', fontWeight : 'bold'}}>공종추가</Subheader>
      <Divider />

      <Divider />
      <Subheader style={{ fontSize : '20px', fontWeight : 'bold'}}>통계</Subheader>


      <Divider />

        <div>
          프로젝트
          <div>
            <ChipInput
              style = {{width : "100%"}}
              defaultValue={['동대문장애인 복지관','신도림 대림아파트 1차','신도림 대림아파트 2차']}
              onChange={(chips) => handleChange(chips)}
            />
          </div>
        </div>
          기간설정
      <Divider />

        <ListItem
         leftAvatar={<Avatar src="/images/home1.jpg" />}
         rightIconButton={rightIconMenu}
         primaryText="철거"
         secondaryText={
           <p>
             <span style={{color: darkBlack}}>청운철거 07:00~09:00 투입인원 : 6명</span>
           </p>
         }
         secondaryTextLines={2}
       />

       <ListItem
        leftAvatar={<Avatar src="/images/home2.jpg" />}
        rightIconButton={rightIconMenu}
        primaryText="전기"
        secondaryText={
          <p>
            <span style={{color: darkBlack}}>청운전기 07:00~17:00 투입인원 : 6명</span>
          </p>
        }
        secondaryTextLines={2}
      />

      <Divider />

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
