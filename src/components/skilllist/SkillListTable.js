import React, { useEffect } from 'react';
import './SkillListTable.css';

const SkillListTable = (props) => {
  //const [weather, setWeather]  = useState([])

  useEffect(() => {
    let url = "http://immiks-mac-mini.local:5000";
    //let url = "https://55db-113-252-246-168.ap.ngrok.io";

    fetch(url,{ //this will mean the same as ip 127.0.0.1:5000

    /* real world version
    fetch(url,{ //change this for live public demo
        method: "GET",
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:5000'
        }
    */
   
    })
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        //console.log(data);
        const tmp_rows = document.createDocumentFragment();
        if(data.length > 0){

            let tbl_row; 
            data.forEach( itemData => {
                tbl_row = document.createElement('tr');

                let col1 = document.createElement("td")
                col1.appendChild(document.createTextNode(itemData.skill_name));
                tbl_row.appendChild(col1);

                let col2 = document.createElement("td")
                col2.appendChild(document.createTextNode(itemData.level_type));
                tbl_row.appendChild(col2);

                tmp_rows.append(tbl_row);                        
            })
            
            document.getElementById('data').append(tmp_rows)

        }
    })
    .catch(function (error) {
      console.log('Error during fetch: ' + error.message);     
    });
  }, [])


  return (
    <div className="skillsTable_tech">
      <table className="blueTable">
        <thead>
          <tr>
            <th>Skill Name</th>
            <th>Level</th>
          </tr>
        </thead>
        <tbody id="data">
    
        </tbody>
      </table>
    </div>
  );

};

export default SkillListTable;