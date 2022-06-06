import React from 'react'
import './ActivityProfile.css'

const ActivityProfile = (props) => {
  return (
    <>
        <div className='Activity-profile-card'>
            <div>
                <img src={props.actValue.person.avatar}/>
            </div>
            <div>
                {
                  props.actValue.action == 'increased_quota' && 
                  <div><span>{props.actValue.person.name}</span> increased <span>{props.actValue.target}</span>'s quota.</div>
                }
                {
                  props.actValue.action == 'added_leads' && 
                  <div><span>{props.actValue.person.name}</span> added new leads to <span>{props.actValue.target}.</span></div>
                }
                {
                  props.actValue.action == 'archived_team' && 
                  <div><span>{props.actValue.person.name}</span> archived the team <span>{props.actValue.target}.</span></div>
                }
                <div>{props.actValue.created_at}</div>
            </div>
        </div>
    </>
  )
}

export default ActivityProfile