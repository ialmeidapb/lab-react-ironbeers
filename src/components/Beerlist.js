import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NavBar from "./NavBar"

class Beerlist extends Component{
    state = {
        beers: [],
      };
      componentDidMount = async () => {
        try {
          const response = await axios.get(
            "https://ih-beers-api2.herokuapp.com/beers"
          );
          console.log(response);
          this.setState({ beers: [...response.data] });
        } catch (err) {
          console.error(err);
        }
      };
      


    render=()=>{
            return (<div>
            <NavBar/>
            {this.state.beers.map((beer) => {
              return (
                <div key={beer._id} className="media m-3">
                <Link to={`/beers/${beer._id}`}><img src={beer.image_url}  width="40px" className="align-self-center mr-3" alt="beerimage"/></Link>
                <div className="media-body">
                    <h3 className="mt-0">{beer.name}</h3>
                    <p>{beer.tagline}</p>
                    <h5 style={{fontSize:'15px'}}>Created By: {beer.contributed_by}</h5>
                    
                </div>
                </div>
                
            );
            })}
            </div>)
    }
}
export default Beerlist;