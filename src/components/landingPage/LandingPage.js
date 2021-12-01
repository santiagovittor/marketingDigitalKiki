import {Link} from "react-router-dom"
import {useState} from "react"



const LandingPage = () => {


  const [kikiOptions,setKikiOptions] = useState(false)


    return ( 
        <>
        <div  id="landingPage">
          {kikiOptions? 
          <>
          <Link to="/login"> <button className="button__landing">Soy Cliente.</button></Link>
          <Link to="/main"> <button className="button__landing">No soy cliente.</button></Link>
          </>
          :
          (
            <button className="button__landing" onClick={setKikiOptions}>KIKI</button>
          )

        
        }
          
        </div>
        </>
     );
}
 
export default LandingPage;