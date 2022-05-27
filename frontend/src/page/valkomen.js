

const Valkomen = ({toggle}) => {

        function inMenu () {
        if(toggle === true){
          return ({"pointerEvents": "none"})
        }
      } 

    return(
        <div className="main-hem" style={inMenu()}>
        <div className="text-wrapper">
        <h2 className="center-välkomen">Hej och varmt välkommen hit!</h2>
            
            <br></br>
        <h2>Är du nyfiken på bilder som kommunikationsstöd för dig eller någon annan?
         Då har du kommit rätt.<br></br> Här finner du bilder för extra stöd i vardagen och har möjligheten att själv personifiera dessa efter just ditt behov.<br></br> Denna sida är skapad av föräldrar med barn i behov av språkligt stöd. Vi finner dagens utbud bristande och har istället skapat tydliga, enkla och personliga bilder.</h2>

        <h2 className="center-välkomen"> Från oss till er.</h2>
       

        </div>
        </div>
    )

}

export default Valkomen;