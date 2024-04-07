import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MesageContainer from '../../components/messages/MesageContainer'

const Home = () => {
  return (
    <div className="flex h-full md:w-[900px] sm:w-[600px] sm:h-[450px] md:h-[550px] bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-90 border border-gray-100">
      <Sidebar />
      <MesageContainer />
    </div>
  )
}

export default Home


/* starter code for Home

import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MesageContainer from '../../components/messages/MesageContainer'

const Home = () => {
  return (
    <div className="flex h-full md:w-[900px] sm:w-[600px] sm:h-[450px] md:h-[550px] bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-90 border border-gray-100">
      <Sidebar />
      <MesageContainer />
    </div>
  )
}

export default Home */