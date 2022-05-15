import React from 'react';
import qrcodeImage from './websiteQRCode.png';

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <table>
      <tbody>
      <tr>
      <td>Contact Person</td>
      <td>Location</td>
      <td>&nbsp;Phone Number</td>
      </tr>
      <tr>
      <td>Imran Khan</td>
      <td>Mobile</td>
      <td>99335566</td>
      </tr>
      <tr>
      <td>Imran Khan</td>
      <td>Office</td>
      <td>22556633</td>
      </tr>
      </tbody>
      </table>
      <br /><br /><br /><br />
      <table style={{width:'100%'}}>
      <tr>
        <td style={{textAlign:'center'}}>
        <div>
        <img src={qrcodeImage} alt="Scan me to go to this demo website"  style={{width:'100%',maxWidth:'400px'}}/>
      </div>
        </td>
      </tr>
      </table>

    </div>
  );
};

export default Contact;
