import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import db from './getData';

export default function PostData() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [group, setGroup] = useState("");
  const [featureId, setId] = useState("");

  async function addDataDexie() {
    try {

      // Add the new friend!
      const id = await db.gisData.add({
        name,
        type,
        group,
        featureId
      });
      console.log(`Added feature ${id}`);
      setName("");
      setType("");
      setGroup("");
      setId("");
    } catch (error) {
      console.log(error);
      //setStatus(`Failed to add feature with name: ${name}: ${error}`);
    }
  }




      const handleSubmit = (event) => {
        event.preventDefault();
        const group = event.target.group.value
        const name = event.target.name.value
        const type = event.target.type.value
        if (group === '' || name === '' || type === ''){
            alert("Prosim vnesite vse podatke")
        } else {
          const data = {
            "type" : "FeatureCollection",
            "name" : name,
            "crs" : {
              "type" : type,
              "properties" : {
                "name" : "urn:ogc:def:crs:EPSG::3794"
              }
            },
            "features" : [ {
              "type" : group,
              "properties" : {
                "linijaEID" : 300200000362206353,
                "upravljavecID" : "12977",
                "tematika" : 1100,
                "vrstaObjekta" : 1101,
                "ccKlasifikacija" : 21120,
                "vrstaTopologije" : 2,
                "tocnostDolocitvePolozaja" : 8,
                "tocnostDolocitveVisine" : 0,
                "vir" : 2,
                "datumVira" : "20180816",
                "gji" : 1,
                "zunanjaTlorisnaDimenzija" : null,
                "zunanjaVertikalnaDimenzija" : null,
                "opuscenost" : 1,
                "letoIzgradnje" : null,
                "visinskiDatum" : 0,
                "atr1" : 13,
                "atr2" : 0,
                "atr3" : 0,
                "atr4" : "0",
                "atr5" : null,
                "opis" : "BelaĂ„Ĺ¤eva ulica (od PreÄąÄľi",
                "tipSpremembe" : "N"
              },
              "geometry" : {
                "type" : "MultiLineString",
                "coordinates" : [ [ [ 548906.27, 157929.39, -99.0 ], [ 548903.09, 157930.41, -99.0 ], [ 548900.18, 157931.35, -99.0 ], [ 548897.27, 157932.21, -99.0 ], [ 548894.72, 157932.99, -99.0 ], [ 548892.26, 157933.71, -99.0 ], [ 548889.23, 157934.7, -99.0 ], [ 548886.26, 157935.99, -99.0 ], [ 548883.2, 157937.49, -99.0 ], [ 548880.44, 157938.9, -99.0 ], [ 548878.04, 157940.02, -99.0 ], [ 548875.01, 157941.3, -99.0 ], [ 548871.8, 157942.44, -99.0 ], [ 548868.41, 157943.43, -99.0 ], [ 548865.53, 157944.27, -99.0 ], [ 548861.9, 157945.26, -99.0 ], [ 548858.06, 157946.29, -99.0 ], [ 548855.48, 157947.0, -99.0 ], [ 548852.84, 157947.7, -99.0 ], [ 548850.2, 157948.42, -99.0 ], [ 548847.53, 157949.16, -99.0 ], [ 548844.83, 157949.88, -99.0 ], [ 548842.1, 157950.63, -99.0 ], [ 548839.34, 157951.36, -99.0 ], [ 548836.58, 157952.11, -99.0 ], [ 548833.82, 157952.83, -99.0 ], [ 548830.37, 157953.72, -99.0 ], [ 548827.58, 157954.41, -99.0 ], [ 548824.79, 157955.13, -99.0 ], [ 548822.03, 157955.85, -99.0 ], [ 548818.61, 157956.72, -99.0 ], [ 548815.82, 157957.42, -99.0 ], [ 548812.43, 157958.31, -99.0 ], [ 548809.64, 157959.03, -99.0 ], [ 548806.88, 157959.73, -99.0 ], [ 548803.52, 157960.57, -99.0 ], [ 548800.76, 157961.26, -99.0 ], [ 548798.03, 157961.97, -99.0 ], [ 548794.73, 157962.79, -99.0 ], [ 548792.06, 157963.46, -99.0 ], [ 548789.45, 157964.12, -99.0 ], [ 548786.84, 157964.78, -99.0 ], [ 548783.69, 157965.59, -99.0 ], [ 548781.17, 157966.22, -99.0 ], [ 548778.71, 157966.85, -99.0 ], [ 548775.71, 157967.6, -99.0 ], [ 548772.23, 157968.47, -99.0 ], [ 548768.57, 157969.37, -99.0 ], [ 548765.51, 157970.15, -99.0 ], [ 548762.6, 157970.86, -99.0 ], [ 548758.67, 157971.77, -99.0 ], [ 548715.38, 157980.83, -99.0 ] ] ]
              }
            } ]
          }

          axios.post('http://localhost:3000/api/v1/geojson/save', data)
          .then(function (response) {
            console.log("Response data for Geojson POST request ------------------", response.data);
            window.location.reload();
            alert("Vnesili ste nov feature")
            })
                .catch(function (error) {
                  alert("Prišlo je do napake prosim poskusite znova")
                    console.log(`An error has accured, ${error}`)
            })
          
        }


      }
      //value={input}

  return (
    <Form class="postform" onSubmit={handleSubmit}>
    <Row>
        <Col>
          <Form.Control name="group" value={group} onChange={ev => setGroup(ev.target.value)} placeholder="Group"/>
        </Col>
        <Col>
          <Form.Control name="name" value={name} onChange={ev => setName(ev.target.value)} placeholder="Name"/>
        </Col>
        <Col>
          <Form.Control name="type" value={type} onChange={ev => setType(ev.target.value)} placeholder="Type" />
        </Col>
        <Col>
          <Form.Control name="id" value={featureId} onChange={ev => setId(ev.target.value)} placeholder="id" />
        </Col>
        <Col>
            <Button variant="success" onClick={addDataDexie} type="submit">Shrani</Button>
        </Col>
      </Row>
    </Form>
  )
}