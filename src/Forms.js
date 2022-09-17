import React, { Component } from "react";

class Forms extends Component {
  constructor(props) {
    super(props);
}

 state = {
    name:"",
    email:"",
    phone_number:"",
    last_name:"",
    zip_code:"",
    state:"",
    unit:"",
    address:""
  }


  showAlert = (params) => {
    alert(
      `Dear ${this.state.name} ${this.state.last_name} Thank you for Signing up \n to our e-newspaper, you will get your order in your Email: ${this.state.email} \n 
      we might call you at: ${this.state.phone_number} `
      )
  }

  changeVal = (e) => {
    
    const key = e.currentTarget.name  ;
  const value = e.currentTarget.value;

  this.setState( () => ({
    [key]: value
  }) )
  
  }

  render() {
    return (
      <>
        <form>
          <div className=" col col-sm-5 col-md-5 border fit">
            <div className="row">
              <div className=" col-9 col-sm-9 col-md-9 col-lg-9 borders">
                <input
                  type="text" 
                  value={this.state.address} 
                  onChange={ this.changeVal }
                  id="address"
                  name="address"
                  placeholder="Address"
                  aria-hidden="address"
                  className="form-control"
                />
              </div>
              <div className="col-3 col-sm-3 col-md-3 col-lg-3  borders">
                <input
                  type="text"
                  value={this.state.unit} 
                  onChange={ this.changeVal }
                  className="form-control"
                  id="unit"
                  name="unit"
                  placeholder="Unit"
                  aria-hidden="unit"
                />
              </div>
            </div>
            <div className="row">
              <div className=" col-5 col-sm-5 col-md-3 col-lg-3  borders">
                <input
                  type="text"
                  value={this.state.state} 
                  onChange={ this.changeVal }
                  id="state"
                  name="state"
                  placeholder="state"
                  aria-hidden="state"
                  className="form-control"
                />
              </div>
              <div className="col-6 col-sm-6 col-md-5 col-lg-5  borders">
                <input
                  type="number"
                  value={this.state.zip_code} 
                  onChange={ this.changeVal }
                  className="form-control"
                  id="zip_code"
                  name="zip_code"
                  placeholder="zip code"
                  aria-hidden="zip_code"
                />
              </div>
            </div>
            <hr />
            <div className="row">
              <div className=" col-5 col-sm-5 col-md-4 col-lg-5  borders">
                <input
                  type="text"
                  value={this.state.name} 
                  onChange={ this.changeVal }
                  id="name"
                  name="name"
                  placeholder="Name"
                  aria-hidden="name"
                  className="form-control"
                />
              </div>
              <div className="col-7 col-sm-7 col-md-8 col-lg-7  borders">
                <input
                  type="text"
                  value={this.state.last_name} 
                  onChange={ this.changeVal }
                  className="form-control"
                  id="last_name"
                  name="last_name"
                  placeholder="Last name"
                  aria-hidden="last_name"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-sm-12 col-md-12 col-lg-5 borders">
                <input
                  type="number"
                  value={this.state.phone_number} 
                  onChange={ this.changeVal }
                  className="form-control"
                  id="phone_number"
                  name="phone_number"
                  placeholder="Phone number"
                  aria-hidden="phone_number"
                />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-7 borders">
                <input
                  type="text"
                  value={this.state.email} 
                  onChange={ this.changeVal }
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Email"
                  aria-hidden="email"
                />
              </div>
            </div>
            <div className="row">
              <div className="col ">
                <button className="btn btn-primary btn-block mt-2" onClick={this.showAlert} >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default Forms;
