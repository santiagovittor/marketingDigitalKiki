import {Link} from "react-router-dom"
import {useState} from "react"



const LandingPage = () => {


  const [kikiOptions,setKikiOptions] = useState(false)


    return ( 
        <>
        <div  id="landingPage">
          {kikiOptions? 
          <>
          <Link to="/login"><button className="buttonLanding__client">Soy Cliente.</button></Link>
          <Link to="/main"><button className="buttonLanding__client">No soy cliente.</button></Link>
          </>
          :
          (
            <button className="buttonLanding" onClick={setKikiOptions}>KIKI</button>
          )

        
        }
          
        </div>
        </>
     );
}
 
export default LandingPage;