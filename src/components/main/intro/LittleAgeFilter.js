function LittleAgeFilter({filterAge, setFilterAge}){
   
    function setYoung(){
        setFilterAge("Jong")     
    }
    function setMid(){
        setFilterAge("Volwassen")
    }
    function setOld(){
        setFilterAge("Oud")
    }


function but1() {
    const clicked = document.getElementById("button1") 
    const remove1 = document.getElementById("button2") 
    const remove2 = document.getElementById("button3") 

    clicked.className = "checked"

    remove1.className = 'unchecked'
    remove2.className = 'unchecked'

 
}

function but2() {
    const clicked = document.getElementById("button2")
    const remove1 = document.getElementById("button1")
    const remove2 = document.getElementById("button3")

    clicked.className = "checked" 

    remove1.className = 'unchecked'
    remove2.className = 'unchecked'

}

function but3() {
    const clicked = document.getElementById("button3")
    const remove1 = document.getElementById("button1")
    const remove2 = document.getElementById("button2")

    clicked.className = "checked"; 

    remove1.className = 'unchecked'
    remove2.className = 'unchecked'
}

    


        return(
            <div className='filter'>
                <form className='filterForm'>
                    <label className='uchecked' id='button1'><input  onClick={but1} onChange={setYoung} name='radio' type="radio" checked='checked'/>Jong </label>
                    <label className='checked' id='button2'><input  onClick={but2} onChange={setMid} name='radio' type="radio"/>Volwassen </label>
                    <label className='unchecked' id='button3'><input  onClick={but3} onChange={setOld} name='radio' type="radio"/>Oud </label>
                </form> 
            </div>
        )
    }
    
    export default LittleAgeFilter