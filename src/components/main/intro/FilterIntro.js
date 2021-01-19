function FilterIntro(){
    let top = 'Man'
    let bottom = 'Vrouw'
    let legendClass = 'LGenderIntro'
    
        return(
            <div className='legendOnly'>
                    <div className='scaleLegend'>
                    <div className='circles'>
                    <div className='circle1'></div>
                    <div className='circle2'></div>
                    <div className='circle3'></div>
                    <div className='circle4'></div>
                    </div>
                    <div className='text'>
                    <p>500</p>
                    <p>100.000</p>
                    </div>            
                    </div>
                <div className='dateDotDiv'>
                <div className='circleClass'></div>
                <h3>= Datum waarop één of meerdere advertenties zijn geplaatst </h3>
                </div>
                <div className='legend'>
                <h3>Geslacht waar de advertentie op is gericht in %:</h3>
                <ul>
                    <li >{top}</li>
                    <div className={legendClass}></div>
                    <li >{bottom}</li>
                </ul>
                </div>
            </div>       

        )
    }
    
    export default FilterIntro