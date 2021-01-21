function FilterIntro2(){

    let legendClass = 'LAgeIntro'

    function buttonHandler(){
        window.scroll({top: 2500, behavior: 'smooth'})
    }
    
        return(
            <div>
            <div className='legendOnly'>
                    <div className='scaleLegend'>
                    <h3>Aantal keer bekeken</h3>
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
                <div className='legendAge'>
                <h3>Leeftijd waarop de advertentie is gericht in %:</h3>
                <div className={legendClass}></div>
                <ul>                   
                    <li >65+</li>
                    <li >30 - 50</li>
                    <li >24 - 30</li>
                    <li >18 - 24</li>

                </ul>
                </div>
            </div>      
            <button onClick={buttonHandler}>
                Bekijk het Dashboard
            </button>
            </div>

        )
    }
    
    export default FilterIntro2