import React, { useEffect, useState, useRef } from 'react'

import CreateVis from '../Visualisation'
import fetchData from '../../helper/fetchData'
import Header from '../Header'
import DataEx1 from './intro/DataEx1'
import DataEx2 from './intro/DataEx2'
import Filter from './Filter'
import Vis1 from './intro/Vis1'
import Vis2 from './intro/Vis2'
import VisBar1 from './intro/VisBar1'
import VisBar2 from './intro/VisBar2'
import VisBar3 from './intro/VisBar3'
import FilterIntro from './intro/FilterIntro'
import FilterIntro2 from './intro/FilterIntro2'
import LittleAgeFilter from './intro/LittleAgeFilter'


function DataVis(){
     
  const [facebookState, setFacebookStates] = useState(null)
  const [filterData, setFilterData] = useState(null)
  const [barState, setBarstate] = useState(null)
  const [highLowGenderState, setHighLowGenderState] = useState(null)
  
  const [filterAge, setFilterAge] = useState(null)


  const [dataAge, setDataAge] = useState(null)


  const [ageYoungBarState, setAgeYoungBarState] = useState(null)
  const [ageMidBarState, setAgeMidBarState] = useState(null)
  const [ageOldBarState, setAgeOldBarState] = useState(null)



  useEffect(() => {
fetchData(setFacebookStates, setFilterData, setBarstate, setHighLowGenderState, setDataAge, setAgeYoungBarState, setAgeOldBarState, setAgeMidBarState)
  }, [])

    // useEffect(() => {
    //   localStorage.setItem('filterData', JSON.stringify(filterData))
    // }, [filterData])
  
    return(
        <div className="SVGdiv">
          <Header />
          <DataEx1 />
          <Vis1 barState={barState} highLowGenderState={highLowGenderState}/>
          <FilterIntro />
          <DataEx2 />
          <Vis2 dataAge={dataAge} highLowGenderState={highLowGenderState} filterAge={filterAge} setFilterAge={setFilterAge} />
          {/* <VisBar1 ageYoungBarState={ageYoungBarState}/>
          <VisBar2 ageMidBarState={ageMidBarState}/>
          <VisBar3 ageOldBarState={ageOldBarState}/> */}
          <FilterIntro2 />
          <Filter facebookState={facebookState} setFilterData={setFilterData} filterData={filterData}/>
          <CreateVis facebookState={facebookState} filterData={filterData} />
        </div>
    )
}

export default DataVis

