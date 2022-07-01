
import { Component } from "react";

class Navbar extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            idThatClicked : "",
        } 

        this.activelink = this.activelink.bind(this);
    }
   
  
   
    activelink(e) {
        const curentId = e.currentTarget.id;
        const list = document.querySelectorAll('.list');
        list.forEach((item) => {
            item.classList.remove('active');
        })
        const clickedElement = document.getElementById(curentId);
        clickedElement.classList.add('active');

    }
    


    render() { 

       
        return (
            <>
            <div className="cntainer big_parent">
      <div className="row si justify-content-start">
        <div className="col-6 align-self-center ">
          <ul className="d-flex">
            <li id="home" className="list unstyled active" onClick={this.activelink} >
              <a href="#">
                <span className="text">Home</span>
                <span className="icon">
                  <ion-icon name="home-outline"></ion-icon>
                </span>
              </a>
            </li>

            <li id="account" className="list unstyled " onClick={this.activelink}>
              <a href="#">
                <span className="icon">
                  <ion-icon name="accessibility-outline"></ion-icon>
                </span>
                <span className="text">Profil</span>
              </a>
            </li>

            <li id="call" className="list unstyled" onClick={this.activelink}>
              <a href="#">
                <span className="icon">
                  <ion-icon name="call-outline"></ion-icon>
                </span>
                <span className="text">Contact</span>
              </a>
            </li>

            <li id="about" className="list unstyled" onClick={this.activelink}>
              <a href="#">
                <span className="icon">
                  <ion-icon name="information-circle-outline"></ion-icon>
                </span>
                <span className="text">About</span>
              </a>
            </li>
            <div className="indicator"></div>
          </ul>
        </div>
      </div>
    </div>
            </>
        );
    }
}


 
export default Navbar;

// if (this.state.active === "list unstyled active") {
        //     this.setState(() => ({
        //         active: "list unstyled"
        //     }))

        // } else {
        //     this.setState(() => ({
        //         active: "list unstyled active"
        //     }))
        // }
        // console.log(this.state.active);
        //----------------------------------------------


            
        //     this.setState(() => ({
        //     idThatClicked: item.id
        //  }));
        //const listId = document.getElementById(this.state.idThatClicked);
         //console.log(listId);
        //listId.classList.add(this.state.idThatClicked);

