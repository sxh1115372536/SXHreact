import React, { Compinet, Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
import {Modal,Button,Icon} from 'antd'
import dayjs from 'dayjs'
import format from 'screenfull'
import screenfull from 'screenfull'
import{removeUserToken} from '../../../redux/action-creators'
import LinkButton from '../../../components/link-button'
import {reqWeather} from '../../../api'
import './index.less'
@connect(
  state =>({username:state.user.user.username}),
  {removeUserToken}
)
@withRouter
class Header extends Component{
  state={
    currentTime:format(Date.now(),'yyyy-MM-dd HH:mm:ss'),
    dayPictureUrl:'',
    weather:'',
    isFullScreen:false,
  }
  logout=()=>{
    Modal.confirm({
      title:'登出确认',
      onOk:()=>{
        this.props.removeUserToken()
      },
      onCancel(){
        console.log('Cancel');
      },
    })
  }
  showWeather = async ()=>{
    const{dayPictureUrl,weather}=await reqWeather('北京')
    this.setState({
      dayPictureUrl,
      weather
    })
  }
  handleFullScreen = ()=>{
    if(screenfull.isEnabled){
      screenfull.toggle()
    }
  }
  componentDidMount(){
    this.intervalId = setInterval(() => {
      currentTime:dayjs().format('YYYY-MM-DD HH:mm:ss')
    }, 1000);
    this.showWeather()
    screenfull.onchange(()=>{
      this.setState({
        isFullScreen:!this.state.isFullScreen
      })
    })
  }
  componentWillUnmount(){
    clearInterval(this.intervalId)
  }
  render(){
    const path = this.props.location.pathname
    const {currentTime,dayPictureUrl,weather,isFullScreen}
    return(
      <div className="header">
        <div className="header-top">
          <Button size="small" onClick={this.handleFullScreen}>
            <Icon type={isFullScreen ? 'fullscreen-exit':'fullscreen'}/>
          </Button>&nbsp;
          <span>欢迎，{username}</span>
          <LinkButton onClick={this.logout}>退出</LinkButton>
        </div>
        <div className="header-bottom">
          <div className="header-bottom-left">{HeaderTitle}</div>
          <div className="header-bottom-right">
            <span>{currentTime}</span>
            <img src={dayPictureUrl} alt="weather"/>
            <span>{weather}</span>
          </div>
        </div>
      </div>
    )
  }
}
export default Header