import React from "react";
const Search1 = ({ item, opendetails }) => {

    return (
        <div className="col-sm-5 info mb-5">
            <div className='row '>
                <div className='row'>
                    <p style={{ textAlign: 'center', color: '#2c2c2c', textDecoration: 'underline', fontSize: '1.5rem' }} className="card-title">{item.cName}</p>
                </div>
                <div className="col-sm-5">
                    <div className="card-body pb-5 px-4">
                        <h6>cContactName</h6>
                        <h6>cMobileNo</h6>
                        <h6>cgstNo</h6>
                        <h6>cpanNo</h6>
                        <h6>cUdyogAadhar</h6>
                        <h6>cArea</h6>
                        <h6>cCity</h6>
                        <h6>cPinCode</h6>
                        <h6>cState</h6>
                        <h6>cCountry</h6>
                        <h6>dlvl</h6>
                        <h6>rlvl</h6>
                    </div>

                </div>
                <div className='col-sm-2'></div>

                <div className="col-sm-5">
                    <div className="col-sm-5">
                        <div className="card-body pb-5 px-4">
                            <h6>{item.cContactName}</h6>
                            <h6>{item.cMobileNo}</h6>
                            <h6>{item.cgstNo}</h6>
                            <h6>{item.cpanNo}</h6>
                            <h6>{item.cUdyogAadhar}</h6>
                            <h6>{item.cArea}</h6>
                            <h6>{item.cCity}</h6>
                            <h6>{item.cPinCode}</h6>
                            <h6>{item.cState}</h6>
                            <h6>{item.cCountry}</h6>
                            <h6>{item.dlvl}</h6>
                            <h6>{item.rlvl}</h6>
                        </div>

                    </div>
                </div>
                <div className='but1'>
                    <button type="button" class="btn btn-outline-dark btn-rounded" data-mdb-ripple-color="dark" onClick={() => opendetails(item.id)}>More Info</button>
                </div>
            </div>
        </div>
    );
}
export default Search1