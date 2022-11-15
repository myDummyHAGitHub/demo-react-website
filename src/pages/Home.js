import React from 'react';
import './Home.css';
import dbschemaImage from '../asset/projectImages/my person skills DB example.png';
import realtimeclockImage from '../asset/projectImages/realtimeclock.png';
import weatherapiImage from '../asset/projectImages/weatherapi.png';
import navbarImage from '../asset/projectImages/navbar.png';
import databaseapiImage from '../asset/projectImages/datatableapi.png';

const Home = () => {
  return (
    <div>
      <div className="grid_container">
        <div className="mytitle">
          <h1>Adoption of ReactJS library</h1>
          <h3>(A Demo project for Desktop web application Development)</h3>
          <br /><br />
          <h3>learn ~ apply ~ solve ~ live</h3>
        </div>
        {/*
        <div className="myside">
          <aside id="aside_nav">
            <a className="toggle close" href="/#">×</a>
            aside
            <div>
              <ul>
                <li>section 1 Introduction</li>
                <li>section 2 (react stack)</li>
                <li>section 3 (tools used)</li>

              </ul>
            </div>
          </aside>          
        </div>*/}
        <div className="mycontent">
          
        <br/>
        {/*<a className="sideBarAction toggle open" href="/home/#aside_nav#">woking...Show Topic Menu</a>*/}
          <section>
            <article>
              <h2>Objectives</h2>
              <p>
                The objective of the demo is to try out basic and common features that
                would be implementated on a website.
              </p>
              <ul>
                <li>- HTML5 CSS GRID Layout</li>
                <li>- Responsive page design</li>
                <li>- ReactJS re-useable UI Components</li>
                <li>- External API Calls</li>
                <li>- Server Side API Calls to MySQL database</li>
              </ul>
            </article>
            <article>
              <h2>Re-useable UI Components</h2>
              <p>
                UI Components can be developed once and be used on multiple pages
                or even used in multiple projects when added to package repository.
              </p>
              <p>Example 1: The Digital Clock Component (realtime refresh)</p>
              <img src={realtimeclockImage} alt="Digital Clock"/>

              <p>Example 2: The Weather Component (API fetch from HKO)</p>
              <img src={weatherapiImage} alt="HKO Current Weather Info"/>

              <p>Example 3: The Navigation Bar Component</p>
              <img src={navbarImage} width="100%" alt="Navigation Bar"/>
            </article>

            <article>
              <h2>Database Data API (MySQL database)</h2>
              <p>Get Dynamic data from backend server eg.nodejs from MySQL database</p>
              <p>
              <p>Example: The Database fetch API Component</p>
              <p>
                The example fetch the data from MySQL database 'personal skills' and 
                presents it in a simple html table for view. 
              </p>
              <img src={databaseapiImage} width="100%" alt="Database fetch API"/>
              </p>
              <p>
                the Personal Skills Database Schema demostrate the Many-to-Many table joins,
                and the final query can be fetch using Table View query.
              </p>
              <p>
                <img src={dbschemaImage} alt="Personal Skills Database Schema" width="100%"/>
              </p>
            </article>

            <article>
              <h2>Conclusion</h2>
              <p>
                ReactJS libary and development approach is useful and convenient to implement
                with UI component that are reuseable and easy to create.
              </p>
            </article>
          </section>

        </div>
        <div className="myfooter">Copyright © 2022 All Rights Reserved by Imran Khan Ahmed.</div>
      </div>
    </div>
  );
};

export default Home;
