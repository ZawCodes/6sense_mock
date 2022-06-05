import React from 'react'
import ActivityProfile from './ActivityProfile/ActivityProfile'
import './Home.css'
import Leftbar from './Leftbar/Leftbar'
import Tabsbar from './Tabsbar/Tabsbar'
import TeamCard from './TeamCard/TeamCard'
import Topbar from './Topbar/Topbar'

const Home = () => {
  return (
    <>
        <div className='page-wrap'>
            <div className='leftbar-wrap'><Leftbar/></div>
            <div className='main-wrap'>
                <Topbar />
                <Tabsbar />
                <section className='home-section'>
                  <div className='team-wrap'>
                    <div className='tab-title'>
                      <span>All Teams</span>
                      <span>Showing 65 out of 65 teams</span>
                    </div>
                    <div className='card-wrap'>
                      <TeamCard />
                      <TeamCard />
                      <TeamCard />
                      <TeamCard />
                      <TeamCard />
                      <TeamCard />
                      <TeamCard />
                      <TeamCard />
                      <TeamCard />
                      <TeamCard />
                      <TeamCard />
                      <TeamCard />
                      <TeamCard />
                      <TeamCard />
                      <TeamCard />
                      <TeamCard />
                      <TeamCard />
                      <TeamCard />
                    </div>
                  </div>
                  <div className='activity-wrap'>
                    <div>
                      Activity
                    </div>
                    <div className='activity-profile-wrap'>
                      <ActivityProfile />
                      <ActivityProfile />
                      <ActivityProfile />
                      <ActivityProfile />
                      <ActivityProfile />
                      <ActivityProfile />
                      <ActivityProfile />
                      <ActivityProfile />
                      <ActivityProfile />
                      <ActivityProfile />
                      <ActivityProfile />
                      <ActivityProfile />
                      <ActivityProfile />
                      <ActivityProfile />
                      <ActivityProfile />
                      <ActivityProfile />
                      <ActivityProfile />
                      <ActivityProfile />
                    </div>
                  </div>
                </section>
            </div>
        </div>
    </>
  )
}

export default Home