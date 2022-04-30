import React, { useEffect, useState } from "react";
const Search2 = (clickedid) => {
    const [ data, setData] = useState([]);

    useEffect(() => {
        fetch(`http://turn2safe.com/Home/GetDisputeRecords?id=${clickedid}`).then((result) => {
                result.json().then((resp) => { setData(resp) })
                console.log(data)
            })
    })
    return (
        <div>
                <h1>Search2</h1>
                {
                    data.map((item)=>{
                        <div>
                            <h3>{item.disputeType}</h3>
                        </div>
                    })
                }
        </div>
    );
}
export default Search2