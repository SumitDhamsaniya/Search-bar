import React, { useState } from 'react'
import { useEffect } from 'react';
import Cart from './Cart';
// import './Search.css'
function Search() {

    const [get, setGet] = useState([])
    const [data, setData] = useState([])
    const [id, setId] = useState(null)
    const [searchData, setSearchData] = useState('')

    useEffect(() => {
        fetch("http://api.turn2safe.com/api/Record/GetSearchBy")
            .then((result) => {
                result.json()
                    .then((resp) => { setData(resp) })
            })
    }, [])
    const callApi = () => {

        let url = `http://api.turn2safe.com/api/Record/FindRecord?value=${searchData}`
        if (id) {
            url += `&id=${id}`
            console.log(id)
        }
        fetch(url)
            .then((result) => {
                result.json()
                    .then((resp) => { setGet(resp) })
            })
    }

    return (
        <div className="App ">
            <div className="input-group rounded mt-5 " style={{ width: '50%', marginLeft: '25%' }}>
                <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" onChange={(e) => { setSearchData(e.target.value) }} />
                <span className="input-group-text border-0 hov" id="search-addon">
                    <i onClick={() => callApi(id)} className="fa fa-search"></i>
                </span>
            </div>
            <div className='butt'>
                {
                    data.map((item) => <>
                        <button onClick={() => setId(item.id)} type="button" className="btn btn-primary" style={{ margin: '0.5%' }}>{item.searchByName}</button>
                    </>
                    )
                }
            </div>

            <div >
                <div className="row">
                    {
                        get.map((item) => <>

                        <div className="col-sm-6">
                                <div className='row info'>
                                    <div className="col-sm-5">
                                        <h5>cName</h5>
                                        <h5>cCountry</h5>
                                        <h5>cState</h5>
                                        <h5>cCity</h5>
                                        <h5>cArea</h5>
                                        <h5>cPinCode</h5>
                                        <h5>cMobileNo</h5>
                                        <h5>cContactName</h5>
                                        <h5>cgstNo</h5>
                                        <h5>cpanNo</h5>
                                        <h5>cUdyogAadhar</h5>
                                        <h5>dlvl</h5>
                                        <h5>rlvl</h5>

                                    </div>
                                    <div className="col-sm-5">
                                        <h5>{item.cName}</h5>
                                        <h5>{item.cCountry}</h5>
                                        <h5>{item.cState}</h5>
                                        <h5>{item.cCity}</h5>
                                        <h5>{item.cArea}</h5>
                                        <h5>{item.cPinCode}</h5>
                                        <h5>{item.cMobileNo}</h5>
                                        <h5>{item.cContactName}</h5>
                                        <h5>{item.cgstNo}</h5>
                                        <h5>{item.cpanNo}</h5>
                                        <h5>{item.cUdyogAadhar}</h5>
                                        <h5>{item.cgstNo}</h5>
                                        <h5>{item.dlvl}</h5>
                                        <h5>{item.rlvl}</h5>
                                    </div>
                                    <div className='col-sm-2'></div>
                                </div>
                            </div>
                        </>
                        )
                    }
                </div>
            </div>

        </div>
    );
}

export default Search;