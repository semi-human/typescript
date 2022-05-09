import React from 'react'
import Products from './products';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook ,faTwitter ,faTwitch ,faInstagram, faDiscord } from "@fortawesome/free-brands-svg-icons";
const Home = () => {
  return (
    <div className='hero'>
        <div className="card bg-dark text-white border-0">
            <img src="..." className="card-img" alt="..." height="550px"/>
            <div className="card-img-overlay d-flex flex-column justify-content-center">
                <h5 className="card-title display-3 fw-bold mb-0">SEASON SALES GOING ON</h5>
                <p className="card-text lead fs-2">20% OFF ON ALL SEASONAL GOODS</p>
                <div className="social-icons">
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faDiscord} />
                <FontAwesomeIcon icon={faTwitch} />
                
                </div>
            </div>
        </div>
        <Products/>
    </div>
  )
}

export default Home