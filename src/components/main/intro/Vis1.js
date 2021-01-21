import {
    select,
    scaleLinear,
    scaleBand,
    extent,
    scalePoint,
    scaleTime,
    axisLeft,
    axisBottom,
    scaleOrdinal,
    max
    
    } from 'd3'

function Vis1({ barState, highLowGenderState}){

    const width = 1400
    const height = 250

    const widtha = 400
    const heighta = 300

    const margina = { top: 60, right: 40, bottom: 88, left: 105 };
    const innerWidtha = widtha - margina.left - margina.right;
    const innerHeighta = heighta - margina.top - margina.bottom;

    const widthb = 1000
    const heightb = 250

    const marginb = { top: 60, right: 40, bottom: 88, left: 105 };
    const innerWidthb = widthb - marginb.left - marginb.right;
    const innerHeightb = heightb - marginb.top - marginb.bottom;




    const gb = select ('.vis1Bubble')
    .attr('transform', `translate(${marginb.left},${marginb.right})`)

    const g = select ('.vis1Bar')
    .attr('transform', `translate(${margina.left},${margina.right})`)
    .attr('transform', 'translate(' + (1000) + ', 0)')


    if(barState != null && highLowGenderState != null){
    const datab = highLowGenderState
    const data = barState

//BUBBLEPLOT------------------------------------------------------
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
       .domain([extent(datab, d => d.male), extent(data, d => d.female)])
       .range(['var(--blue)', 'var(--pink)' ])


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
            .style('stroke', d => gScaleb(d.male))
            .style('stroke-opacity', 0.2)
            .style('stroke-width', d => rScaleb(d.avarageImpress))


//BARCHART--------------------------------------------------------
    const yScale = scaleLinear()
    .domain([0,1])
    .range([0, innerHeighta])

    const xScale = scaleBand()
    .domain(data.map(d => d[0]))
    .range([0, innerWidtha])
    .padding(0.3)

    const cScale = scaleLinear()
        .domain(extent(data.map(d => d[1])))
        .range(['#FF32AE', '#00B1FF'])

        
    // const yAxis = axisLeft(yScale)

    // const yAxisG = g
    //     .append('g')
    //     .attr("class", "yScale")
    //     .attr('transform', `translate(${0},${0})`)
    //     // .call(yAxis)

    // yAxisG
    // .selectAll('.domain').remove()

    const xAxis = axisBottom(xScale)

        // .tickSize(-innerHeight)

    const xAxisG = g
        .append('g')
        .attr("class", "xScale")
        .attr('transform', `translate(${0},${innerHeighta })`)
        .call(xAxis)

    xAxisG
    .selectAll('text')
        .attr("x", 10)
        .attr("y", 0)
        .style("text-anchor", "start")
        .attr("transform", "rotate(75)")


    xAxisG
    .selectAll('.domain').remove()


    xAxisG
    .selectAll('line').remove()



    g.selectAll('rect').data(data)
        .enter().append('rect')
        .attr('x', d => xScale(d[0]))
        .attr('y', d => -yScale(d[1])+innerHeighta)
        .attr('height', d => yScale(d[1]))
        .attr('width', xScale.bandwidth())
        .attr("fill", d => cScale(d[1]))

        g.selectAll('text').data(data)
        // g.selectAll('rect').data(data)
        // .enter().append('rect')
        //   .attr('y', d => yScale(yValue(d)))
        //   .attr('width', d => xScale(xValue(d)))
        //   .attr('height', yScale.bandwidth());


    }else{console.log('data not loaded')}

    return(
        <div className='visbox1'>
        <svg width={width} height={height}>
        <g className='vis1Bubble'></g>
        <g className='vis1Bar'></g>
        </svg>
    </div>
    )}


export default Vis1

