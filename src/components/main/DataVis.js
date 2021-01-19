import React, { useEffect, useState, useRef } from 'react'

import CreateVis from '../Visualisation'
import fetchData from '../../helper/fetchData'
import Header from '../Header'
import DataEx1 from './intro/DataEx1'
import DataEx2 from './intro/DataEx2'
import Filter from './Filter'
import Vis1 from './intro/Vis1'
import Vis2 from './intro/Vis2'
import FilterIntro from './intro/FilterIntro'


function DataVis(){
     
  const [facebookState, setFacebookStates] = useState(null)
  const [filterData, setFilterData] = useState(null)
  const [barState, setBarstate] = useState(null)
  const [highLowGenderState, setHighLowGenderState] = useState(null)


  useEffect(() => {
fetchData(setFacebookStates, setFilterData, setBarstate, setHighLowGenderState)
  }, [])

    // useEffect(() => {
    //   localStorage.setItem('filterData', JSON.stringify(filterData))
    // }, [filterData])
  
    return(
        <div className="SVGdiv">
          <Header />
          <DataEx1 />
          <Vis1 setBarstate={setBarstate} barState={barState} highLowGenderState={highLowGenderState}/>
          <FilterIntro />
          <DataEx2 />
          <Vis2 />
          <Filter facebookState={facebookState} setFilterData={setFilterData} filterData={filterData}/>
          <CreateVis facebookState={facebookState} filterData={filterData} />
        </div>
    )
}

export default DataVis

