import React from 'react';
import qrcodeImage from './websiteQRCode.png';
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <table border="1" width="100%">
      <tbody>
      <tr>
      <td>Contact Person</td>
      <td>Location</td>
      <td>&nbsp;Phone Number</td>
      </tr>
      <tr>
      <td>Imran Khan</td>
      <td>Mobile</td>
      <td>94090371</td>
      </tr>
      <tr>
      <td>Imran Khan</td>
      <td>Office</td>
      <td>22556633</td>
      </tr>
      <tr>
        <td>Email</td>
        <td colspan="2"><a href="mailto:imran.khan.connects@gmail.com">imran.khan.connects@gmail.com</a></td>
      </tr>
      <tr>
        <td>GitHub</td>
        <td colspan="2"><a href="https://github.com/myDummyHAGitHub" target="_blank" rel='noopener noreferrer'>https://github.com/myDummyHAGitHub</a></td>
      </tr>
      <tr>
        <td>GitHub Pages</td>
        <td colspan="2"><a href="https://github.com/myDummyHAGitHub/demo-react-website/tree/gh-pages" target="_blank" rel='noopener noreferrer'>GitHub Pages</a></td>
      </tr>
      <tr>
        <td>Demo Project Source Code on GitHub</td>
        <td colspan="2"><a href="https://github.com/myDummyHAGitHub/demo-react-website/tree/master" target="_blank" rel='noopener noreferrer'>Demo Project Source Code</a></td>
      </tr>
      </tbody>
      </table>
      <br /><br /><br /><br />
      <table style={{width:'100%'}}>
        <tbody>
          <tr>
            <td style={{textAlign:'center'}}>
            <div>
            <img src={qrcodeImage} alt="Scan me to go to this demo website"  style={{width:'100%',maxWidth:'400px'}}/>
          </div>
            </td>
          </tr>
        </tbody>
      </table>

    </div>
  );
};

export default Contact;
