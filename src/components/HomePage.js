import React from "react";
import randomBeer from "../assets/random-beer.png"
import beer from "../assets/beers.png"
import addbeer from "../assets//new-beer.png"
import { Link } from "react-router-dom";


function HomePage(){

    return(
     <div className="container mt-5">

            <div className="card" style={{width: "50rem"}}>
            <img src={beer} className="card-img-top" alt="random-beers"/>
            <div className="card-body">
                <h5 className="card-title">All Beers</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/beers" className="btn btn-primary">More</a>
            </div>
            </div>

            <div className="card" style={{width: "50rem"}}>
            <img src={randomBeer} className="card-img-top" alt="random-beers"/>
            <div className="card-body">
                <h5 className="card-title">Random</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/beers/random" className="btn btn-primary">More</a>
            </div>
            </div>

            <div className="card" style={{width: "50rem"}}>
            <img src={addbeer} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">New Beer</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">More</a>
            </div>
            </div>


        
        </div>
    )
}

export default HomePage;