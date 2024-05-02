import React from 'react'
import Header from '../component/Header'
import Clients from '../component/Clients'
import Welcome from '../component/Welcome'
import Speakers from '../component/Speakers'
import Location from '../component/Location'
import Ticket from '../component/Ticket'
import Attend from '../component/Attend'
import Event from '../component/Event'
import Count from '../component/Count'

const Home = () => {
  return (
    <div>
      <Header />
      <Clients />
      <Welcome />
      <Speakers />
      <Location />
      <Ticket />
      <Attend />
     <Event />
     <Count />
    </div>
  )
}

export default Home