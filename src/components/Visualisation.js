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

   
    const width = 1400
    const height = 700

    const margin = { top: 60, right: 40, bottom: 88, left: 105 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const g = select ('g')
    .attr('transform', `translate(${margin.left},${margin.right})`)

    

    if(facebookState != null){
    const data = facebookState;

       //define scales
       const xScale = scaleTime()
       .domain(extent(data, d => d.ad_delivery_start_time))
       .range([0, innerWidth])

   const yScale = scalePoint()
       .domain(data.map(d => d.advertiser_name))
       .range([innerHeight, 1])

   const rScale = scaleLinear()
   .domain(extent(data, d => d.avarageImpress))
   .range([20, 50])


   const gScale = scaleOrdinal()
       .domain([extent(data, d => d.male), extent(data, d => d.female)])
       .range(['var(--blue)', 'var(--pink)' ])

       console.log(gScale.domain())

   const aScale = scaleOrdinal()
       .domain(["young", "twenty", "thirdy", "fourty", "fifty", "sixty"])
       .range(['var(--blue)', 'var(--darkblue)'])




       const yAxis = axisLeft(yScale)
       .tickSize(-innerWidth)

   const yAxisG = g
       .append('g')
       .attr("class", "yScale")
       .attr('transform', `translate(${0},${0})`)
       .call(yAxis)

       yAxisG
       .selectAll('.domain').remove()



       const xAxis = axisBottom(xScale)

   const xAxisG = g
       .append('g')
       .attr("class", "xScale")
       .attr('transform', `translate(${0},${innerHeight + 80})`)
       .call(xAxis)

       xAxisG
       .selectAll('.domain').remove()

//render function

const render = () => {
    let strokeVar = null;
    if(filterData === "gender"){
        strokeVar = d => gScale(d.male)
    }
    else if(filterData === "age"){
       strokeVar =  d => aScale(d.thirdy)
    }

    const circles = g.selectAll('circle')
        .data(data)
    
        circles
        .enter().append('circle')
            .attr('cx', d => xScale(d.ad_delivery_start_time))
            .attr('cy', d => yScale(d.advertiser_name))
            .attr('r', 2)
            .style("opacity", 1)
            .style('fill', 'white')
            .style('stroke', strokeVar)
            .style('stroke-opacity', 0.2)
            .style('stroke-width', d => rScale(d.avarageImpress))
        circles
        .style('stroke', strokeVar)


        circles
        .exit().remove()
        }

 

            

       render()
       return(
            <div className='d3div'>
                <svg className="svg" width={width} height={height}>
                    <g></g>
                </svg>
            </div>
        )
    } else{
        return null
    }
}

export default CreateVis