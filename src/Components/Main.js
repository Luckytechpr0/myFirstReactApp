import React from "react";
import Card from "./Cards";

const Main=()=>{
    return(
        <>

<div class="jumbotron jumbotron-fluid text-center mt-3">
  <div class="container">
    <h1 class="display-4" >Welcome Everyone</h1>
    <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
  </div>
</div>

     <div className="container">
        <div className="row">
            <div className="col-lg-3">
            <div class="card">
        <img className="card-img-top" src="https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/closeup-portrait-italian-greyhound-dog-looking-in-camera-isolated-black-sergey-taran.jpg" alt="Card image cap"/>
        <div className="card-body">
            <h5 className="card-title">Dog 1</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
</div>

            </div>

            <div className="col-lg-3">
            <div class="card">
        <img className="card-img-top" src="https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/1-closeup-portrait-of-jack-russell-terrier-dog-on-black-sergey-taran.jpg"/>
        <div className="card-body">
            <h5 className="card-title">Dog 2</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
</div>

            </div>

            <div className="col-lg-3">
            <div class="card">
        <img className="card-img-top" src="https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/closeup-portrait-of-yorkshire-terrier-dog-on-black-background-sergey-taran.jpg"/>
        <div className="card-body">
            <h5 className="card-title">Dog 3</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
</div>

            </div>

            <div className="col-lg-3">
            <div class="card">
        <img className="card-img-top" src="https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/1/1-closeup-portrait-of-jack-russell-terrier-dog-on-black-sergey-taran.jpg"/>
        <div className="card-body">
            <h5 className="card-title">Dog 4</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
</div>

            </div>
        </div>
     </div>
        </>
    )
    
    
    }
    export default Main;