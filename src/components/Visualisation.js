import {
    select,
    selectAll,
    scaleLinear,
    scaleTime,
    extent,
    scalePoint,
    axisLeft,
    axisBottom,
    scaleOrdinal,
    pie,
    text,
    
    } from 'd3'

  function CreateVis({ facebookState, filterData }){

   
    const width = 1400
    const height = 900

    const margin = { top: 60, right: 40, bottom: 88, left: 105 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const g = select('.dashboardGroup')
    .attr('transform', `translate(${margin.left},${margin.right})`)

    const h = select('.hoverDiv')
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
   .range([20, 80])

   const gScale = scaleOrdinal()
       .domain([extent(data, d => d.male), extent(data, d => d.female)])
       .range(['var(--blue)', 'var(--pink)' ])

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
            .attr('class', 'circles')
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
        .on('mouseover', handleMouseOver)
        .on('mouseout', handleMouseOut)


        circles
        .exit().remove()
        }

 
        function handleMouseOver(d, i) {  // Add interactivity

            // Use D3 to select element, change color and size
            let detail = select(this)

            detail
            .text('€ ' + d.toElement.__data__.avarageSpend + ',-')
            .attr('x', xScale(d.toElement.__data__.ad_delivery_start_time)+20)
            .attr('y', yScale(d.toElement.__data__.advertiser_name)+60)
            .style('font-family', 'IBM Plex Sans')

            // Specify where to put label of text
            h.append('rect')
                .attr('width', 200)
                .attr('height', 200)
                .attr('class', d.toElement.__data__.advertiser_id)
                .attr('x', xScale(d.toElement.__data__.ad_delivery_start_time))
                .attr('y', yScale(d.toElement.__data__.advertiser_name))
                .attr('fill', 'white')

                h.append("text")
                .text(d.toElement.__data__.advertiser_name)
                .attr('x', xScale(d.toElement.__data__.ad_delivery_start_time)+20)
                .attr('y', yScale(d.toElement.__data__.advertiser_name)+30)
                .style('font-family', 'Open Sans Condensed')
                .style('font-size', 25)


                h.append("text")
                .text(d.toElement.__data__.avarageImpress + ' keer bekeken')
                .attr('x', xScale(d.toElement.__data__.ad_delivery_start_time)+20)
                .attr('y', yScale(d.toElement.__data__.advertiser_name)+60)
                .style('font-family', 'IBM Plex Sans')


            h.append("text")
                .text('€ ' + d.toElement.__data__.avarageSpend + ',-')
                .attr('x', xScale(d.toElement.__data__.ad_delivery_start_time)+20)
                .attr('y', yScale(d.toElement.__data__.advertiser_name)+90)
                .style('font-family', 'IBM Plex Sans')
          }

          var colorScale = scaleOrdinal().domain(["banana", "cherry", "blueberry"])
                                   .range(["#eeff00", "#ff0022", "#2200ff"]);




         function handleMouseOut(d, i) {  // Add interactivity

            select(`[class="${d.target.__data__.advertiser_id}"]`)
            .remove()

        
        //    console.log('.' + +d.target.__data__.advertiser_id) 
            selectAll('.hoverDiv' + 'rect').remove()
            selectAll('.hoverDiv ' + 'text').remove()

          }

       render()
       return(
            <div className='d3div'>
                <svg className="dashboard" width={width} height={height}>
                    <g className='dashboardGroup'></g>
                    <g className="hoverDiv"></g>
                </svg>
            </div>
        )
    } else{
        return null
    }
}

export default CreateVis