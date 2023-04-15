import React, {useState, useEffect} from 'react'
import axios from 'axios';


export default function SearchBar({setResults}) {
  const [input, setInput] = useState('')
  const baseURL = "http://localhost:3000/api/v1/geojson/get-all";

const getData  = (value) => {
  axios.get(baseURL).then((response) => {
    const results = response.data
    const result = results.filter((feature) => {
      if(value === ''){
        return feature
      } else {
        return value && feature && feature.id.toLowerCase().includes(value)
      }
    })
    setResults(result)
  });
}

useEffect(() => {
  axios.get(baseURL).then((response) => {
    setResults(response.data);
  });
}, []);

const handleChange = (value) => {
  setInput(value);
  getData(value)
}

  return (
    <div className="search">
            <input type="text" placeholder="Išči tukaj..." vlaue={input} onChange={(e) => handleChange(e.target.value)}/>
    </div>
  )
}
