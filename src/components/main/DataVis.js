import React, { useEffect, useState } from 'react'

import CreateVis from '../Visualisation'
import fetchData from '../../helper/fetchData'

function DataVis(){
     
  const [facebookState, setFacebookStates] = useState(null)


  useEffect(() => {
fetchData(setFacebookStates)
  }, [])

    // useEffect(() => {
    //   localStorage.setItem('filterData', JSON.stringify(filterData))
    // }, [filterData])
  
    return(
        <div className="SVGdiv">
          <h1>Instance bubble chart</h1>
          <CreateVis facebookState={facebookState} />
        </div>
    )
}

export default DataVis

