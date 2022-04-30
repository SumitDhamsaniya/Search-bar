import React from "react";
const Cart =(props)=>{
    return(
       <div className="main">
            <div className="row">
                <div className="col-sm--6">
                    <div className="col-sm-3">
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
                    <div className="col-sm-3">
                        <h5>{props.item.cName}</h5>
                        <h5>{props.item.cCountry}</h5>
                        <h5>{props.item.cState}</h5>
                        <h5>{props.item.cCity}</h5>
                        <h5>{props.item.cArea}</h5>
                        <h5>{props.item.cPinCode}</h5>
                        <h5>{props.item.cMobileNo}</h5>
                        <h5>{props.item.cContactName}</h5>
                        <h5>{props.item.cgstNo}</h5>
                        <h5>{props.item.cpanNo}</h5>
                        <h5>{props.item.cUdyogAadhar}</h5>
                        <h5>{props.item.cgstNo}</h5>
                        <h5>{props.item.dlvl}</h5>
                        <h5>{props.item.rlvl}</h5>
                       
                    </div>
                </div>
            </div>
       </div>
    );
}
export default Cart