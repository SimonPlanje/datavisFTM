import {
    select,
    scaleLinear,
    scaleBand,
    extent,
    scalePoint,
    axisLeft,
    axisBottom,
    scaleOrdinal,
    max
    
    } from 'd3'

function Vis1({ barState, setBarState }){

    const width = 600
    const height = 700

    const margin = { top: 60, right: 40, bottom: 88, left: 105 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;


    const g = select ('.vis1')
    .attr('transform', `translate(${margin.left},${margin.right})`)

    

    if(barState != null){
    const data = barState;


    const yScale = scaleLinear()
    .domain([0, 1])
    .range([innerHeight, 0])

    const xScale = scaleBand()
    .domain(data.map(d => d[0]))
    .range([innerWidth, 0])
    .padding(0.1);

    const cScale = scaleLinear()
        .domain(extent(data.map(d => d[1])))
        .range(['#E2514F', 'white'])


    
    const yAxis = axisLeft(yScale)
    

    const yAxisG = g
        .append('g')
        .attr("class", "yScale")
        .attr('transform', `translate(${0},${0})`)
        .call(yAxis)

    yAxisG
    .selectAll('.domain').remove()

    const xAxis = axisBottom(xScale)
        .tickSize(-innerHeight)

    const xAxisG = g
        .append('g')
        .attr("class", "xScale")
        .attr('transform', `translate(${0},${innerHeight })`)
        .call(xAxis)

    xAxisG
    .selectAll('.domain').remove()



    g.selectAll('rect').data(data)
        .enter().append('rect')
        .attr('x', d => xScale(d[0]))
        .attr('height', d => yScale(d[1]) )
        .attr('width', xScale.bandwidth())
        .attr("fill", d => cScale(d[1]))

        // g.selectAll('rect').data(data)
        // .enter().append('rect')
        //   .attr('y', d => yScale(yValue(d)))
        //   .attr('width', d => xScale(xValue(d)))
        //   .attr('height', yScale.bandwidth());


    }

    return(
        <div>
        <svg width={width} height={height}>
            <g className='vis1'>
            </g>
        </svg>
    </div>
    )}


export default Vis1

