import {
    select,
    scaleLinear,
    scaleBand,
    extent,
    scalePoint,
    scaleTime,
    axisLeft,
    axisBottom,
    scaleOrdinal
    
    } from 'd3'
import { render } from 'react-dom'


function VisBar1({ageMidBarState}){
    const data = ageMidBarState
    console.log(data)


    const width = 400
    const height = 220

    const widtha = 400
    const heighta = 220

    const margina = { top: 60, right: 40, bottom: 88, left: 105 };
    const innerWidtha = widtha - margina.left - margina.right;
    const innerHeighta = heighta - margina.top - margina.bottom;

    // const widthb = 1000
    // const heightb = 200

    // const marginb = { top: 60, right: 40, bottom: 88, left: 105 };
    // const innerWidthb = widthb - marginb.left - marginb.right;
    // const innerHeightb = heightb - marginb.top - marginb.bottom;




    // const gb = select ('.vis1Bubble')
    // .attr('transform', `translate(${marginb.left},${marginb.right})`)

    const g = select ('.vis2Bar')
    .attr('transform', `translate(${margina.left},${margina.right})`)
    .attr('transform', 'translate(' + (0) + ', 0)')


    if(ageMidBarState != null){

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




    const rect1 = g.selectAll('rect').data(data)
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
    
        rect1
        .exit().remove()
    }
        return(
            <div className='visbox4'>
            <svg width={width} height={height}>
            <g className='vis2Bar'></g>
            </svg>
        </div>
        )}
    
    
    export default VisBar1