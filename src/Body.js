import React, { Component } from "react";
import Footer from "./Footer";
import Forms from "./Forms";

class Body extends Component {
  render() {
    return (
      <>
        <div className="container-fluid padding-5  body">
          <div className="row mt align-items-center"></div>
          <Forms />
        </div>
        <Footer />
      </>
    );
  }
}

export default Body;

{
  /* <form className="form-inline" >
<div className="row" >
<div className="form-group" >
    <div className="col col-md-6 col-lg-5mmt" >
        <input type="text" className="form-control" name="address" id="adress" aria-hidden="address" placeholder="Address" />
    </div>
    <div className="col col-md-6 col-lg-5 mmt" >
        <input type="text" className="form-control" name="unit" id="unit" aria-hidden="unit" placeholder="Unit" />
    </div>
</div>
</div>
<div className="row" >
<div className="form-group" >
    <div className="col col-sm-6 col-lg-5 col-md-6 mmt" >
        <input type="text" className="form-control" name="address" id="adress" aria-hidden="address" placeholder="Address" />
    </div>
    <div className="col col-sm-6 col-lg-5 col-md-6 mmt" >
        <input type="text" className="form-control" name="unit" id="unit" aria-hidden="unit" placeholder="Unit" />
    </div>
</div>
</div>

</form> */
}
