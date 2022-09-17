import React, { Component } from "react";

class Forms extends Component {
  render() {
    return (
      <>
        <form>
        <div className=" col col-sm-6 col-md-6 border fit" >
          <div className="row">
            <div
              className=" col-9 col-sm-9 col-md-9 col-lg-9 border">
                <input type="text" id="address" name="address" placeholder="Address" aria-hidden="address" className="form-control" />
              </div>
            <div
              className="col-3 col-sm-3 col-md-3 col-lg-3  border">
                <input type="text" className="form-control" id="unit" name="unit" placeholder="Unit" aria-hidden="unit"/>
              </div>
          </div>
          <div className="row">
            <div
              className=" col-5 col-sm-5 col-md-3 col-lg-3  border">
                <input type="text" id="state" name="state" placeholder="state" aria-hidden="state" className="form-control" />
              </div>
            <div
              className="col-6 col-sm-6 col-md-5 col-lg-5  border">
                <input type="number" className="form-control" id="zip-code" name="zip-code" placeholder="zip code" aria-hidden="zip-code"/>
              </div>
          </div>
          <hr/>
          <div className="row">
            <div
              className=" col-5 col-sm-5 col-md-4 col-lg-5  border">
                <input type="text" id="name" name="name" placeholder="Name" aria-hidden="name" className="form-control" />
              </div>
            <div
              className="col-7 col-sm-7 col-md-8 col-lg-7  border">
                <input type="text" className="form-control" id="Last-name" name="Last-name" placeholder="Last name" aria-hidden="Last-name"/>
              </div>
          </div>
          <div className="row" >
            <div className="col-12 col-sm-12 col-md-12 col-lg-5 border" >
            <input type="number" className="form-control" id="phone-number" name="phone-number" placeholder="Phone number" aria-hidden="phone-number"/>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-7 border" >
            <input type="text" className="form-control" id="email" name="email" placeholder="Email" aria-hidden="email"/>
            </div>
          </div>
          <div className="row">
            <div className="col " >
            <button className="btn btn-primary btn-block mt-2" >Submit</button>
            </div>
        </div>
        </div>
        
        
        </form>
      </>
    );
  }
}

export default Forms;
