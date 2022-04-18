import React from 'react'
import './homepage.css';
import { Link } from 'react-router-dom';
import { GiBandit } from "react-icons/gi";
export const Homepage = ({isAuthenticated}) => {
  return (
    <div class="front">
      <div class="body-container">
         <div className="banners">
            <div className="text-section">
              <h1>Build amazing things</h1>
              <h5>We're npm, Inc., the company behind Node package manager, the npm Registry, and npm CLI. We offer those to the community for free, but our day job is building and selling useful tools for developers like you.</h5>
              <h2>Take your JavaScript development up a notch</h2>
              <h5>Get started today for free, or step up to npm Pro to enjoy a premium JavaScript development experience, with features like private packages</h5>
            </div>
            {isAuthenticated ? (
              <div className="buttons">
                <Link to='./signup'>
                  <button type="button" className='sign-in'>Learn more</button>
                </Link>
                <Link to='./signin'>
                  <button type="button" className='sign-up'>Pricing</button>
                </Link>
              </div>
            ) : (
              <div className="buttons">
                  <Link to='./signup'>
                    <button type="button" className='sign-in'>Sign Up</button>
                  </Link>
                  <Link to='./signin'>
                    <button type="button" className='sign-up'>Login</button>
                  </Link>
              </div>
            )}
         </div>


         <div className="second-part">
           <div className="icons">
              <GiBandit color="red" size="5rem"/>
           </div>
           <div className="about">
              <h2>Bring the best of open source to you, your team, and your company</h2>
              <h5>Relied upon by more than 11 million developers worldwide, npm is committed to making JavaScript development elegant, productive, and safe. The free npm Registry has become the center of JavaScript code sharing, and with more than one million packages, the largest software registry in the world. Our other tools and services take the Registry, and the work you do around it, to the next level.</h5>
           </div>
         </div>

         <div className="third-part">
           <div className="banners ">
             <div className="text-section extra">
               <h1>We love open source</h1>
               <h5>At npm, Inc., we're proud to dedicate teams of full-time employees to operating the npm Registry, enhancing the CLI, improving JavaScript security, and other projects that support and nurture a vibrant open source community.</h5>
             </div>
           </div>
         </div>

         <div className="fourth-part">
           <h2>Gratefully serving everyone from solo devs to the Fortune 500</h2>
         </div>
         <hr className='ending'/>
      </div>
    </div>
  )
}
