import React from 'react';
import {Link} from 'react-router-dom';
import styles from './LandingPage.module.css'

export default function LandingPage(){
    return(
        <div className={styles.bg}>
            
            <h1>
         Find your favorite Pokemon
        </h1>
        <h2>

         Discover the type, strengths, weaknesses and abilities of any Pokemon!
        </h2>
    
            <Link to='/home'>
                <button className={styles.buttonIng}>Let's go!</button>
            </Link>

            <h3 className={styles.love}>Made with &hearts; from Adriana Ferrari-dev</h3>
        </div>
       
    )
}