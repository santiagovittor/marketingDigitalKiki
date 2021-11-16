import {Link} from "react-router-dom"

const LandingPage = () => {
    return ( 
        <>
        <div className="container" id="landingPage">
          <Link to="/main"> <button className="button__landing">KIKI.</button></Link>
        </div>
        </>
     );
}
 
export default LandingPage;