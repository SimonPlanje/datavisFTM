import React, {useRef} from 'react'

import {
    select,
    scaleLinear,
    max,
    scaleTime,
    extent,
    scalePoint,
    axisLeft,
    axisBottom,
    } from 'd3'

  function CreateVis({ facebookState }){



    if(facebookState){
    const data = facebookState.age_gender_target;

    const svg = select('svg')

    const width = 960
    const height = 500

    const margin = { top: 60, right: 40, bottom: 88, left: 105 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    //define scales

    const xScale = scaleTime()
        .domain(extent(data, d => d.ad_delivery_start_time))
        .range([0, innerWidth])

    const yScale = scalePoint()
        .domain(data.map(d => d.advertiser_name))
        .range([innerHeight, 0])

    const rScale = scaleLinear()
    .domain(extent(data, d => d.avarageImpress))
    .range([2, 8])



const g = svg.append('g')
        .attr('transform', `translate(${margin.left},${margin.right})`)

    g.selectAll('circles').data(data)
        .enter().append('circle')
            .attr('cx', d => xScale(d.ad_delivery_start_time))
            .attr('cy', d => yScale(d.advertiser_name))
            .attr('r', d => rScale(d.avarageImpress))
            .style('fill', 'dodgerblue')

    g
        .append('g')
        .attr('transform', `translate(${0},${innerHeight})`)
        .call(axisBottom(xScale))

    g
        .append('g')
        .attr('transform', `translate(${0},${0})`)
        .call(axisLeft(yScale))
            
       
       return(
            <div className='d3div'>
                <svg className="SVG" width={width} height={height}>

 
                </svg>

            </div>
        )
    } else{
        return null
    }
}

export default CreateVis