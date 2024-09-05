import { Card } from "react-bootstrap";
import React from "react";
import image from "./logos/outbounds.png";

const Card2 = () => {
    return (
        <Card>
            <div class="card text-center">
                <div className="card-header" style={{backgroundColor:"lightgreen"}}>
                    <a href="tel:855-503-0008" class="btn border-black flex-fill"><i class="bi bi-telephone"></i> Call now</a>
                </div>
                <div class="row no-gutters">
                    <div class="col-auto" style={{textAlign:"left", marginTop:"75px", marginLeft:"25px"}}>
                        <div className="out-logo">
                            <img src={image} class="img-fluid" alt="" width={175} height={100} />
                        </div>
                    </div>
                <div class="col">
                    <div class="card-body text-center">
                        <h5 class="card-title" style={{fontFamily:"sans-serif", fontWeight:"bold", fontSize:"26px",}}>Outbounds</h5>
                            <div className="content">
                                <div className="checkmark" style={{display:"flex", alignItems:"center"}}>&#10003; Utilizes AI to select the most appropriate and safe transport company.</div>
                                <div className="checkmark" style={{display:"flex", alignItems:"center"}}>&#10003; Strict rules regarding carrier selection to ensure safety and experience.</div>
                                <div className="checkmark" style={{display:"flex", alignItems:"center"}}>&#10003; Outstanding customer service and professional claim handling.</div>
                                <div className="checkmark" style={{display:"flex", alignItems:"center"}}>&#10003; Adheres strictly to initial quotes without last-minute changes.</div><br></br>
                            </div>
                        </div>
                    </div>
                    <div class="col-auto align-self-center">
                        <div class="card-body">
                            <a href="https://outbounds.at/" target="_blank" rel="noreferrer" class="btn btn-primary float-right mb-2">Get free quote</a>
                        </div>
                    </div>
                </div>
                <div class="card-footer text-muted">
                    <span class="mr-2">4.8 rating</span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star-half-o checked"></span>
                </div>   
            </div>
        </Card>
    );
}
 
export default Card2;