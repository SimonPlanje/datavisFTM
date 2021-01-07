import React, {useRef} from 'react'

import {
    select,
    scaleLinear,
    max,
    scaleTime,
    extent,
    scaleOrdinal
} from 'd3'



  function CreateVis({ facebookState, svgRef }){

    if(facebookState){


    const data = facebookState.age_gender_target;

    //filter out all the unique companies
    const uniqueObjects = [...new Map(data.map(item => [item.advertiser_name, item])).values()]
    //source: https://dev.to/marinamosti/removing-duplicates-in-an-array-of-objects-in-js-with-sets-3fep
    console.log(uniqueObjects)

    
    const rScale = scaleLinear()
        .domain([0, max(data, d => d.avarageImpress)])
        .range([3, 20])

    const yScale = scaleOrdinal()
        .domain([uniqueObjects.map(d => d.advertiser_name)])
        .range([0, "100%"])



    const xScale = scaleTime()
        .domain(extent(data, d => d.ad_delivery_start_time))
        .range([0, "100%"])

  

        console.log(xScale.domain())
        console.log(yScale.domain())

        
       return(
            <div className='d3div'>
                <svg className="SVG" width="100vh" height="100vh">


                    <g className='visBox'>
                {data.map((result, index) =>(
                     <circle key={index} cy={yScale(result.advertiser_name)} cx={xScale(result.ad_delivery_start_time)} r={rScale(result.avarageImpress)} fill="black" />
                    ))} 
                    </g>
                    <g className='sizeCircle'>
                {data.map((result, index) =>(
                     <circle key={index} r={rScale(result.avarageImpress)} height="10px" fill="black" />
                    ))} 
                    </g>

 
                </svg>

            </div>
        )
    } else{
        return null
    }
}

export default CreateVis