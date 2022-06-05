import React from 'react'
import './TeamCard.css'
import star_default from '../../assets/images/star_default.svg'
import conversation from '../../assets/images/icon-conversations-small.svg'
import lead from '../../assets/images/icon-leads-small.svg'

const TeamCard = () => {
  return (
    <>
        <div className='team-card'>
            <div className='team-card-title'>
                <img className='team-image' src='https://d1bb37ap2qun5z.cloudfront.net/shows/show_stub_avatars/000/000/970/twitter/shield-hero-avatar.jpg?1546779870'/>
                <div className='team-date'>
                    <span>Axa</span>
                    <span>Created 28 July 2018</span>
                </div>
                <div className='star-wrap'>
                    <img src={star_default}/>
                </div>
            </div>
            <div className='team-desc'>
                <p>
                AXA is a French multinational insurance firm headquartered in the 8th arrondissement ...
                </p>
            </div>
            <div className='team-footer'>
                <div>
                    <img src={conversation}/>
                    <span>20 Campaigns</span>
                </div>
                <div>
                    <img src={lead}/>
                    <span>1,500 Leads</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default TeamCard