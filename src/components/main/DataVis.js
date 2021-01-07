import React, { useEffect, useState, useRef } from 'react'

import CreateVis from '../Visualisation'
import fetchData from '../../helper/fetchData'

function DataVis(){
     
  const [facebookState, setFacebookStates] = useState(null)
  const svgRef = useRef()

  useEffect(() => {
fetchData(setFacebookStates)
  }, [])

    // useEffect(() => {
    //   localStorage.setItem('filterData', JSON.stringify(filterData))
    // }, [filterData])
  
    return(
        <div className="SVGdiv">
          <h1>Instance bubble chart</h1>
          <CreateVis svgRef={svgRef} facebookState={facebookState} />
        </div>
    )
}

export default DataVis

