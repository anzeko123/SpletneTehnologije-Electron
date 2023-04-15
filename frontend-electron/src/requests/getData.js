import React, {useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import UpdateData from './updateData';
import SearchBar from './searchBar';
import { useLiveQuery } from "dexie-react-hooks";
//import db from "./db"

const LOCAL_STORAGE_KEY = 'gisApp.results'

export default function GetData() {
    const [isShown, setIsShown] = useState(false);
    const [results, setResults] = useState([]);

    const openForm = event => {
      setIsShown(current => !current);
    };

      //ta zgoraj useEffect pa se uporaib da se naložijo podatki
  useEffect(() =>{
    //bomo nastavili todos na to kar je shranjeno v localStorage
    const storedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedData) {setResults([...storedData]);}
  }, []) //se izvede takoj ko se naloži komponenta

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(results)) //tukaj shranimo podatke v localStorage
  }, [results])
/*
  useEffect(() => {
    const data = useLiveQuery(
      () => db.gisData.toArray()
    );
    setResults(data)
  }, [results])
*/
    const deleteData = (event) => {
      const id = event.target.getAttribute('listid')
    axios.delete(`http://localhost:3000/api/v1/geojson/delete/${id}`)
    .then(function (response) {
        console.log("Response data for Geojson DELETE request --------------------", response.data);
        window.location.reload();
        alert(`Izbrisali ste feature z id: ${id}`);
        })
        .catch(function (error) {
          alert("Prišlo je do napake prosim poskusite znova")
        console.log(`An error has accured, ${error}`)
    })
    
    }

    if (!results) return null;
    var i = 1;
    return (
      <>
      <SearchBar setResults={setResults}/>
          <Table striped size="sm" class="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Group</th>
              <th>Name</th>
              <th>Feature ID</th>
              <th>Izbris</th>
              <th>Posodobi</th>
            </tr>
          </thead>
          <tbody>
          {results.map((results) => (
              <tr key={results.id} class="table">
                <td>{i++}</td>
                <td>{results.name}</td>
                <td>{results.type}</td>
                <td>{results.id}</td>
                <td><button onClick={deleteData} listid={results.id} class="btn btn-danger">Izbriši</button></td>
                <td><button onClick={openForm} class="btn btn-primary">Posodobi</button></td>
              </tr>
            ))}
          </tbody>
        </Table>
          {isShown && <UpdateData />}
                  </>
    )
}
