import React from 'react';
import ImageView from '../components/imageview/ImageView';
import Gallery from '../components/imageview/Gallery';
import SkillListTable from '../components/skilllist/SkillListTable';
import "./About.css";

const About = () => {
  return (
    <div className="pageContainer_about">
      <h1><strong>About Knowledge / Skills </strong></h1>
      <p></p>


      <article>
        <h2>My Technical Skill list</h2>
        <p>
          list fetch from MySQL database using Server Side API (nodejs)
        </p>
      </article>
      <SkillListTable/>

      <article>
        <h2>HA Knowledge Sharing Training</h2>
        <p>
          <ul>
            <li>- git/GitHub</li>
            <li>- Hospital (Private) Cloud</li>
            <li>- MySQL 8.0 Enterprise</li>
            <li>- HA Chatbot Co-delivery</li>
            <li>LCDP (Low Code Development Platform)</li>
          </ul>
        </p>
      </article>

      <article>
        <h2>HA Udemy Online Course</h2>
      </article>

      <div className="halfbox">
        <fieldset className="style2">
          <legend>HA-Udemy Courses (Completed with Cert)</legend>
            <div className="fieldsetContainer">
              <div className="blockLayoutChildren">

              <Gallery>
                <ImageView imgsrcThumb={require('../asset/haudemy/thumb_react_complete.png')} 
                          imgsrcLarge={require('../asset/haudemy/cert_react_complete.jpg')} 
                          imgdesc="hello react">
                </ImageView>

                <ImageView imgsrcThumb={require('../asset/haudemy/thumb_openshift_absolute.png')} 
                          imgsrcLarge={require('../asset/haudemy/cert_openshift_absolute.jpg')} 
                          imgdesc="hello react">
                </ImageView>


                <ImageView imgsrcThumb={require('../asset/haudemy/thumb_practical_openshift.png')} 
                          imgsrcLarge={require('../asset/haudemy/cert_practical_openshift.jpg')} 
                          imgdesc="hello react">
                </ImageView>


                <ImageView imgsrcThumb={require('../asset/haudemy/thumb_vscode.png')} 
                          imgsrcLarge={require('../asset/haudemy/cert_vscode.jpg')} 
                          imgdesc="hello react">
                </ImageView>


                <ImageView imgsrcThumb={require('../asset/haudemy/thumb_hello_react.png')} 
                          imgsrcLarge={require('../asset/haudemy/cert_hello_react.jpg')} 
                          imgdesc="hello react">
                </ImageView>

                <ImageView imgsrcThumb={require('../asset/haudemy/thumb_sqlsever_essential.png')} 
                          imgsrcLarge={require('../asset/haudemy/cert_sqlsever_essential.jpg')} 
                          imgdesc="hello react">
                </ImageView>
              </Gallery>

              </div>
            </div>
        </fieldset>
      </div>






      <p></p>
      <div className="halfbox">
        <fieldset className="style2">
          <legend>HA-Udemy Courses (New Enrolled)</legend>
            <div className="fieldsetContainer">
              <div className="blockLayoutChildren">


              <Gallery>
                <ImageView imgsrcThumb={require('../asset/haudemy/thumb_asp_dotnet_mcv.png')} 
                          imgsrcLarge={require('../asset/haudemy/cert_pending.jpg')} 
                          imgdesc="hello react">
                </ImageView>

                <ImageView imgsrcThumb={require('../asset/haudemy/thumb_mysql_bootcamp.png')} 
                          imgsrcLarge={require('../asset/haudemy/cert_pending.jpg')} 
                          imgdesc="hello react">
                </ImageView>

                <ImageView imgsrcThumb={require('../asset/haudemy/thumb_bootstrap4_bootcamp.png')} 
                          imgsrcLarge={require('../asset/haudemy/cert_pending.jpg')} 
                          imgdesc="hello react">
                </ImageView>
              </Gallery>


              </div>
            </div>
        </fieldset>
      </div>




    </div>
  );
};

export default About;
