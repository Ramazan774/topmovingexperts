import { Card } from "react-bootstrap";
import React from "react";
import image from "./logos/outbounds.png";

const Card2 = () => {
    return (
        <Card>
            <div class="card text-center">
                <div className="card-header" style={{backgroundColor:"lightgreen"}}>
                    <a href="#" class="btn border-black flex-fill"><i class="bi bi-telephone"></i> 888-877-8888</a>
                </div>
                <div class="row no-gutters">
                    <div class="col-auto" style={{textAlign:"left", marginTop:"75px"}}>
                        <img src={image} class="img-fluid" alt="" width={200} height={100} />
                    </div>
                <div class="col">
                    <div class="card-body">
                        <h5 class="card-title" style={{fontFamily:"sans-serif", fontWeight:"bold", fontSize:"26px"}}>Outbounds</h5>
                        <div>
                            <div className="checkmark" style={{display:"flex", alignItems:"center"}}>&#10003; Punctual and reliable transportation services tailored to your needs.</div>
                            <div className="checkmark" style={{display:"flex", alignItems:"center"}}>&#10003; Extensive fleet of vehicles ensuring comfort, safety, and efficiency.</div>
                            <div className="checkmark" style={{display:"flex", alignItems:"center"}}>&#10003; Dedicated customer support available 24/7 to assist with any inquiries or bookings.</div>
                            <div className="checkmark" style={{display:"flex", alignItems:"center"}}>&#10003; Eco-friendly initiatives integrated into our operations, promoting sustainability while delivering exceptional service.</div>
                        </div>
                        </div>
                    </div>
                    <div class="col-auto align-self-center">
                        <div class="card-body">
                            <a href="https://outbounds.at/" target="_blank" class="btn btn-primary float-right mb-2">Get free quote</a>
                        </div>
                    </div>
                </div>
            <div class="card-footer text-muted">
                <span class="mr-2">4.3 rating</span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
            </div>   
            </div>
        </Card>
    );
}
 
export default Card2;