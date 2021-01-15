function Filter({facebookState, setFilterData, filterData}){
    let top = 'Man'
    let bottom = 'Vrouw'
    let legendClass = 'LGender'
    

    function showGender(){
        
        setFilterData("gender")

        
    }
    
    function showAge(){
        setFilterData("age")
        

    }


function but1() {
    const clicked = document.getElementById("button1"); 
    const remove = document.getElementById("button2"); 

    clicked.className = "checked"; 

    remove.className = 'unchecked';
 
}

function but2() {
    const clicked = document.getElementById("button2"); 
    const remove = document.getElementById("button1"); 

    clicked.className = "checked"; 

    remove.className = 'unchecked';
}

if(filterData === "gender"){
    top = 'Man'
    bottom = 'Vrouw'
    legendClass = 'LGender'

}else if(filterData === "age"){
    top = 'Oud'
    bottom = 'Jong'
    legendClass = 'LAge'
}

        return(
            <div className='filter'>
                <form className='filterForm'>
                    <label class='checked' id='button1'><input  onClick={but1} onChange={showGender} name='radio' type="radio" checked='checked'/>Gender </label>
                    <label class='unchecked' id='button2'><input  onClick={but2} onChange={showAge} name='radio' type="radio"/>Leeftijd </label>
                </form> 
                <div className='legend'>
                <ul>
                    <li >{top}</li>
                    <svg viewBox="0 0 61.43 46.4">

                        <path id="Path_1671" data-name="Path 1671" class="cls-1" d="M50,6.57C48.39,8.11,47,9.41,45.7,10.76c-.83.84-1.75,1.42-2.77.47s-.54-1.9.32-2.76C45.42,6.26,47.56,4,49.74,1.8,51,.52,51.81.5,53.05,1.76c2.22,2.25,4.39,4.55,6.6,6.8.82.83,1.17,1.74.26,2.63s-1.82.57-2.65-.27c-1.37-1.4-2.76-2.78-4.17-4.19-.51.47-.26,1-.26,1.52q0,12.43,0,24.87c0,.36,0,.72,0,1.08,0,1-.23,1.82-1.42,1.84s-1.46-.77-1.45-1.8c0-2.27,0-4.54,0-6.8Z"/>
                        <path id="Path_1672" data-name="Path 1672" class="cls-1" d="M8.41,40.19V13.8c0-.48,0-1,0-1.43-.05-1,.22-1.86,1.37-1.89s1.51.86,1.5,1.95q0,12.24,0,24.5v3c1.6-1.57,3-2.91,4.37-4.29.82-.83,1.72-1.2,2.64-.33s.62,1.78-.21,2.62q-3.37,3.45-6.73,6.92a1.84,1.84,0,0,1-2.55.52,1.8,1.8,0,0,1-.5-.49C6,42.53,3.73,40.19,1.44,37.83a1.6,1.6,0,0,1-.35-2.23,1.55,1.55,0,0,1,.24-.27,1.64,1.64,0,0,1,2.31,0,2.2,2.2,0,0,1,.2.23Z"/>
                        <path id="Path_1673" data-name="Path 1673" class="cls-1" d="M30.59,17.74c-4.05,0-8.1,0-12.15,0-1.36,0-2.23-.43-2.2-1.89s.92-1.73,2.18-1.72q12.24,0,24.47,0c1.3,0,2.11.45,2.11,1.79s-.78,1.83-2.09,1.82C38.8,17.72,34.69,17.74,30.59,17.74Z"/>
                        <path id="Path_1674" data-name="Path 1674" class="cls-1" d="M30.61,21.32c4,0,8.1,0,12.14,0,1.35,0,2.27.37,2.25,1.83s-1,1.79-2.31,1.78q-12,0-24.11,0c-1.29,0-2.3-.24-2.33-1.75s1-1.88,2.4-1.86C22.63,21.35,26.62,21.32,30.61,21.32Z"/>
                        <path id="Path_1675" data-name="Path 1675" class="cls-1" d="M30.72,28.49c4.05,0,8.1,0,12.14,0,1.29,0,2.12.42,2.14,1.77s-.75,1.85-2.07,1.85q-12.32,0-24.64,0c-1.33,0-2.07-.54-2.05-1.87s.88-1.76,2.16-1.74C22.5,28.51,26.61,28.49,30.72,28.49Z"/>
                            
                    </svg>


                    <li >{bottom}</li>
                </ul>
                <div class={legendClass}></div>
                </div>
                
            </div>
        )
    }
    
    export default Filter