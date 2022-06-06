import React, {useEffect} from 'react'
import './TeamCard.css'
import star_default from '../../assets/images/star_default.svg'
import star_active from '../../assets/images/star_active.svg'
import conversation from '../../assets/images/icon-conversations-small.svg'
import lead from '../../assets/images/icon-leads-small.svg'

const TeamCard = (props) => {
    useEffect(() => {
        console.log('team data', props);
      })
  return (
    <>
        <div className={`team-card ${props.teamValue.is_archived ? 'team-archived': ''}`}>
            <div className='team-card-title'>
                <img className='team-image' src={props.teamValue.image}/>
                <div className='team-date'>
                    <span>{props.teamValue.name}</span>
                    <span>{props.teamValue.is_archived ? 'Archived on ' + props.teamValue.archived_at : props.teamValue.created_at}</span>
                </div>
                <div className='star-wrap'>
                    <img src={props.teamValue.is_favorited? star_active : star_default}/>
                </div>
            </div>
            <div className='team-desc'>
                <p>
                {props.teamValue.description}
                </p>
            </div>
            <div className='team-footer'>
                <div>
                    <img src={conversation}/>
                    <span>{props.teamValue.campaigns_count} Campaigns</span>
                </div>
                <div>
                    <img src={lead}/>
                    <span>{props.teamValue.leads_count} Leads</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default TeamCard