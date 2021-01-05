import React, {useRef} from 'react'



  function CreateVis({ facebookState }){

    // const svgEl = useRef('.group')
    // const svgGroup = useRef('.group')


    if(facebookState){
        console.log(facebookState)
        return(
            <div className='d3div'>
                <h1>Hi Visualisation</h1>


            </div>
        )
    } else{
        return null
    }
}

export default CreateVis