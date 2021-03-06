import React, { useState } from 'react';
import styles from './Navigation.scss'


export default function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark header-bg">

            <a className="navbar-brand col-4 logo " href="#">
                <span className="pr-2">TA-Airlines</span> 
                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="29.716" viewBox="0 0 31 29.716">
  <path id="Path_1791" data-name="Path 1791" d="M30.612,2.68a2,2,0,0,0-2.176-.711,14.036,14.036,0,0,0-4.5,2.176L21.691,5.761,19,4.942l.28-.215a1.564,1.564,0,0,0,.668-1.056A1.618,1.618,0,0,0,17.381,2.1L15.1,3.757l-2.715-.819.108-.086A1.564,1.564,0,0,0,13.158,1.8a1.652,1.652,0,0,0-.3-1.207A1.58,1.58,0,0,0,10.593.223L8.482,1.753,5.443.827a.448.448,0,0,0-.453.086L2.319,2.852a.46.46,0,0,0-.215.409.82.82,0,0,0,.108.323l.086.129L13.653,11.6,7.232,16.234,3.461,13.907a.455.455,0,0,0-.56.022L.228,15.868a.536.536,0,0,0-.237.5c-.022.129.108.3.237.409l5.926,3.6,1.595,6.7v.043c0,.043.022.086.086.172a.4.4,0,0,0,.259.194.823.823,0,0,0,.474-.065l2.672-1.939a.5.5,0,0,0,.194-.539l-1.013-4.31L16.8,16.018l4.008,13.209h0a.311.311,0,0,0,.043.151.926.926,0,0,0,.194.215l.022.022H21.2a.519.519,0,0,0,.323-.086L24.19,27.59a.686.686,0,0,0,.215-.431l.086-3.168,2.155-1.552a1.582,1.582,0,0,0,.366-2.263,1.58,1.58,0,0,0-2.263-.366l-.151.108.065-2.823,2.327-1.681a1.564,1.564,0,0,0,.668-1.056A1.618,1.618,0,0,0,25.1,12.786l-.323.237.065-2.823,2.327-1.681a14.172,14.172,0,0,0,3.491-3.6A1.945,1.945,0,0,0,30.612,2.68ZM24.729,15.76l.022-1.444.948-.69a.571.571,0,0,1,.668.927Zm-.172,6.9.022-1.444.776-.56a.571.571,0,1,1,.668.927Zm-.905-5.732-.215,9.955-1.875,1.358-3.9-12.843,6.12-4.417-.065,2.974h0a1.373,1.373,0,0,0-.043.151l-.043,2.737Zm-7.3-12.778L17.984,2.96a.542.542,0,0,1,.8.129.649.649,0,0,1,.108.453.529.529,0,0,1-.237.366l-.927.668ZM9.537,17.656l-1.358-.84L24.535,5.007A13.7,13.7,0,0,1,28.759,2.96a.858.858,0,0,1,.991.323.872.872,0,0,1,0,1.056,13.163,13.163,0,0,1-3.211,3.34l-16.4,11.852-.366-1.552A.481.481,0,0,0,9.537,17.656ZM3.525,3.262,5.4,1.9l5.064,1.552.6.194c.022,0,.043.022.086.022l9.438,2.888-6.12,4.417ZM9.753,2.141l1.465-1.056a.542.542,0,0,1,.8.129.57.57,0,0,1-.129.8l-.754.539ZM7.124,19.876c0-.043-.022-.086-.086-.172l-.065-.065c-.022-.022-.065-.043-.086-.065L1.478,16.255l1.745-1.25,5.6,3.426,1.487,6.4-1.745,1.25L7.1,19.919l.022-.043Z" transform="translate(0.011 0.1)" fill="#fff"/>
</svg>

            </a>

            <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarTogglerDemo03">
                
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Plan Travel
                </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Travel Information
                </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Log In
                </a>
                    </li>
                </ul>

            </div>
        </nav>
    )
}