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
       .range(['var(--darkblue)', 'var(--blue)' ])


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
       strokeVar =  d => aScale((d.teener + d.young + d.twenty + d.thirdy + d.fourty + d.fifty + d.sixty)/7)
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

const detailScale = scaleLinear()
            .domain([0, 0.1])
            .range(['cyan', 'black'])

detail
.text('€ ' + d.toElement.__data__.avarageSpend + ',-')
.attr('x', xScale(d.toElement.__data__.ad_delivery_start_time)+20)
.attr('y', yScale(d.toElement.__data__.advertiser_name)+60)
.style('font-family', 'IBM Plex Sans')

// Specify where to put label of text
h.append('rect')
    .attr('width', 300)
    .attr('height', 250)
    .attr('class', d.toElement.__data__.advertiser_id)
    .attr('x', xScale(d.toElement.__data__.ad_delivery_start_time))
    .attr('y', yScale(d.toElement.__data__.advertiser_name))
    .attr('fill', 'white')
    .attr('border-radius', 5)

    h.append("text")
    .text(d.toElement.__data__.advertiser_name)
    .attr('width', 1)
    .attr('x', xScale(d.toElement.__data__.ad_delivery_start_time)+20)
    .attr('y', yScale(d.toElement.__data__.advertiser_name)+35)
    .style('font-family', 'Open Sans Condensed')
    .style('font-size', 25)

    
    h.append("text")
    .text(d.toElement.__data__.ad_creative_link_title)
    .attr('x', xScale(d.toElement.__data__.ad_delivery_start_time)+20)
    .attr('y', yScale(d.toElement.__data__.advertiser_name)+65)
    .style('font-family', 'IBM Plex Sans')

    h.append("text")
    .text(d.toElement.__data__.avarageImpress + ' keer bekeken')
    .attr('x', xScale(d.toElement.__data__.ad_delivery_start_time)+20)
    .attr('y', yScale(d.toElement.__data__.advertiser_name)+95)
    .style('font-family', 'IBM Plex Sans')


h.append("text")
    .text('€ ' + d.toElement.__data__.avarageSpend + ',-')
    .attr('x', xScale(d.toElement.__data__.ad_delivery_start_time)+20)
    .attr('y', yScale(d.toElement.__data__.advertiser_name)+125)
    .style('font-family', 'IBM Plex Sans')

            if(filterData === "gender"){

                h.append("text")
                .text(Math.round(d.toElement.__data__.male * 100) + "% man")
                .attr('x', xScale(d.toElement.__data__.ad_delivery_start_time)+20)
                .attr('y', yScale(d.toElement.__data__.advertiser_name)+155)
                .style('fill', 'var(--blue)')
                .style('font-family', 'Open Sans Condensed')

                h.append("text")
                .text(Math.round(d.toElement.__data__.female * 100) + "% vrouw")
                .attr('x', xScale(d.toElement.__data__.ad_delivery_start_time)+20)
                .attr('y', yScale(d.toElement.__data__.advertiser_name)+185)
                .style('fill', 'var(--pink)')
                .style('font-family', 'Open Sans Condensed')

            } else if(filterData === "age"){
                h.append("text")
                .text(Math.round(d.toElement.__data__.teener * 100) + "%   18-24")
                .attr('x', xScale(d.toElement.__data__.ad_delivery_start_time)+20)
                .attr('y', yScale(d.toElement.__data__.advertiser_name)+155)
                .style('fill', detailScale(d.toElement.__data__.teener))
                .style('font-family', 'Open Sans Condensed')

                console.log(d.toElement.__data__.fifty)

                h.append("text")
                .text(Math.round(d.toElement.__data__.twenty * 100) + "%   24-30")
                .attr('x', xScale(d.toElement.__data__.ad_delivery_start_time)+20)
                .attr('y', yScale(d.toElement.__data__.advertiser_name)+185)
                .style('fill', detailScale(d.toElement.__data__.twenty))
                .style('font-family', 'Open Sans Condensed')

                h.append("text")
                .text(Math.round(d.toElement.__data__.thirdy * 100) + "%   30-40")
                .attr('x', xScale(d.toElement.__data__.ad_delivery_start_time)+20)
                .attr('y', yScale(d.toElement.__data__.advertiser_name)+215)
                .style('fill', detailScale(d.toElement.__data__.thirdy))
                .style('font-family', 'Open Sans Condensed')

                h.append("text")
                .text(Math.round(d.toElement.__data__.fourty * 100) + "%   40-50")
                .attr('x', xScale(d.toElement.__data__.ad_delivery_start_time)+120)
                .attr('y', yScale(d.toElement.__data__.advertiser_name)+155)
                .style('fill', detailScale(d.toElement.__data__.fourty))
                .style('font-family', 'Open Sans Condensed')

                h.append("text")
                .text(Math.round(d.toElement.__data__.fifty * 100) + "%   50-60")
                .attr('x', xScale(d.toElement.__data__.ad_delivery_start_time)+120)
                .attr('y', yScale(d.toElement.__data__.advertiser_name)+185)
                .style('fill', detailScale(d.toElement.__data__.fifty))
                .style('font-family', 'Open Sans Condensed')

                h.append("text")
                .text(Math.round(d.toElement.__data__.sixty * 100) + "%   65+")
                .attr('x', xScale(d.toElement.__data__.ad_delivery_start_time)+120)
                .attr('y', yScale(d.toElement.__data__.advertiser_name)+215)
                .style('fill', detailScale(d.toElement.__data__.sixty))
                .style('font-family', 'Open Sans Condensed')
            }
            

                
          }


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