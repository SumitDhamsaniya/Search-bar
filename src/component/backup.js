import React, { useState } from 'react'
import { useEffect } from 'react';
import './App.css';
function App() {

  const [get, setGet] = useState([])
  const [data, setData] = useState([])
  const [id, setId] = useState(null)
  const [searchData, setSearchData] = useState('')

  useEffect(() => {
    fetch("http://api.turn2safe.com/api/Record/GetSearchBy").
      then((result) => {
        result.json().
          then((resp) => { setData(resp) })
      })
  }, [])
  const callApi = () => {

    let url = `http://api.turn2safe.com/api/Record/FindRecord?value=${searchData}`
    if (id) {
      url += `&id=${id}`
      console.log(id)
    }
    fetch(url).
      then((result) => {
        result.json().
          then((resp) => { setGet(resp) })
      })
  }

  return (
    <div classNameName="App">
      <h1>Get API Call</h1>
      HTML
      <div className="input-group rounded">
        <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon"  onChange={(e) => { setSearchData(e.target.value) }} />
        <span className="input-group-text border-0" id="search-addon">
          <i onClick={() => callApi(id)} className="fas fa-search"></i>
        </span>
      </div>

      {/* <input type="text" onChange={(e) => { setSearchData(e.target.value) }} /> */}
      <button onClick={() => callApi(id)}>Enter</button><br />
      {
        data.map((item) => <>
          {/* <label onClick={() => setId(item.id)}>{item.searchByName}</label><br /><br />&nbsp;&nbsp;&nbsp; */}
          <button onClick={() => setId(item.id)} type="button" className="btn btn-primary" style={{ margin: '0.5%' }}>{item.searchByName}</button>
        </>
        )
      }
      {
        get.map((item) => <>
          <label>{item.cName}</label><br /><br />&nbsp;&nbsp;&nbsp;
        </>
        )
      }

    </div>
  );
}

export default App;