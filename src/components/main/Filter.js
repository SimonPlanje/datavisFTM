
function Filter({facebookState, setFilterData}){

    function showGender(){
        setFilterData("gender")
    }
    
    function showAge(){
        setFilterData("age")
    }
    

        return(
            <div className='filter'>
                <form className='filterForm'>
                    <label><input onChange={showGender} name='radio' type="radio" />Gender </label>
                    <label><input onChange={showAge} name='radio' type="radio"/>Age </label>
                </form>
            </div>
        )
    }
    
    export default Filter