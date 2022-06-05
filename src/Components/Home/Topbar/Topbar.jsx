import React from 'react'
import './Topbar.css'
import mail from '../../assets/images/icon-mail.svg'
import down from '../../assets/images/caret_down.svg'
import noti from '../../assets/images/noticount.svg'

const Topbar = () => {
  return (
    <>
        <header className='top-header'>
            <div className='app-info-wrap'>
                <span className='nharwhal'>NARWHAL</span>
                <span className='tab-name'>Teams</span>
            </div>
            <div className='account-info-wrap'>
                <span className='mail-wrap'><div className='noti'><span>3</span><img src={noti}/></div><img className='mail-icon' src={mail}/></span>
                <div className='profile-wrap'>
                    <span>Hello, John</span>
                    <img className='pro-pic' src='https://d1bb37ap2qun5z.cloudfront.net/profiles/profile_avatars/000/000/001/display/shimakaze-desu.jpg?1396709040'/>
                    <img className='down-icon' src={down}/>
                </div>
            </div>
        </header>
    </>
  )
}

export default Topbar