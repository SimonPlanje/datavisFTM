import React, { useEffect, useState, useRef } from 'react'

import CreateVis from '../Visualisation'
import fetchData from '../../helper/fetchData'
import Header from '../Header'
import DataEx1 from './intro/DataEx1'
import DataEx2 from './intro/DataEx2'
import Filter from './Filter'


function DataVis(){
     
  const [facebookState, setFacebookStates] = useState(null)
  const [filterData, setFilterData] = useState(null)


  useEffect(() => {
fetchData(setFacebookStates)
  }, [])

    // useEffect(() => {
    //   localStorage.setItem('filterData', JSON.stringify(filterData))
    // }, [filterData])
  
    return(
        <div className="SVGdiv">
          <Header />
          <DataEx1 />
          <DataEx2 />
          <Filter facebookState={facebookState} setFilterData={setFilterData} />
          <CreateVis facebookState={facebookState} />
        </div>
    )
}

export default DataVis

