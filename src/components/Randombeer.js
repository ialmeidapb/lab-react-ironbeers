import React, { Component } from "react";
import axios from "axios";
import NavBar from "./NavBar"

class Randombeer extends Component{
    state = {
        beer: "",
      };
      componentDidMount = async () => {
        try {
          const response = await axios.get(
            "https://ih-beers-api2.herokuapp.com/beers/random"
          );
          console.log(response);
          this.setState({ beers: [...response.data] });
        } catch (err) {
          console.error(err);
        }
      };



    render=()=>{
        return(
            <div>
            <NavBar/>
            <div className="container mt-5 text-center">
            <img src={this.state.beer.image_url} width="100px"></img>
            <h1>{this.state.beer.name}</h1>
            <h4>{this.state.beer.tagline} &nbsp; {this.state.beer.first_brewed} </h4>
            <h5>{this.state.beer.attenuation_level} </h5>
            <p className="text-justify">{this.state.beer.description}</p>
            <p>{this.state.beer.contributed_by}</p>
            </div>



            </div>
        )

    }
}

export default Randombeer;