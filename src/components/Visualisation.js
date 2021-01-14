import React, {useRef} from 'react'

import {
    select,
    scaleLinear,
    scaleTime,
    extent,
    scalePoint,
    axisLeft,
    axisBottom,
    scaleOrdinal,
    
    } from 'd3'

  function CreateVis({ facebookState, filterData }){

    if(facebookState){
        <h1>Dashboard</h1>
    const data = facebookState;

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
        .range([innerHeight, 1])

    const rScale = scaleLinear()
    .domain(extent(data, d => d.avarageImpress))
    .range([8, 25])

    const male = data.male_fifty + data.male_fourty + data.male_sixty + data.male_teener + data.male_thridy + data.male_twenty + data.male_young

    const gScale = scaleOrdinal()
        .domain(data.map(d=> d.gender))
        .range(['cyan', 'pink' ])


const g = svg.append('g')
        .attr('transform', `translate(${margin.left},${margin.right})`)

    g.selectAll('circles').data(data)
        .enter().append('circle')
            .attr('cx', d => xScale(d.ad_delivery_start_time))
            .attr('cy', d => yScale(d.advertiser_name))
            .attr('r', 10)
            .style("opacity", 0.05)
            .style('fill', 'black')
            .style('stroke', d => gScale(d.gender))
            .style('stroke-width', d => rScale(d.avarageImpress))


const yAxis = axisLeft(yScale)
        .tickSize(-innerWidth)

    const yAxisG = g
        .append('g')
        .attr("class", "yScale")
        .attr('transform', `translate(${0},${0})`)
        .call(yAxis)

        yAxisG
        .selectAll('.domain').remove()


            
       
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