import React, {useRef} from 'react'

import {
    scaleLinear,
    max
} from 'd3'



  function CreateVis({ facebookState }){
    if(facebookState){


    const data = facebookState.age_gender_target;
    console.log(data)

    const title = 'Datavis FTM'

    const xValue = d => d.ad_delivery_start_time
    const xAxisLabel = 'Datum'

    const yValue = d => d.advertiser_name
    const yAxisLabel = 'Partijen'

    // const yScale = scalelinear()
    //     .domain(extent(data, yValue))
    
    const xScale = scaleLinear()
        .domain([0, max(data, d => d.avarageImpress)])
        .range([20, 200])

        console.log(xScale.domain())








        
       return(
            <div className='d3div'>
                <h1>Hi Visualisation</h1>
                <svg width="100%" height="100vh">
                <g className="yAxis">
                <g className='rect'>
                {facebookState.age_gender_target.map((result, index) =>(
                     <circle key={index} r={xScale(result.avarageImpress)} height="10px" fill="black" />
                    ))} 
                    </g>
                </g>
                
 
                </svg>

            </div>
        )
    } else{
        return null
    }
}

export default CreateVis