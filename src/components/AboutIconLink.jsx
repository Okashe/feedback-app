import { FaQuestion } from "react-icons/fa"
import { Link } from "react-router-dom"

const AboutIconLink = () => {
  return (
    //a tags make a page refresh each time so not good for internal routing. If it's external website , it's fine
    <div className="about-link">
        <Link to='/about'>
           <FaQuestion size={30} />
        </Link>
        
    </div>
  )
}

export default AboutIconLink