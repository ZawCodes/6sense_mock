import React, {useState, useEffect} from 'react'
import ActivityProfile from './ActivityProfile/ActivityProfile'
import './Home.css'
import Leftbar from './Leftbar/Leftbar'
import Tabsbar from './Tabsbar/Tabsbar'
import TeamCard from './TeamCard/TeamCard'
import Topbar from './Topbar/Topbar'
import mockData from '../assets/mockData'

const Home = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [teamData, setTeamData] = useState(mockData.teams);

  useEffect(() => {
    console.log('mockData', mockData.teams, 'type', typeof(mockData.teams));
    filterMock();
  }, [activeTab])

  const currentTab = (event) => {
    console.log('currentTab', event);
    // console.log('filter array ' + filterMock());
    setActiveTab(event);
  }
  const filterMock = () => {
    if(activeTab == 'Favorites') {
      console.log('Favorites', mockData.teams.filter(obj => obj.is_favorited === true));
      setTeamData(mockData.teams.filter(obj => obj.is_favorited === true));
    }
    if(activeTab == 'Archived') {
      console.log('Archived', mockData.teams.filter(obj => obj.is_archived === true));
      setTeamData(mockData.teams.filter(obj => obj.is_archived === true));
    }
    if(activeTab == 'All') {
      console.log('all', mockData.teams);
      setTeamData(mockData.teams);
    }
    
  }
  
  return (
    <>
        <div className='page-wrap'>
            <div className='leftbar-wrap'><Leftbar/></div>
            <div className='main-wrap'>
                <Topbar profileValue={mockData.current_user}/>
                <Tabsbar getCurrentTab={currentTab} currentActive={activeTab}/>
                <section className='home-section'>
                  <div className='team-wrap'>
                    <div className='tab-title'>
                      <span>All Teams</span>
                      <span>Showing {mockData.teams.length} out of {mockData.teams.length} teams</span>
                    </div>
                    <div className='card-wrap'>
                    {teamData.map((value, index) => {
                         return <TeamCard key={index} teamValue={value}/>
                     })}
                    </div>
                  </div>
                  <div className='activity-wrap'>
                    <div>
                      Activity
                    </div>
                    <div className='activity-profile-wrap'>
                    {mockData.activities.map((value, index) => {
                         return <ActivityProfile key={index} actValue={value}/>
                     })}
                    </div>
                  </div>
                </section>
            </div>
        </div>
    </>
  )
}

export default Home