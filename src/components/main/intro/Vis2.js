import {
    select,
    scaleLinear,
    extent,
    scalePoint,
    scaleTime,
    axisLeft,
    axisBottom,
    scaleOrdinal
    
    } from 'd3'

function Vis2({dataAge}){

    const width = 1400
    const height = 300

    const widthb = 1000
    const heightb = 300

    const marginb = { top: 60, right: 40, bottom: 88, left: 105 };
    const innerWidthb = widthb - marginb.left - marginb.right;
    const innerHeightb = heightb - marginb.top - marginb.bottom;

    const gb = select ('.vis2Bubble')
    .attr('transform', `translate(${marginb.left},${marginb.right})`)

    if(dataAge != null){
    const datab = dataAge

       //define scales
       const xScaleb = scaleTime()
       .domain(extent(datab, d => d.ad_delivery_start_time))
       .range([0, innerWidthb])


   const yScaleb = scalePoint()
       .domain(datab.map(d => d.advertiser_name))
       .range([innerHeightb, 1])

   const rScaleb = scaleLinear()
   .domain(extent(datab, d => d.avarageImpress))
   .range([20, 50])


   const gScaleb = scaleOrdinal()
       .domain([extent(datab, d => d.thirdy)])
       .range(['var(--blue)', 'var(--darkblue)'])


       const yAxisb = axisLeft(yScaleb)
       .tickSize(-innerWidthb)

   const yAxisGb = gb
       .append('g')
       .attr("class", "yScale")
       .attr('transform', `translate(${0},${0})`)
       .call(yAxisb)

       yAxisGb
       .selectAll('.domain').remove()



       const xAxisb = axisBottom(xScaleb)

   const xAxisGb = gb
       .append('g')
       .attr("class", "xScale")
       .attr('transform', `translate(${0},${innerHeightb + 50})`)
       .call(xAxisb)

       xAxisGb
       .selectAll('.domain').remove()


       const circlesb = gb.selectAll('circle')
        .data(datab)
    
        circlesb
        .enter().append('circle')
            .attr('class', 'circles')
            .attr('cx', d => xScaleb(d.ad_delivery_start_time))
            .attr('cy', d => yScaleb(d.advertiser_name))
            .attr('r', 2)
            .style("opacity", 1)
            .style('fill', 'white')
            .style('stroke', d => gScaleb(d.thirdy))
            .style('stroke-opacity', 0.2)
            .style('stroke-width', d => rScaleb(d.avarageImpress))

    }else{console.log('data not loaded')}

    return(
        <div className='visbox'>
        <svg width={width} height={height}>
        <g className='vis2Bubble'></g>
        <g className='vis2Bar'></g>
        </svg>
    </div>
    )}


export default Vis2

