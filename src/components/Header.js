
function Header(){

    function buttonHandler(){
        window.scroll({top: 700, behavior: 'smooth'})
    }
     
    return(
        <div className="headerDiv">
            <img className='headerImg' src="https://www.ftm.nl/uploads/cache/article_2800_nocrop/uploads/media/5fc527483804e/politicaladsdatabase-v1.jpg" alt="politics header image"/>
          <h1>Welke doelgroepen proberen de politieke partijen te bereiken op Facebook?</h1>
          <p>De meeste politieke partijen gebruiken Facebookadvertenties om bepaalde  doelgroepen aan te spreken. Je kunt op Facebook onder andere targeten op geslacht, leeftijd en locatie. De targeting van een advertentie is sterk afhankelijk van de inhoud en het doel van de advertentie. 
            Deze visualisatie gaat in op de targeting van geslacht en leeftijd van de politieke partijen over tijd, hierin zijn grote verschillen te zien. </p>
            <button onClick={buttonHandler}>
                Start story
            </button>
        </div>
    )
}

export default Header

