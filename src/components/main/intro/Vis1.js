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

function Vis1({ barState, setBarState }){

    const width = 1400
    const height = 700

    const margin = { top: 60, right: 40, bottom: 88, left: 105 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const g = select ('vis1')
    .attr('transform', `translate(${margin.left},${margin.right})`)

    

    if(barState != null){
    const data = barState;



    return(
        <div className='hi'>
        <svg className="hi" 
        width={width} 
        height={height}
        >
            <g className='vis1'>
            </g>
        </svg>
    </div>
    )
}
}

export default Vis1

