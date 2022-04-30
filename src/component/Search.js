import React, { useState } from 'react'
import { useEffect } from 'react';
import Search1 from './Search1';
import Search2 from './Search2';
import './Search.css'
function Search() {

    const [get, setGet] = useState([])
    const [data, setData] = useState([])
    const [id, setId] = useState(null)
    const [searchData, setSearchData] = useState('')
    const [clickedid,setClickedid] = useState("");

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

    const opendetails = (val) => {
        setClickedid(val)
    }
   

    return (
        <div className='mainSer'>
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
                {
                    clickedid !== ""
                    ? <Search2 clickedid={clickedid} />
                    : <div className="row " style={{ marginLeft: '11%', backgroundColor: 'white' }}>
                            {
                                get.map((item) => <>
                                            <Search1 item={item} opendetails={opendetails}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                
                                </>
                                )
                            }
                        </div>
                }
                
                
            </div>

        </div>
    );
}

export default Search;